import Phaser from 'phaser';

import World from './World';
import GameScene from './scenes/GameScene';

const config = {
	type: Phaser.AUTO,
	width: World.Game_Props.width,
	height: World.Game_Props.height,
	physics: {
		default: World.Game_Props.physics.type,
		arcade: {
			gravity: { y: World.Game_Props.physics.gravityY }
		}
	},
	scene: [GameScene]
}

export default new Phaser.Game(config)
