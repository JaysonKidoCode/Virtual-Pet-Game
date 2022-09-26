var Preload = {
    preload: function() {

        this.logo = this.game.add.sprite(this.game.world.centerX, this.game.centerY, 'logo');
        this.logo.anchor.setTo(0.5);
        
        
        
        
        this.preloadBar = this.game.add.sprite(this.game.world.centerX, this.game.centerY + 128, 'preloadBar');
        this.preloadBar.anchor.setTo(0.5);
        this.load.setPreloadSprite(this.preloadBar);


        this.game.load.image('backyard', 'images/backyard.png');    
        this.game.load.image('apple', 'images/apple.png');    
        this.game.load.image('candy', 'images/candy.png');    
        this.game.load.image('rotate', 'images/rotate.png');    
        this.game.load.image('toy', 'images/rubber_duck.png');    
        this.game.load.image('arrow', 'images/arrow.png');   
        this.load.spritesheet('pet', 'images/pet.png', 97, 83, 5, 1, 1); 
      },
};