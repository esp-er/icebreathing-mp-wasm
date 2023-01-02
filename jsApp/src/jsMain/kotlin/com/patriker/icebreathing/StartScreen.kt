package com.patriker.icebreathing
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.itemsIndexed
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.PlayArrow
import androidx.compose.material.icons.filled.Spa
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.chargemap.compose.numberpicker.NumberPicker

val secondColorTemp = Color(143, 180, 255)
val mainColorTemp = Color(112, 197, 255)

data class SessionData(val numBreaths: Int, val numRounds: Int, val breathHoldTime: Map<Int,Int>)

fun Int.secondsAsStr(): String {
    val minutes = this / 60
    val secs = this - minutes * 60
    val secStr = secs.toString().padStart(2, '0')
    return "$minutes:$secStr"
}

@ExperimentalFoundationApi
@Composable
fun StartScreen(sessionData: SessionData, finishedSelection: (SessionData) -> Unit){
    var numRoundsSelected by remember { mutableStateOf(sessionData.numRounds) }
    var holdTimes by remember { mutableStateOf(sessionData.breathHoldTime)}
    var numBreaths by remember { mutableStateOf(sessionData.numBreaths) }

    fun roundsSelected(rounds: Int){ numRoundsSelected = rounds + 1}
    fun numBreathsSelected(n: Int){ numBreaths = n}
    fun holdTimesChanged(times: Map<Int,Int>){
        holdTimes = times
    }


    Column(horizontalAlignment = Alignment.CenterHorizontally,
        modifier = Modifier.offset(y = 5.dp)){

        Box(modifier = Modifier
            .fillMaxWidth(),
            contentAlignment = Alignment.TopCenter
        ) {
            Column(modifier = Modifier.align(Alignment.Center),
                horizontalAlignment = Alignment.CenterHorizontally) {
                Text(StrRes.breaths,
                    textAlign = TextAlign.Center,
                    modifier = Modifier.padding(horizontal = 10.dp),
                    fontWeight = FontWeight.Medium,
                    style = TextStyle(fontSize = 18.sp, color = Color.LightGray))
                Spacer(modifier = Modifier.padding(5.dp))
                NumberPicker(
                    value = numBreaths,
                    range = 5..100,
                    onValueChange = {
                        numBreaths = it
                    },
                    textStyle = TextStyle(fontSize = 22.sp, color = Color.LightGray)
                )

            }
        }

        Box(modifier = Modifier
            .fillMaxWidth()
            ) {
            Column(
                modifier = Modifier.align(Alignment.Center),
                horizontalAlignment = Alignment.CenterHorizontally){
                Text(StrRes.rounds, textAlign = TextAlign.Center,
                    modifier = Modifier.padding(horizontal = 10.dp),
                    fontWeight = FontWeight.Medium,
                    color = Color.LightGray,
                    style = TextStyle(fontSize = 18.sp, color = Color.LightGray)
                )
                Spacer(modifier = Modifier.padding(5.dp))
                NumberPicker(
                    value = numRoundsSelected,
                    range = 1..10,
                    onValueChange = {
                        numRoundsSelected = it
                    },
                    textStyle = TextStyle(fontSize = 22.sp, color = Color.LightGray)
                )

            }
        }


        Box(modifier = Modifier
            .fillMaxWidth()
        ) {
            Column(
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                Text(StrRes.holdtimes, textAlign = TextAlign.Center,
                    modifier = Modifier.padding(horizontal = 10.dp),
                    fontWeight = FontWeight.Medium,
                    color = Color.LightGray,
                    style = TextStyle(fontSize = 18.sp, color = Color.LightGray)
                )
                HoldTimeSelector(
                    onSelected = {},
                    holdTimes.values.toList(),
                    numRoundsSelected = numRoundsSelected,
                    ::holdTimesChanged)
            }
        }
        Row(modifier = Modifier.fillMaxSize().padding(top = 8.dp, bottom = 8.dp)
            .align(Alignment.CenterHorizontally)){
            Spacer(Modifier.weight(1f))
            Button(
                onClick = {
                    finishedSelection(
                        SessionData(
                            numBreaths,
                            numRoundsSelected,
                            holdTimes.filterKeys { it <= numRoundsSelected })
                    )
                },
                shape = CircleShape,
                modifier = Modifier.size(92.dp),
            ) {
                Column(horizontalAlignment = Alignment.CenterHorizontally) {
                    Icon(
                        Icons.Filled.Spa, "Start Breathing",
                        modifier = Modifier.size(28.dp)
                    )
                    Text(StrRes.start)
                }
            }

            Spacer(Modifier.weight(1f))
        }
    }

}


@Composable
fun TimeSliderCard(initialTime: Int, onTimeChanged: (Int) -> Unit, round: Int){
    val minValue = 30f
    val maxValue = 600f
    var sliderValue by remember {   if(initialTime <= 30) mutableStateOf(0f)
    else mutableStateOf(initialTime.toFloat()) }
    LaunchedEffect(initialTime){
        sliderValue = initialTime.toFloat()
    }
    val sliderSeconds by remember { derivedStateOf { sliderValue.toInt() }}
    val timeText by remember { derivedStateOf { sliderSeconds.secondsAsStr() }}

    Card(modifier = Modifier
        .widthIn(100.dp, 600.dp)
        .fillMaxWidth(0.95f)
        .height(72.dp)
        .padding(horizontal = 16.dp),
        backgroundColor = MaterialTheme.colors.secondaryVariant) {
        Box(modifier = Modifier.padding(10.dp)) {
            Row {
                Text(
                modifier = Modifier.weight(2f),
                    text = timeText,
                    fontWeight = FontWeight.Medium,
                    color = Color.White
                )
                Spacer(modifier = Modifier.weight(8f))
                Text(
                    modifier = Modifier.weight(2f),
                    text = "Round $round",
                    color = Color.White,
                    textAlign = TextAlign.End
                )

            }
            Slider(
                modifier = Modifier
                    .offset(y = 16.dp)
                    .align(Alignment.Center),
                value = sliderValue,
                valueRange = minValue..maxValue,
                steps = 0,
                onValueChange = { sliderValue = it; onTimeChanged(sliderSeconds)}
            )
        }
    }
}

@ExperimentalFoundationApi
@Composable
fun HoldTimeSelector(onSelected: (Int) -> Unit,
                     buttonLabels: List<Int>,
                     numRoundsSelected: Int,
                     onTimeChanged: (Map<Int,Int>) -> Unit){
    var selectedIndex by remember{ mutableStateOf(-1)}

    data class ButtonClicked(val clicked: Boolean = false, val i: Int = -1){
        val backingField: ButtonClicked
            get() { return if(this.clicked && this.i != -1) this else ButtonClicked() }
    }
    val buttonSecs = remember { buttonLabels.toMutableStateList() }
    var lastClickedIndex by remember { mutableStateOf(ButtonClicked()) }
    var lastClickedTime by remember { mutableStateOf(0)}
    var lastClickedRound by remember { mutableStateOf(1)}
    LaunchedEffect(lastClickedIndex){
        if(lastClickedIndex.clicked) {
            lastClickedTime = buttonSecs[lastClickedIndex.i]
            lastClickedRound = lastClickedIndex.i + 1
        }
    }
    LaunchedEffect(numRoundsSelected){
        console.log(buttonSecs.size)
        if((numRoundsSelected -1 ) < lastClickedIndex.i)
            lastClickedIndex = ButtonClicked()
    }
    //TODO fix this placeholder hoisted state func
    fun timeChanged(newTime: Int) {
        if(lastClickedIndex.clicked) {
            buttonSecs[lastClickedIndex.i] = newTime
        }

        val timesMap = buttonSecs.mapIndexed{index, secs -> index + 1 to secs}.toMap()
        onTimeChanged(timesMap)
    }

    fun buttonSelected(index: Int){
        lastClickedIndex = ButtonClicked(true, index)
        onSelected(index)
    }

    Column(modifier = Modifier.fillMaxWidth(1f),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Row(
            modifier = Modifier
                .padding(8.dp)
                .align(Alignment.CenterHorizontally)
                .fillMaxWidth(0.9f)
        ) {
            Spacer(modifier = Modifier.weight(1f))
            fun indexChanged(i: Int) {
                selectedIndex = i
                buttonSelected(selectedIndex)
            }

            (0 until numRoundsSelected).forEach { index, ->
                OutlinedButton(
                    modifier = Modifier.padding(horizontal = 2.dp, vertical = 1.dp),
                    onClick = { indexChanged(index) }, //TODO set index inside onClick
                    shape = RoundedCornerShape(4.dp),
                    border = BorderStroke(
                        1.dp,
                        color = if (selectedIndex == index)
                            MaterialTheme.colors.secondary
                        else
                            MaterialTheme.colors.primary
                    ),
                    colors = if (selectedIndex == index) {
                        // selected colors
                        ButtonDefaults.outlinedButtonColors(
                            backgroundColor = MaterialTheme.colors.primary,
                            contentColor = Color.LightGray
                        )
                    } else {
                        // default colors
                        ButtonDefaults.outlinedButtonColors(
                            backgroundColor = MaterialTheme.colors.background,
                            contentColor = MaterialTheme.colors.secondary
                        )
                    },
                ) {
                    Column{
                        Text(
                            text = (index + 1).toString(),
                            color = if (selectedIndex == index) {
                                Color.LightGray
                            } else {
                                MaterialTheme.colors.secondary
                            },
                            modifier = Modifier
                                .padding(horizontal = 4.dp)
                                .align(Alignment.CenterHorizontally)
                        )
                        Text(
                            text = buttonSecs[index].secondsAsStr(),
                            modifier = Modifier.align(Alignment.CenterHorizontally),
                            fontSize = if(numRoundsSelected <= 4) 12.sp else 10.sp,
                            color = if (selectedIndex == index) {
                                Color.LightGray
                            } else {
                                MaterialTheme.colors.secondary
                            },
                        )
                    }
                }
            }

            Spacer(modifier = Modifier.weight(1f))
        }

        if(lastClickedIndex.clicked) {
            Box(modifier = Modifier.fillMaxWidth(0.93f)
                .align(Alignment.CenterHorizontally),
                contentAlignment = Alignment.Center
            ) {
                TimeSliderCard(
                    initialTime = lastClickedTime,
                    onTimeChanged = ::timeChanged,
                    round = lastClickedRound
                )
            }
        }

    }
}
