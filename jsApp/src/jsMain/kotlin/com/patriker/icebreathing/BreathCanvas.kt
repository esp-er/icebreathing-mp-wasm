package com.patriker.icebreathing

import androidx.compose.animation.animateColor
import androidx.compose.animation.core.*
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.layout.offset
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.BlendMode
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.drawscope.DrawScope
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.text.*
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.font.createFontFamilyResolver
import androidx.compose.ui.unit.*
import kotlin.math.pow


enum class BreatheState{
    Full, Empty, Paused
}
enum class LeafPos{
    TopLeft, TopRight, BottomLeft, BottomRight, Top, Center
}


@ExperimentalTextApi
@Composable
fun BreatheCanvas(
    screenSize: IntSize,
    currBreaths: Int,
    totalBreaths: Int,
    onFinishBreath: () -> Unit,
    breathPaused: Boolean,
    finishClicked: Boolean,
    animSpeed: Int
) {
    val edgeLeaves = LeafPos.values().filterNot{ it == LeafPos.Center } //preallocate the values for performance
    var currRad by remember { mutableStateOf(0f) }
    var currRadDelayed by remember { mutableStateOf(0f) }

    val lightBlueColor = Color(0xFF70c5ff)

    val sizeDiv = 4.5f
    var radiusEnd by remember { mutableStateOf(minOf(screenSize.height / sizeDiv, screenSize.width / sizeDiv)) }
    var minRadius by remember { mutableStateOf( minOf(screenSize.height / sizeDiv, screenSize.width/ sizeDiv) / 100f) }
    var breatheState by remember { mutableStateOf(BreatheState.Empty) }

    var finalBreath by remember { mutableStateOf(false) }

    fun recalcRadius() {
        val r = minOf(screenSize.width / sizeDiv, screenSize.height / sizeDiv)
        radiusEnd = r
        minRadius = r / 100f
    }

    var prevState by remember { mutableStateOf(BreatheState.Paused) }

    LaunchedEffect(currBreaths) {
        recalcRadius()
        if(totalBreaths == currBreaths) finalBreath = true
        breatheState = BreatheState.Full
    }
    LaunchedEffect(breathPaused){
        if(breathPaused){
            prevState = breatheState
            breatheState = BreatheState.Paused
        }
        else if(prevState != BreatheState.Paused) {
            recalcRadius()
            breatheState = prevState
        }
    }

    LaunchedEffect(finishClicked) {
        if(finishClicked){
            finalBreath = true
            breatheState = BreatheState.Full
        }
    }



    val transit = updateTransition(targetState = breatheState)

    val animColor by transit.animateColor({
        when(breatheState) {
            BreatheState.Paused -> tween(100)
            else -> if(finalBreath && breatheState == BreatheState.Empty)
                tween(animSpeed, 1000)
            else tween(animSpeed)
        }
    } ) { state ->
        when (state) {
            BreatheState.Full -> mainColorTemp
            BreatheState.Empty -> secondColorTemp
            BreatheState.Paused -> Color.DarkGray
        }
    }


    val outlineColor by transit.animateColor({
        if(breatheState == BreatheState.Empty && finalBreath)
            tween(animSpeed + 200,1200)
        else tween(animSpeed)
    }) { state ->

        when (state) {
            BreatheState.Full -> mainColorTemp
            BreatheState.Empty -> secondColorTemp
            BreatheState.Paused -> Color.DarkGray
        }
    }
    /*
    val newState = { state: BreatheState ->
        when (state) {
            BreatheState.Full -> BreatheState.Empty
            else -> BreatheState.Full
        }
    }*/
    val fontColor by transit.animateColor({ tween(if(transit.targetState == BreatheState.Empty) animSpeed + 500 else animSpeed, easing = LinearOutSlowInEasing)}) { state ->
        when (state) {
            BreatheState.Full -> MaterialTheme.colors.background
            BreatheState.Empty -> lightBlueColor
            BreatheState.Paused -> Color.DarkGray
        }
    }

      val fontColorSlow by transit.animateColor({ tween(animSpeed + 500 , easing = LinearEasing)}) { state ->
        when (state) {
            BreatheState.Full -> MaterialTheme.colors.background
            BreatheState.Empty -> if(!finalBreath) lightBlueColor.copy(alpha = 0.5f) else MaterialTheme.colors.background
            BreatheState.Paused -> Color.DarkGray
        }
    }

    val breathRad by animateFloatAsState(
        targetValue = when (breatheState) {
            BreatheState.Full -> radiusEnd
            BreatheState.Empty -> minRadius
            BreatheState.Paused -> currRad
        },
        animationSpec =
        if(breatheState == BreatheState.Paused)
            tween(1)
        else if(breatheState == BreatheState.Empty && finalBreath)
            tween(animSpeed + 200, 1200)
        else
            tween(animSpeed),
        visibilityThreshold = 0.5f,
        finishedListener = {
            if(breatheState == BreatheState.Full) {
                breatheState = BreatheState.Empty
            }
            else if(breatheState == BreatheState.Paused)
                breatheState = BreatheState.Paused
            else {
                onFinishBreath()
            }
        }
    )

    val currRadUpdate by remember { derivedStateOf { breathRad } }
    LaunchedEffect(currRadUpdate){
        currRad = currRadUpdate
    }

    val breathRadDelayed by animateFloatAsState(
        targetValue = when (breatheState) {
            BreatheState.Full -> radiusEnd * .8f
            BreatheState.Empty -> minRadius - 1f
            BreatheState.Paused -> currRadDelayed
        },
        animationSpec = when (breatheState) {
            BreatheState.Full -> tween(animSpeed, delayMillis = animSpeed / 8)
            BreatheState.Empty -> {
            if(finalBreath) {
                tween(animSpeed + 200 - (animSpeed / 6), 1300)
            }
            else
                tween(animSpeed - (animSpeed / 6))
            }
            BreatheState.Paused -> tween(1)
        },
        visibilityThreshold = 0.5f,
        finishedListener = {}
    )

    val currRadDelayedUpd by remember { derivedStateOf { breathRadDelayed } }
    LaunchedEffect(currRadUpdate){ currRadDelayed = currRadDelayedUpd }


    fun DrawScope.drawLeaf(radius: Float, color: Color, pos: LeafPos, centerOffset: Offset, drawOutlineOnly: Boolean = false): Unit {

        val center = when (pos) {
            LeafPos.Top -> Offset(centerOffset.x, centerOffset.y - (breathRad / 1.25f) - breathRad.pow(1.25f) / 6f)
            LeafPos.TopLeft -> Offset(
                centerOffset.x - (breathRad / 2) - breathRad.pow(1.25f) / 6f,
                centerOffset.y - breathRad.pow(1.25f) / 6f
            )
            LeafPos.TopRight -> Offset(
                centerOffset.x + (breathRad / 2) + breathRad.pow(1.25f) / 6f,
                centerOffset.y - breathRad.pow(1.25f) / 6f
            )
            LeafPos.BottomLeft -> Offset(
                centerOffset.x - breathRad.pow(1.25f) / 6f,
                centerOffset.y + breathRad.pow(1.25f) / 6f
            )
            LeafPos.BottomRight -> Offset(
                centerOffset.x + breathRad.pow(1.25f) / 6f,
                centerOffset.y + breathRad.pow(1.25f) / 6f
            )
            LeafPos.Center -> Offset(centerOffset.x, centerOffset.y - (breathRad / 3))
        }

        if(!drawOutlineOnly){
            drawCircle(
                blendMode = BlendMode.Overlay,
                color = color.copy(alpha=0.8f),
                radius = radius,
                center = center
            )
        }
        if(pos == LeafPos.Center){
            drawCircle(
                color = color,
                radius = radius,
                center = center
            )
        }
        else{
            //Background Color line
            drawCircle(
                blendMode = BlendMode.Plus,
                color = outlineColor.copy(alpha=0.9f),
                style = Stroke(width = (6f * breathRad / radiusEnd)),
                radius = radius,
                center = center
            )
        }

    }

    fun breathNumber() = when(breatheState){
        BreatheState.Paused -> "Paused"
        BreatheState.Empty -> if(finalBreath){ if(breathRad/radiusEnd < 0.99) "Breathe Out" else "Fully In!"}
        else currBreaths.toString()
        else -> if(finalBreath) "Fully In!" else currBreaths.toString()
    }


    fun breatheText() = when(breatheState){
        BreatheState.Paused -> StrRes.paused
        BreatheState.Empty -> if(finalBreath){ if(breathRad/radiusEnd < 0.99) StrRes.breatheout else StrRes.fullyin}
        else currBreaths.toString()
        else -> if(finalBreath) "Fully\n In!" else currBreaths.toString()
    }


    Canvas(modifier = Modifier.offset(0.dp, 0.dp)) {
        val centerOffset = Offset(0f, 0f)


        /* Inner Leaf
        drawCircle(
            blendMode = BlendMode.Softlight,
            color = animColor,
            radius = breathRadDelayed,
            center = Offset(
                centerOffset.x - (breathRad / 2) - breathRad.pow(1.28f) / 6f,
                centerOffset.y - breathRad.pow(1.28f) / 6f
            )
        )*/
        for (p in edgeLeaves) {
            drawLeaf(
                radius = breathRad,
                color = animColor,
                pos = p,
                centerOffset = centerOffset
            )
        }
        for (p in edgeLeaves) {
            drawLeaf(
                radius = breathRad,
                color = animColor,
                pos = p,
                centerOffset = centerOffset,
                drawOutlineOnly = true
            )
        }
        //Center circle
        drawLeaf(
            radius = if(finalBreath) breathRadDelayed else breathRadDelayed * 0.8f,
            color = animColor,
            pos = LeafPos.Center,
            centerOffset = centerOffset
        )



        val numberSize =
            if(breatheState == BreatheState.Paused) 200f
            else if(breathRad/radiusEnd > 0.3f && breathRad > minRadius) (breathRad/radiusEnd) * 120f
            else 1f

        val numberAlpha = if(breatheState == BreatheState.Paused) 255 else ((breathRad/radiusEnd) * 255).toInt()
        /*drawContext.canvas.nativeCanvas.apply {
            drawText(
                breathNumber(),
                size.width / 2 - 5f,
                size.height / 2 - breathRad /3 + numberSize / 3,
                android.graphics.Paint().apply {
                    textSize = numberSize
                    textAlign = android.graphics.Paint.Align.CENTER
                    this.setColor(android.graphics.Color.WHITE)
                    alpha = numberAlpha
                    this.setShadowLayer(4.0f, 5.0f, 8.0f, android.graphics.Color.DKGRAY)
                }
            )
        }*/

        //TODO: Enable more efficient text drawing
        /*drawText(
            TextMeasurer(createFontFamilyResolver(), Density(1f,1f), LayoutDirection.Ltr).measure(AnnotatedString(breatheText())),
            color = Color.Black,
            topLeft = Offset(10f, 10f),
            alpha = 1.0f)*/

    }


    fun breatheTextSize(): TextUnit {
        return if(breathPaused) radiusEnd.sp
        else if(finalBreath) (radiusEnd / 4f).sp
        else (radiusEnd  / 2.7).sp
    }

    //TODO: copy text style into shadow text style and enable the shadow
    if(currRad/radiusEnd > 0.55f) {
        Text(
            breatheText(),
            fontSize = breatheTextSize(),
            color = if(finalBreath)fontColorSlow else fontColor,
            modifier = Modifier.offset(0.dp, -40.dp),
            fontWeight = FontWeight.Bold,
            //style = TextStyle(shadow = Shadow(color = Color.Black, offset = Offset(4f,4f)))
        )
    }
}
