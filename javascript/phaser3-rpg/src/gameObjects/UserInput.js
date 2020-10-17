import Phaser from 'phaser';

class UserInput extends Phaser.Input.InputPlugin
{
    constructor(sceneObj)
    {
        super(sceneObj);

        this.cursors = sceneObj.input.keyboard.createCursorKeys();
    }

    isLeftDown()
    {
        return this.cursors.left.isDown;
    }

    isRightDown()
    {
        return this.cursors.right.isDown;
    }

    isJumpDown()
    {
        return this.cursors.up.isDown;
    }
}

export default UserInput;