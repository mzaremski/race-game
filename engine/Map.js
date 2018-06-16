"use strict";

const Physics = require('./Physics.js');
const p2 = require('p2');
const gameMap = require('./maps/monako-map.json');
const roadAsphalt = require('./maps/tiles/road-asphalt.js');

const Map = {
    tilePacks: { roadAsphalt },
    tiles: [],
    createMap(){
        this.createAllTileSet();

        gameMap.layers.forEach((layer) => {

            layer.data.forEach( (item, index) => {
                const rowNumber = div( index, gameMap.width )
                const columnNumber = index % gameMap.width

                if( item !== 0 && this.tiles[item] ){
                    const shapesData = this.tiles[item]()

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
                        Physics.world.addBody(tileBody);
                    })
                }
            })
        })
    },

    createAllTileSet(){
        const tileNumbers = []
        
        gameMap.tilesets.forEach( (set) =>{
            var indexOfTile
            indexOfTile = set.firstgid

            for(var i in this.tilePacks[set.source]){
                this.tiles[indexOfTile] = this.tilePacks[set.source][i]
                indexOfTile++
            }

        })
    }
}

function div(a, b){
    return (a - (a % b)) / b
}

module.exports = Map
