export default class InputHandler {
    constructor(paddle, game) {
        document.addEventListener("keydown", (event) => {
            // alert(event.keycode);

            switch (event.keycode) {
                case 37:
                    // alert("move on left");
                    paddle.moveLeft();
                    break;

                case 39:
                    // alert("move on right");
                    paddle.moveRigth();
                    break;

                case 27:
                    game.togglePause();
                    break;

                case 32:
                    game.start();
                    break;
            }
        });

        document.addEventListener("keyup", (event) => {
            // alert(event.keycode);

            switch (event.keycode) {
                case 37:
                    // alert("move on left");
                    if (paddle.spped < 0) paddle.stop();
                    break;

                case 39:
                    // alert("move on right");
                    if (paddle.speed > 0) paddle.stop();
                    break;
            }
        });
    }

}
