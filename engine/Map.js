"use strict";

const Physics = require('./Physics.js');
const p2 = require('p2');
const gameMap = require('./maps/default-map.json');
const roadAsphalt = require('./maps/tiles/road-asphalt.js');
const allTileSets = { roadAsphalt }

function Map(mapFile){
    this.mapFile = mapFile
    this.tilePacks = Map.getTilePacks(mapFile),
    this.physicsWorld = Physics.createWorld()
    this.respsCoords = [],
    this.respsTilesNumbers = [],
    this.tiles = []
}

Map.prototype.buildMap = function(){
    this.createAllTileSet();
    this.getRespsTileNumber();


    gameMap.layers.forEach((layer) => {

        layer.data.forEach( (numberOfCurrentTile, index) => {
            const rowNumber = div( index, gameMap.width )
            const columnNumber = index % gameMap.width

            if( numberOfCurrentTile !== 0 && this.tiles[numberOfCurrentTile] ){
                const shapesData = this.tiles[numberOfCurrentTile]()

                shapesData.forEach( (shape)=>{
                    const tileBody = new p2.Body({
                       mass: 0,
                       angle: shape.angle || 0,
                       position: [
                           columnNumber * 128 + 64 + shape.positionMod[0],
                           rowNumber * 128 + 64 + shape.positionMod[1]
                       ]
                    });

                    tileBody.addShape( shape.shape );
                    this.physicsWorld.addBody(tileBody);
                })
            }


            this.getRespCoord(numberOfCurrentTile, columnNumber, rowNumber);
        })
    })
}



Map.prototype.createAllTileSet = function(){
    const tileNumbers = []

    this.mapFile.tilesets.forEach( (set) =>{
        var indexOfTile
        indexOfTile = set.firstgid

        for(var i in this.tilePacks[set.source]){
            this.tiles[indexOfTile] = this.tilePacks[set.source][i]
            indexOfTile++
        }

    })
}



Map.prototype.getRespsTileNumber = function(){
    this.mapFile.tilesets.forEach( (set) =>{//check every tilepack to find number of resp tile
        if(set.source == "roadAsphalt"){
            const respsNumbers = this.tilePacks.roadAsphalt.resps //Array
            respsNumbers.forEach((numberOfRespTile)=>{
                this.respsTilesNumbers.push(set.firstgid + numberOfRespTile)
            })
        }
    })
}



Map.prototype.getRespCoord = function(numberOfCurrentTile, columnNumber, rowNumber){
    this.respsTilesNumbers.forEach((respNumber, index) => {
        if(numberOfCurrentTile === respNumber){
            let angle

            switch(index){
                case 0: angle = 3.14; break;
                case 1: angle = 4.71; break;
                case 2: angle = 0; break;
                case 3: angle = -1.57; break;
            }

            this.respsCoords.push({
                x: columnNumber * 128,
                y: rowNumber * 128,
                angle
            })
        }
    })
},




Map.getTilePacks = function(mapFile){
    var data = {}

    mapFile.tilesets.forEach( (set) =>{
        data[set.source] = allTileSets[set.source]
    })

    return data
}

Map.create = function(){
    const createdMap = new Map(gameMap)

    createdMap.buildMap()

    return createdMap
}

function div(a, b){
    return (a - (a % b)) / b
}

module.exports = Map
