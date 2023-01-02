import org.jetbrains.compose.desktop.application.dsl.TargetFormat
import org.jetbrains.compose.desktop.application.dsl.JvmApplication



plugins {
    kotlin("multiplatform")
    id("org.jetbrains.compose")
}


buildscript {
    dependencies {
        classpath("com.guardsquare:proguard-gradle:7.3.0")
    }
}




kotlin {
    jvm {}
    sourceSets {
        val jvmMain by getting  {
            dependencies {
                implementation(compose.desktop.currentOs)
                implementation(project(":shared"))
            }
        }
    }
}

compose.desktop {
    application {
        mainClass = "aoc22d14.MainKt"
        nativeDistributions {
            targetFormats(TargetFormat.Dmg, TargetFormat.Msi, TargetFormat.Deb)
            packageName = "14composeanimation"
            packageVersion = "1.0.0"
        }
        
        buildTypes.release.proguard {
            obfuscate.set(false)
            isEnabled.set(true)
        }

    }
}

fun JvmApplication.configureProguard() {
    val jarTask = tasks.named<Jar>("jar")
    val allJars =
        jarTask.get().outputs.files + sourceSets.get("main").runtimeClasspath.filter { it.path.endsWith(".jar") }
            // workaround https://github.com/JetBrains/compose-jb/issues/1971
            .filterNot { it.name.startsWith("skiko-awt-") && !it.name.startsWith("skiko-awt-runtime-") }
            .distinctBy { it.name } // Prevent duplicate jars

    // Split the Jars to get the ones that need obfuscation and those that do not
    val (obfuscateJars, otherJars) = allJars.partition {
        !it.name.contains("slf4j", ignoreCase = true)
            .or(it.name.contains("logback", ignoreCase = true))
    }

    // Proguard Task definition!
    val proguard by tasks.register<proguard.gradle.ProGuardTask>("proguard") {
        dependsOn(jarTask)
        println("Config ProGuard")
        for (file in obfuscateJars) {
            injars(file)
            outjars(mapObfuscatedJarFile(file))
        }
        //val library = if (System.getProperty("java.version").startsWith("1.")) "lib/rt.jar" else "jmods"
        val library = "jmods"
        val customCompose = System.getenv("CUSTOMCOMPOSE").toBoolean()
        val windowsBuild = System.getenv("WINDOWSBUILD").toBoolean()
        if(windowsBuild)
            libraryjars("C:/java/zulu18fx/$library")
        else if(customCompose)
            libraryjars("/home/patrik/.sdkman/candidates/java/19.0.1.fx-zulu/$library")
        else
            libraryjars("${compose.desktop.application.javaHome ?: System.getProperty("java.home")}/$library")
        libraryjars(otherJars)
        configuration("proguard-rules-linux.pro")
    }

    // Disable Compose Desktop default config and add your own Jars
    disableDefaultConfiguration()
    fromFiles(proguard.outputs.files.asFileTree)
    fromFiles(otherJars)
    mainJar.set(jarTask.map { RegularFile { mapObfuscatedJarFile(it.archiveFile.get().asFile) } })
}

// Map Files to a known path
fun mapObfuscatedJarFile(file: File) =
    File("${project.buildDir}/tmp/obfuscated/${file.nameWithoutExtension}.min.jar")


tasks.register<proguard.gradle.ProGuardTask>("minifyJar") {
//minifyJar.configure{
    val packageUberJarForCurrentOS by tasks.getting
    //val packageUberJarForCurrentOS = tasks.get("packageUberJarForCurrentOS")
    dependsOn(packageUberJarForCurrentOS)
    val files = packageUberJarForCurrentOS.outputs.files
    injars(files)
    outjars(files.map { file -> File(file.parentFile, "${file.nameWithoutExtension}.min.jar") })

    val library = if (System.getProperty("java.version").startsWith("1.")) "lib/rt.jar" else "jmods"
    libraryjars("${System.getProperty("java.home")}/$library")

    //TODO: add platform detection here
    configuration("proguard-rules-linux.pro")
    //configuration("proguard-rules-windows.pro")
    //configuration("proguard-rules-windows.pro")
}