class intro extends Phaser.Scene{
    constructor(){
        super('intro');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('studio', 'studio.png');
        this.load.audio('intro', 'intro_sound.mp3');
    }
    create(){
        //creating intro audio
        this.intro = this.sound.add("intro", {loop: false, volume: 0.2});
        this.intro.play();
        //creating logotype image
        this.studio = this.add.image(
            400,
            300,
            'studio',
        )
        this.studio.setScale(0.5);
        this.studio.setAlpha(0);

        this.tweens.add({
            targets: this.studio,
            alpha:1,
            duration: 2500,
            ease: 'Linear',
            repeat: 0,
        })
        
        this.time.delayedCall(15000, () => {
            this.cameras.main.fadeOut(2000);
        })
       
        this.time.delayedCall(17000, () => {
            this.intro.stop();
            this.scene.start('gameplay');
        })
    }
    update(){}
}

class gameplay extends Phaser.Scene{
    constructor() {
        super('gameplay');
    }
    preload(){
        this.load.path = './assets/';
        this.load.audio('main', 'main_music.wav');
        this.load.image('background','background.jpg');
        this.load.image('timer','timer.png');
        this.load.image('health','healthbar.png');
        this.load.image('score', 'score.png');
        this.load.image('building', 'building.png');
        this.load.image('rotate', 'rotator.png');
        this.load.image('rope', 'rope.png');
        this.load.image('lift', 'carry.png')
        this.load.image('person', 'person.png');
    }
    create(){
        this.cameras.main.fadeIn(2000);
        this.main = this.sound.add("main", {loop: true, volume: 0.2});
        this.main.play();
        this.imageObject = this.add.image(
                400,
                300,
                'background', 
            )
        this.imageObject.setScale(1.42);
        this.imageObject.setAlpha(1);

        this.timer = this.add.image(
            690,
            65,
            'timer',
        )
        this.timer.setScale(0.26);
        
        this.health = this.add.image(
            125,
            65,
            'health',
        )
        this.health.setScale(0.35)
        
        this.score = this.add.image(
            125,
            155,
            'score',
        )
        this.score.setScale(0.3)
        
        this.building = this.add.image(
            400,
            300,
            'building',
        )
        this.building.setScale(0.7);

        this.help = this.add.text(
            560,
            120,
            "Press the up arrow to raise the \nelevator,press the down arrow to \nlower the elevator",
        )
        this.help.setTint(0);
        this.help.setScale(0.7);

        this.up = this.add.triangle(650, 180, 0, 148, 148, 148, 74, 0, 0x000000);
        this.up.setScale(0.2);

        this.down = this.add.triangle(700, 180, 0, 148, 148, 148, 74, 0, 0x000000);
        this.down.setScale(0.2);
        this.down.setAngle(180);

        this.rope = this.add.image(
            400,
            200,
            'rope',
        )
        this.rope.setScale(0.4);

        this.rotate = this.add.image(
            400,
            75,
            'rotate',
        )
        this.rotate.setScale(0.6);

        this.lift = this.add.image(
            400,
            350,
            'lift',
        )
        this.lift.setScale(0.40);

        this.person = this.add.image(
            350,
            540,
            'person',
        )
        this.person.setScale(0.6)

        this.tweens.add({
            targets: this.rotate,
            angle: 360,
            duration: 1000,
            ease: 'Linear',
            repeat: 100,
        })

        this.time.delayedCall(11000, () => {
            this.main.stop();
            this.scene.start('menu')
        })
    }
    update(){}
}

class menu extends Phaser.Scene{
    constructor(){
        super('menu');
    }
    preload(){
        this.load.path = './assets/';
        this.load.audio('menu_music', 'menu_music.wav');
        this.load.image('background','background.jpg');
        this.load.image('title','title.png');
        this.load.image('settings','settings.png');
        this.load.image('play','play.png');
    }
    create(){
        this.menu_music = this.sound.add("menu_music", {loop: true, volume: 0.2});
        this.menu_music.play();
        this.imageObject = this.add.image(
            400,
            300,
            'background', 
        )
    this.imageObject.setScale(1.42);
    this.imageObject.setAlpha(1);

    this.title = this.add.image(
        200,
        300,
        'title',
    )
    this.title.setScale(0.5);
    
    this.settings = this.add.image(
        600,
        400,
        'settings'
    )
    this.settings.setScale(0.4);

    this.play = this.add.image(
        600,
        240,
        'play'
    )
    this.play.setScale(0.4);
    }
    update(){}
}

let config = {
    type: Phaser.WEBGL,
    width: 800, 
    height: 600,
    backgroundColor: 0xFFFFFF,
    scene: [intro,gameplay,menu],
}
let game = new Phaser.Game(config);