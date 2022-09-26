var BootState = {
    //initiate some game-level setings
    init: function() {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    },
    preload: function() {
        this.preload.image('preloadBar', 'images/bar.png')
        this.preload.image('logo', 'images/logo.png')
    },
    create: function() {
        this.game.stage.backgroundColor = '#fff';

        this.state.start('PreloadState');
    }

};