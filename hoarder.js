import Player from './player';
import Circle from './badCircle';
import Dot from './dot';

document.addEventListener("DOMContentLoaded", () => {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var dot = new Dot(ctx, canvas);
    var dx = 2;
    var dy = -2;
    var player = new Player(ctx, canvas);
    var circle = new Circle(ctx, canvas, dx, dy);

    // movement
    var dx = 2;
    var dy = -2;


    // key handler 
    var rightPressed = false;
    var leftPressed = false;
    var upPressed = false;
    var downPressed = false;

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    function keyDownHandler(e) {
        switch (e.key) {
            case ("ArrowRight"):
                rightPressed = true;
                break;
            case ("ArrowLeft"):
                leftPressed = true;
                break;
            case ("ArrowUp"):
                upPressed = true;
                break;
            case ("ArrowDown"):
                downPressed = true;
                break;
            default:
                break;
        }
    }

    function keyUpHandler(e) {
        switch (e.key) {
            case ("ArrowRight"):
                rightPressed = false;
                break;
            case ("ArrowLeft"):
                leftPressed = false;
                break;
            case ("ArrowUp"):
                upPressed = false;
                break;
            case ("ArrowDown"):
                downPressed = false;
            default:
                break;
        }
    }

    function drawBorder() {
        ctx.beginPath();
        ctx.rect(150, 150, 700, 700);
        ctx.fillStyle = "black";
        ctx.stroke();
        ctx.closePath();
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBorder();
        dot.drawDot();
        player.drawPlayer();
        circle.drawCircle();
        circle.move();
        // circle mechanics 
        

        // player movement and collision mechanics 
        if (rightPressed && playerX < canvas.width - playerRadius - 150) {
            playerX += 5;
        } else if (leftPressed && playerX > playerRadius + 150) {
            playerX -= 5;
        } else if (upPressed && playerY > playerRadius + 150) {
            playerY -= 5;
        } else if (downPressed && playerY < canvas.height - playerRadius - 150) {
            playerY += 5;
        }
    }
    setInterval(draw, 10);
});
