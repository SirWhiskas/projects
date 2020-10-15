const config = {
	type: Phaser.AUTO,
	scene: {
		create: create
	}
}
//It's not necessary to set width, height and parent

const game = new Phaser.Game(config)

function create() {
	var circle = new Phaser.Geom.Circle(400, 300, 100)

	var graphics = this.add.graphics({ fillStyle: { color: 0xff0000 } })
	graphics.fillCircleShape(circle)
}