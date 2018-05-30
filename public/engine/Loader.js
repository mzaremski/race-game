const Loader = {

    loadStage: function(stage, gameInit){
        PIXI.loader
          .add(stage.imagesSrc)//imagesSrc is array
          .load(gameInit);
    }

}

module.exports = Loader;
