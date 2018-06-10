"use strict";

const debugRender = {
    renderCarPoints: function(player, points, app){
        player.debugPoints.forEach((item)=>{ app.stage.removeChild(item) })

        player.debugPoints = points.map((point)=> {
            let graphics = new PIXI.Graphics()
            graphics.lineStyle(4, 0xFF0000);
            graphics.drawRect(point.x, point.y, 1, 1);
            app.stage.addChild(graphics);
            return graphics
        })
    }
}

module.exports = debugRender
