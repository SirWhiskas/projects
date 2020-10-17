import Phaser from 'phaser';

class Organism extends Phaser.Physics.Arcade.Sprite
{
    constructor(sceneObj, x, y, objName)
    {
        super(sceneObj, x, y, objName);

        this.health = 0;
        this.maxHealth = this.health;
    }
}

export default Organism;