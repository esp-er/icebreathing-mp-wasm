package com.patriker.icebreathing

import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.runtime.*
import androidx.compose.ui.text.ExperimentalTextApi


val defHoldMap = mapOf(1 to 90, 2 to 120, 3 to 145, 4 to 150, 5 to 150, 6 to 180, 7 to 180, 8 to 180, 9 to 180, 10 to 200)
@ExperimentalFoundationApi
@ExperimentalTextApi
@Composable
fun App() {
    var thisSession by remember { mutableStateOf(SessionData(30, 3, defHoldMap)) }

    fun clickedStartBreathing(s: SessionData) {
        AppState.screenState(ScreenType.Breathe)
    }

    fun clickedBack(){
        AppState.screenState(ScreenType.Start)
    }

    if(AppState.screenState() == ScreenType.Start){
        StartScreen(thisSession, ::clickedStartBreathing)
    }
    else{
        BreatheScreen(thisSession, ::clickedBack)
    }
}
