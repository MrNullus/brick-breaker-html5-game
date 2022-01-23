export default class Brick {
    constructor(game, position) {
        this.image = document.getElementById("img_ball");

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.game = game;

        this.position = position;
        this.width = 80;
        this.height = 24;

        this.makedForDeletion = false;
    }

    update() {
        if (detectColission(this.game.ball, this)) {
            this.game.ball.speed.y = -this.game.ball.speed.y;
        }

        this.makedForDeletion = true;
    }

    draw(ctx) {
      ctx.drawImage(
        this.image,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
    }
}
