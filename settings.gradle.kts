pluginManagement {
    repositories {
        gradlePluginPortal()
        maven("https://maven.pkg.jetbrains.space/public/p/compose/dev")
        google()
    }

    plugins {
        val composeVersion = "1.3.0-rc01"
        val kotlinVersion = "1.7.20"

        kotlin("jvm").version(kotlinVersion)
        kotlin("multiplatform").version(kotlinVersion)
        id("org.jetbrains.compose").version(composeVersion)
    }
}

rootProject.name = "icebreathing-mpp"

include(":shared")
include(":desktopApp")
include(":jsApp")

