
let config = {
    type: Phaser.AUTO,
    width : 800,
    height : 600,
    scene : {
        preload : preload,
        create : create,
        update : update,
    },
    pixelArt: true,
    audio: {
        disableWebAudio: true
    }
};
let game = new Phaser.Game(config);
let pending =0;
function preload(){
    //load an image
    console.log(this);
    this.load.audio('theme', [
        'Assets/music.ogg'
    ]);
    this.load.image('background',"Assets/back.jpg");
    this.load.image('wheel',"Assets/wheel.png");

    this.load.image('stand',"Assets/stand.png");
    this.load.image('pin',"Assets/pin.png");
    this.load.image('button',"Assets/button.png");

}
function create(){
    //create that image
    let W = game.config.width;
    let H = game.config.height;

    this.add.sprite(0,0,'background');

    let pin = this.add.sprite(W/2,H/2-250,'pin').setScale(0.25);

    pin.depth = 5;

    this.add.sprite(W/2,H/2 + 250,'stand').setScale(0.25);


    //let create wheel
    this.wheel = this.add.sprite(W/2,H/2,"wheel");
    this.wheel.setScale(0.25);
    console.log(this.wheel.depth);
     this.startBtn = this.add.sprite(W/1.2, H/1.2, 'button').setInteractive();
     this.startBtn.setScale(0.1);
     this.startBtn.on('pointerdown',spinwheel,this);
   }

function update(){
    console.log("In Update");


}

function spinwheel(){
    var inputchoice = this.startBtn.input;
    inputchoice.enabled= false;
    console.log("Time to spin the wheel");
    var music = this.sound.add('theme');
    music.play();

    let rounds = Phaser.Math.Between(2,4);
    console.log(rounds);

    let extra_degrees = Phaser.Math.Between(0,11)*30;
    let total_angle = rounds*360 + extra_degrees;

    let tween = this.tweens.add({
        targets: this.wheel,
        angle: total_angle,
        ease:"Cubic.easeOut",
        duration: 3000
    });
    setTimeout(function(){ alert("One spin completed");
    music.pause();
    inputchoice.enabled= true;
     }, 3000);
}
