export function detectColission(ball, gameObject) {
    let bottomOfBall = this.position.y + this.size;
    let topOfPaddle = this.position.y;

    let topOfObject = this.game.paddle.position.y;
    let leftSideOfObject = this.game.paddle.position.x;
    let rightSideOfPaddle = this.game.paddle.position.x + this.game.paddle.width;

    if (
        bottomOfBall >= topOfObject &&
        topOfBall <= bottomOfObject &&
        ball.position.x >= leftSideOfObject &&
        ball.position.x + ball.size <= rightSideOfObject
    ) {
        return true;
    } else {
        return false;
    }
}
