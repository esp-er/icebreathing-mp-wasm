package com.patriker.icebreathing

import androidx.compose.animation.core.*
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.layout.*
import androidx.compose.material.CircularProgressIndicator
import androidx.compose.material.Text
import androidx.compose.runtime.*
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.unit.*
import kotlinx.coroutines.delay

enum class HoldState{
    Stop, Inhale, Exhale;
}

@Composable
fun BreathInScreen(screenSize: IntSize,
                   timeLeft: Int = 17,
                   finishedHold: (SessionState) -> Unit,
                   clickedBack: () -> Unit = {} ){
    val holdTime = 16.0f
    var holdState by rememberSaveable { mutableStateOf(HoldState.Stop) }
    val transition = updateTransition(targetState = holdState)
    var time by remember { mutableStateOf(timeLeft) }
    val timeProgress by remember { derivedStateOf {  (time - 1) / holdTime } }

    val progressDia = minOf(screenSize.height, screenSize.width)


    var paused by rememberSaveable { mutableStateOf(false) }


    fun togglePause(){
        paused = !paused
    }

    LaunchedEffect(true) {
        holdState = HoldState.Inhale
        delay(2000)
        time--
        /*fixedRateTimer("timer", false, 2000, 1000) {
            if(time <= 2){
                holdState = HoldState.Exhale
            }
            if(time > 0 && !paused) time--
        }*/
    }
    LaunchedEffect(time, paused) {
        delay(1000L)
        if(time <= 2){
            holdState = HoldState.Exhale
        }
        if(time > 0 && !paused) time--
        if (time <= 0) {
            delay(1000)
            finishedHold(SessionState.BreatheInHold)
        }
    }

    fun clickedFinish(){
        time = 0
        finishedHold(SessionState.BreatheInHold)
    }

    val countdownProgress by animateFloatAsState(
        targetValue = timeProgress,
        animationSpec = tween(1000, easing = LinearEasing)
    )


    val transitionMultiplier by
    transition.animateFloat(transitionSpec =
        { if(holdState == HoldState.Exhale) tween(3000) else tween(2000) }) { state ->
        when(state){
            HoldState.Stop -> 0.0f
            HoldState.Inhale -> 1.0f
            HoldState.Exhale -> 0.0f
        }
    }

    val progSize = DpSize(transitionMultiplier * progressDia.dp * 0.8f,
        transitionMultiplier * progressDia.dp * 0.8f)

    val lineDiam = DpSize(transitionMultiplier * progressDia.dp * 0.74f,
        transitionMultiplier * progressDia.dp * 0.74f)
    Canvas(modifier = Modifier.offset(0.dp, 0.dp)) {
        drawCircle(
            radius = minOf(lineDiam.height.toPx(), lineDiam.width.toPx()) / 2f,
            color = Color.White.copy(alpha=0.9f),
            style = Stroke(width = ((progressDia / 20.0f) * transitionMultiplier))
        )
    }

    CircularProgressIndicator(
        modifier = Modifier.size(progSize),
        progress = maxOf(countdownProgress, 0f),
        strokeWidth = ((progressDia / 15.0f) * transitionMultiplier).dp,
        color = mainColorTemp.copy(alpha=0.98f)
    )

    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {

        Column(horizontalAlignment = Alignment.CenterHorizontally) {
            if (transition.currentState == HoldState.Stop) {
                Text(
                    StrRes.inhale,
                    style = TextStyle(
                        fontSize = (transitionMultiplier * 34).sp,
                        color = Color.White
                    )
                )
            } else {
                Box{
                    if (holdState == HoldState.Inhale) {
                        Column(horizontalAlignment = Alignment.CenterHorizontally) {
                            Text(
                                StrRes.holdbreath,
                                style = TextStyle(
                                    fontSize = 28.sp,
                                    color = Color.White.copy(alpha = transitionMultiplier)
                                )
                            )
                            Text(
                                (time - 1).secondsAsStr(),
                                style = TextStyle(
                                    fontSize = 32.sp,
                                    color = Color.White.copy(alpha = transitionMultiplier)
                                )
                            )
                            if(paused) {
                                Text(
                                    StrRes.paused,
                                    style = TextStyle(fontSize = 32.sp, color = Color.White)
                                )
                            }
                        }
                    } else {
                        Text(
                            StrRes.exhale,
                            style = TextStyle(
                                fontSize = (28 * transitionMultiplier).sp,
                                color = Color.White.copy(
                                    alpha = minOf(
                                        1.0f,
                                        transitionMultiplier + 0.5f
                                    )
                                )
                            )
                        )
                    }
                }
            }
        }

        BackButton(
            backClicked = { clickedBack() },
            mod = Modifier
                .align(Alignment.BottomStart)
                .padding(8.dp),
            size = 32.dp
        )

        val pauseAlign = Modifier
            .align(Alignment.BottomCenter)
            .padding(8.dp)
        if (paused) {
            ContButton(::togglePause, pauseAlign, 36.dp)
        } else {
            PauseButton(::togglePause, pauseAlign, 36.dp)
        }

        FinishBreatheButton(
            finishClicked = { clickedFinish() },
            mod = Modifier
                .align(Alignment.BottomEnd)
                .padding(8.dp),
            size = 32.dp
        )
    }
}
