package com.patriker.icebreathing

import androidx.compose.animation.core.LinearEasing
import androidx.compose.animation.core.animateFloat
import androidx.compose.animation.core.tween
import androidx.compose.animation.core.updateTransition
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.material.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp


enum class PrepareState{
    Start,End
}
@Composable
fun TransitionScreen(roundNum: Int, breathGoal: Int, finishedPrep: (SessionState) -> Unit){
    var prepState by remember { mutableStateOf(PrepareState.Start) }
    val transition = updateTransition(targetState = prepState, label ="Prepared State Transition")

    LaunchedEffect(true){
        prepState = PrepareState.End
    }
    LaunchedEffect(transition.currentState){
        if (transition.currentState == PrepareState.End)
            finishedPrep(SessionState.Prepare)
    }
    val textOpacity by transition.animateFloat(
        transitionSpec ={ tween(2000,500, LinearEasing) },
        label = "Text Opacity"
    ) { state ->
        when(state){
            PrepareState.Start -> 1.0f
            PrepareState.End -> 0.0f
        }
    }

    Column(horizontalAlignment = Alignment.CenterHorizontally){
        Text("${StrRes.round} $roundNum", style = TextStyle(fontSize = 28.sp, color = Color.White.copy(alpha = textOpacity)))
        Text(StrRes.getready, style = TextStyle(fontSize = 28.sp, color = Color.White.copy(alpha = textOpacity)))
        Spacer(modifier = Modifier.height(30.dp))
        Text("$breathGoal ${StrRes.breaths}", style = TextStyle(fontSize = 24.sp, color = Color.White.copy(alpha = textOpacity)))
    }
}

