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
    var verticalCircle = new Circle(ctx, canvas, 0, 3);
    var horizontalCircle = new Circle(ctx, canvas, 3);
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

    function between(x, min, max) {
        return x >= min && x <= max;
    }

    // function addScoreToDocument() {
    //     var scoreBox = document.getElementById("score");
    //     var scoreContent = document.createTextNode(`Score: ${player.score}`)
    //     scoreBox.appendChild(scoreContent);
    // }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBorder();
        dot.drawDot();
        player.drawPlayer();
        circle.drawCircle();
        circle.move();
        verticalCircle.drawCircle();
        verticalCircle.move();
        horizontalCircle.drawCircle();
        horizontalCircle.move();
        player.drawScore();

        // player movement and wall collision mechanics 
        if (rightPressed && player.parameters.x < canvas.width - player.parameters.radius - 150) {
            player.updatePosition("right", 5);
        } else if (leftPressed && player.parameters.x > player.parameters.radius + 150) {
            player.updatePosition("left", 5);
        } else if (upPressed && player.parameters.y > player.parameters.radius + 150) {
            player.updatePosition("up", 5);
        } else if (downPressed && player.parameters.y < canvas.height - player.parameters.radius - 150) {
            player.updatePosition("down", 5);
        }

        // player collect dots 
        if (between(dot.parameter.x, (player.parameters.x - player.parameters.radius), 
            (player.parameters.x + player.parameters.radius)) &&
        between(dot.parameter.y, (player.parameters.y - player.parameters.radius), 
            (player.parameters.y + player.parameters.radius))) {
                dot.reposition();
                player.collision();
        } 

    }
    setInterval(draw, 10);
});
