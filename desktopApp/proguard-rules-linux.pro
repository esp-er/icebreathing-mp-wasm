-dontobfuscate
#-dontoptimize
-dontwarn kotlinx.**
-dontwarn kotlin.**

-dontwarn org.slf4j.**


#-keep class kotlin.** { *; }
-keep class kotlinx.coroutines.** { *; }
-keep class kotlinx.** { *; }
-keep class org.jetbrains.skia.** { *; }
-keep class org.jetbrains.skiko.** { *; }
-keep class aoc22d14.** { *;  }



#-keepclasseswithmembernames,includedescriptorclasses class * {
#    native <methods>;
#}
#-keep class !org.sqlite.native.Windows.** { *; }
#-keep class !org.sqlite.native.** { *; }
#-keepdirectories !org/sqlite/native/Linux/arm
