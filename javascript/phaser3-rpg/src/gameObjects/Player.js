import Organism from './Organism';
import UserInput from './UserInput';

class Player extends Organism {
    constructor(sceneObj, x, y, objName) {
        super(sceneObj, x, y, objName);

        this.gameObject = sceneObj.physics.add.sprite(x, y, objName);

        this.setPhysics();
        this.setAnimations(sceneObj, objName);

        this.userInput = new UserInput(sceneObj);

        this.moveSpeed = 160;
        this.currentVelocityX = 0;

        this.jumpForce = -330;
    }

    getGameObject() {
        return this.gameObject;
    }

    setPhysics() {
        this.gameObject.setBounce(0.2);
        this.gameObject.setCollideWorldBounds(true);
    }

    setAnimations(sceneObj, objName) {
        sceneObj.anims.create({
            key: 'run',
            frames: sceneObj.anims.generateFrameNumbers(objName, { start: 9, end: 13 }),
            frameRate: 10,
            repeat: -1
        })

        sceneObj.anims.create({
            key: 'idle',
            frames: sceneObj.anims.generateFrameNumbers(objName, { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        })
    }

    handleUpdate() {
        this.handleMovement();
    }

    handleMovement() {
        if (this.userInput.isLeftDown()) {
            this.gameObject.setVelocityX(this.moveSpeed * -1);
            this.gameObject.flipX = true;
            this.gameObject.anims.play('run', true);
        }
        else if (this.userInput.isRightDown()) {
            this.gameObject.setVelocityX(this.moveSpeed);
            if (this.gameObject.flipX) this.gameObject.flipX = false;
            this.gameObject.anims.play('run', true);
        }
        else {
            this.gameObject.setVelocityX(0);
            this.gameObject.anims.play('idle', true);
        }

        if (this.userInput.isJumpDown() && this.gameObject.body.touching.down)
            this.gameObject.setVelocityY(this.jumpForce);
    }
}

export default Player;