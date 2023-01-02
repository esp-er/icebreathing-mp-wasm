package com.patriker.icebreathing

import androidx.compose.foundation.layout.Box
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.material.icons.outlined.*
import androidx.compose.foundation.layout.*
import androidx.compose.material.*
import androidx.compose.material.icons.Icons
import androidx.compose.runtime.*
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.ExperimentalTextApi
import androidx.compose.ui.unit.*


const val ANIM_MS = 1540
enum class SessionState{
    Prepare, Breathe, BreatheHold, BreatheInHold, Done;
}



@ExperimentalTextApi
@OptIn(ExperimentalMaterialApi::class)
@Composable
fun BreatheScreen(thisSession: SessionData, clickedBack: () -> Unit){
    var roundNum by rememberSaveable{ mutableStateOf(1)}
    val roundGoal by rememberSaveable{ mutableStateOf(thisSession.numRounds)}
    val breathGoal by rememberSaveable{ mutableStateOf(thisSession.numBreaths)}
    var breathPaused by rememberSaveable{ mutableStateOf(false)}
    var finishClicked by remember{ mutableStateOf(false)}
    var numBreaths by rememberSaveable{ mutableStateOf(1)}
    var sessState by rememberSaveable{ mutableStateOf(SessionState.Prepare)}
    var speedDropDown by remember { mutableStateOf(false) }
    var breathRate by rememberSaveable { mutableStateOf(BreathRate.X1)}
    val animationSpeed by remember { derivedStateOf{  breathRate.toMs(ANIM_MS)  } }
    var speedText by remember { mutableStateOf("${breathRate.str()}") }


    val screenSize by remember {
        mutableStateOf(IntSize(600, 800))
    }




    Box(contentAlignment = Alignment.Center) {

        fun transitionBreathing(s: SessionState){
            sessState = if(roundNum > roundGoal)
                SessionState.Done
            else
                when(s){
                    SessionState.Prepare -> SessionState.Breathe
                    SessionState.Breathe -> SessionState.BreatheHold
                    SessionState.BreatheHold -> SessionState.BreatheInHold
                    SessionState.BreatheInHold -> SessionState.Prepare
                    else -> SessionState.Done
                }
        }


        fun incrementBreath() {
            if(numBreaths < breathGoal && !finishClicked){
                numBreaths += 1
            }
            else{
                numBreaths = 1
                finishClicked = false
                transitionBreathing(SessionState.Breathe)
            }
        }
        fun finishBreathing() {
            finishClicked = true
            //numBreaths = 1
            //transitionBreathing(SessionState.Breathe)
        }
        fun goToStart(){
            transitionBreathing(SessionState.Done)
            clickedBack()
        }

        fun incrementRound(s: SessionState) {
            if(roundNum <= roundGoal) roundNum += 1
            transitionBreathing(s)
        }
        fun speedToText(rate: BreathRate): String = when(rate){
            BreathRate.X0_75-> "0.75x"
            BreathRate.X0_9 -> "0.9x"
            BreathRate.X1 -> "1x"
            BreathRate.X1_1-> "1.1x"
            BreathRate.X1_25-> "1.25x"
        }

        fun pauseClicked()   { breathPaused = true }
        fun continueClicked(){ breathPaused = false }
        fun increaseSpeed() { breathRate = breathRate.Increase()}
        fun decreaseSpeed() { breathRate = breathRate.Decrease()}
        /*
        Column(modifier = Modifier.align(Alignment.TopEnd)){
            DropdownMenu(
                expanded = speedDropDown,
                onDismissRequest = { speedDropDown = false },
            ) {
                BreathRate.values().toList().forEach {
                    DropdownMenuItem(onClick = {
                        breathRate = it
                        speedText = speedToText(it)
                        speedDropDown = false
                    }) {
                        val str= when(it){
                            BreathRate.X0_75-> "0.75x"
                            BreathRate.X0_9 -> "0.9x"
                            BreathRate.X1 -> "1x"
                            BreathRate.X1_1-> "1.1x"
                            BreathRate.X1_25-> "1.25x"
                        }
                        Text(text = str)
                    }
                }
            }
        }*/


        if(sessState == SessionState.Prepare){
            TransitionScreen(roundNum, breathGoal, ::transitionBreathing)
        }
        else if(sessState == SessionState.BreatheHold) {
            BreathHoldScreen(screenSize,
                roundNum,
                thisSession.breathHoldTime.getOrElse(roundNum, { 1 }),
                ::transitionBreathing, clickedBack)
        }
        else if(sessState == SessionState.BreatheInHold)
            BreathInScreen(screenSize,
                finishedHold = ::incrementRound,
                clickedBack = ::goToStart
            )
        else if(sessState == SessionState.Done) {
            FinishScreen(thisSession, clickedBack = ::goToStart)
        }
        else{

            BreatheCanvas(screenSize, currBreaths = numBreaths, totalBreaths = breathGoal,
                onFinishBreath = ::incrementBreath,
                breathPaused = breathPaused,
                finishClicked = finishClicked,
                animSpeed = animationSpeed,
            )

            //Overlay button alignments
            val pauseAlign = Modifier
                .align(Alignment.BottomCenter)
                .padding(vertical = 8.dp)
            val backModifier = Modifier
                .align(Alignment.BottomStart)
                .padding(8.dp)

            RoundText(
                round = roundNum,
                mod = Modifier
                    .padding(16.dp)
                    .align(Alignment.TopStart)
            )

            /*SpeedButton(speedText = speedText, onClicked = { speedDropDown = true },
                mod = Modifier
                    .align(Alignment.TopEnd)
                    .padding(8.dp),
                buttonDp = 24.dp )
             */


            Row(modifier = Modifier.align(Alignment.BottomCenter)) {
                if (breathPaused) {
                    ContButton(::continueClicked, pauseAlign, 36.dp)
                } else {
                    PauseButton(::pauseClicked, pauseAlign, 36.dp)
                }

            }
            BackButton(backClicked = ::goToStart,
                mod = backModifier,
                size = 32.dp )

            if(!breathPaused) {
                FinishBreatheButton(
                    ::finishBreathing, mod = Modifier
                        .align(Alignment.BottomEnd)
                        .padding(8.dp),
                    32.dp
                )
            }

        }
    }
}

@Composable
fun RoundText(round: Int, mod: Modifier){
    Text(
        text = "Round $round",
        fontSize = 16.sp,
        color = Color.White,
        modifier = mod
    )

}




@Composable
fun SpeedButton(speedText: String = "1x", onClicked: () -> Unit, mod: Modifier, buttonDp: Dp){
    IconButton(
        onClick = { onClicked() },
        modifier = mod
    ){
        Column{
            Icon(Icons.Outlined.Speed, "Change Breathing Speed",
                tint = Color.White,
                modifier = Modifier.size(buttonDp, buttonDp))

            Text(speedText,
                modifier = Modifier.align(Alignment.CenterHorizontally),
                color = Color.White,
                fontSize = 12.sp)


        }

    }
}





@Composable
fun ContButton(contClicked: () -> Unit, mod: Modifier, sz: Dp) {
    IconButton(
        onClick = { contClicked() },
        modifier = mod
    ){
        Icon(Icons.Outlined.PlayArrow, "", tint = Color.White,
        modifier = Modifier.size(sz,sz))
    }
}

