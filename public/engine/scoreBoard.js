"use strict";

const scoreBoard = {
    textStyle : new PIXI.TextStyle({
                  fontFamily: "Righteous",
                  letterSpacing: 1,
                  fontSize: 22,
                  fill: "white",
                  stroke: '#000000',
                  strokeThickness: 3
            }),
    scores : [],
    scoresPixiText : []
}

scoreBoard.update = function(scoreData){
    scoreBoard.scores = []

    for(var i in scoreData){
        var lapsTimes = scoreData[i].lapsTime

        var best = lapsTimes[0] ? lapsTimes[0] : 0;
        const last = lapsTimes[lapsTimes.length-1] ? lapsTimes[lapsTimes.length-1] : 0;

        lapsTimes.forEach((lapTime)=>{
            if(lapTime < best){
                best = lapTime
            }
        })

        scoreBoard.scores.push({nick: i, laps: lapsTimes.length, bestLap: best, lastLap: last})
    }

    scoreBoard.scores.sort( (a,b) => a.bestLap - b.bestLap )
}


scoreBoard.removeScoresPixiText = function(stage){
    scoreBoard.scoresPixiText.forEach((text)=>{
        stage.removeChild(text)
    })
}


scoreBoard.draw = function(stage){
    scoreBoard.removeScoresPixiText(stage)
    scoreBoard.scoresPixiText = scoreBoard.scores.map((item, index)=>{

        const pixiText =  new PIXI.Text(
            index+1 + ". " + item.nick + " - " + item.laps + " - " + msToTime( item.bestLap ) + " - " + msToTime( item.lastLap ),
            scoreBoard.textStyle
        )

        pixiText.position.set(15, index*30 + 5)

        stage.addChild(pixiText)

        return pixiText

    })
}


scoreBoard.deleteUnexist = function(player, stage){
    stage.removeChild(player.sprite)
    stage.removeChild(player.nickRender)
}


function msToTime(ms) {
    var milliseconds = parseInt((ms%1000))
        , seconds = parseInt((ms/1000)%60)
        , minutes = parseInt((ms/(1000*60))%60)

    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return minutes + ":" + seconds + ":" + milliseconds;
}


module.exports = scoreBoard
