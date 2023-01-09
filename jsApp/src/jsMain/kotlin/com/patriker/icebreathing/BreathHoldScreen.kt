package com.patriker.icebreathing

import androidx.compose.animation.core.LinearEasing
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.tween
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

@Composable
fun BreathHoldScreen(screenSize: IntSize,
                     roundNum: Int,
                     timeLeft: Int,
                     finishedHold: (SessionState) -> Unit,
                     clickedBack: () -> Unit){
    var time by remember{ mutableStateOf(timeLeft) }

    val timeProgress by remember { derivedStateOf {  (timeLeft - time) / timeLeft.toFloat() } }

    var paused by rememberSaveable { mutableStateOf(false) }

    val countdownProgress by animateFloatAsState(
        targetValue = timeProgress,
        animationSpec = tween(1000, easing = LinearEasing)
    )

    fun togglePause(){
        paused = !paused
    }

    //NOTE: val timeText by remember { derivedStateOf {timeLeft.secondsAsStr()}}
    LaunchedEffect(true) {
        delay(1000)
        time--
        /*fixedRateTimer("timer", false, 0, 1000) {
            if(!paused)
                time--
        }*/
    }

    LaunchedEffect(time, paused){
        delay(1000L)
        if(!paused)
            time--

        if (time <= 0) finishedHold(SessionState.BreatheHold)
    }

    fun clickedFinish(){
        time = 0
        finishedHold(SessionState.BreatheHold)
    }

    fun goToStart(){
        finishedHold(SessionState.Done)
        clickedBack()
    }


    val progressDia = minOf(screenSize.height, screenSize.width)
    val progSize = DpSize(progressDia.dp * 0.8f, progressDia.dp * 0.8f)

    val lineDiam = DpSize(progressDia.dp * 0.73f, progressDia.dp * 0.73f)


    Canvas(modifier = Modifier.offset(0.dp, 0.dp)) {
        drawCircle(
            radius = minOf(lineDiam.height.toPx(), lineDiam.width.toPx()) / 2f,
            color = mainColorTemp.copy(alpha=0.9f),
            style = Stroke(width = (progressDia / 20.0f))
        )
    }

    CircularProgressIndicator(
        modifier = Modifier.size(progSize),
        progress = maxOf(countdownProgress, 0f),
        strokeWidth = (progressDia / 15.0f).dp,
        color = Color.White.copy(alpha=0.98f)
    )



        Box(contentAlignment = Alignment.Center, modifier = Modifier.fillMaxSize()) {
        RoundText(
            round = roundNum,
            mod = Modifier
                .padding(horizontal = 16.dp, vertical = 16.dp)
                .align(Alignment.TopStart)
        )

        Column(horizontalAlignment = Alignment.CenterHorizontally) {
            Text(
                StrRes.holdbreath,
                style = TextStyle(fontSize = 28.sp, color = Color.White)
            )
            Text(time.secondsAsStr(),
                style = TextStyle(fontSize = 32.sp, color = Color.White)
            )
            if(paused) {
                Text(
                    StrRes.paused,
                    style = TextStyle(fontSize = 32.sp, color = Color.White)
                )
            }
        }
        BackButton(backClicked = ::goToStart,
            mod = Modifier
                .align(Alignment.BottomStart)
                .padding(8.dp),
            size = 32.dp)

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
            size = 32.dp)
    }

}
