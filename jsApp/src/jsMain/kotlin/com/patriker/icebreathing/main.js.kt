package com.patriker.icebreathing

import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Surface
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.ExperimentalTextApi
import androidx.compose.ui.window.Window
import com.patriker.icebreathing.App
import com.patriker.icebreathing.ui.theme.IcedroidTheme
import org.jetbrains.skiko.wasm.onWasmReady


@ExperimentalFoundationApi
@ExperimentalTextApi
fun main() {
    onWasmReady {
        Window("Ice Breathing") {
            IcedroidTheme{
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colors.background
                ) {
                    App()
                }
            }
        }
    }
}