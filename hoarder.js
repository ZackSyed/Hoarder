import Player from './player';
import Circle from './badCircle';
import Dot from './dot';

document.addEventListener("DOMContentLoaded", () => {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var dot = new Dot(ctx, canvas);
    var player = new Player(ctx, canvas);
    let circles = []; 
    var background = new Image();
    background.src = "./app/assets/game-boy.jpg";

    background.onload = function(){
        ctx.drawImage(background,0,0);   
    }   
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
        ctx.rect(100, 100, 500, 500);
        ctx.fillStyle = "black";
        ctx.stroke();
        ctx.closePath();
    }

    function drawHeader() {
        ctx.font = "40px Arial";
        ctx.fillStyle = "black";
        ctx.fillText("Hoarder", 300, 90)
    }   

     // high score functionality, call in game over mechanics
    function addHighscoreToDocument() {
        var highScoreBox = document.getElementById("high-score-list");
        var highScoreContent = document.createTextNode(`${player.score}`)
        highScoreBox.appendChild(highScoreContent);
    }

    function colliding(object) {
        // if (between(circle.parameters.x, (player.parameters.x - player.parameters.radius), 
        //     (player.parameters.x + player.parameters.radius)) &&
        // between(circle.parameters.y, (player.parameters.y - player.parameters.radius), 
        //     (player.parameters.y + player.parameters.radius))) {
        //         return true 
        //     } else { return false } 

        let dx = (object.parameters.x - player.parameters.x);
        let dy = (object.parameters.y - player.parameters.y);
        let drad = (object.parameters.radius + player.parameters.radius);

        if (Math.sqrt((dx * dx) + (dy * dy)) < (drad)) {
            return true 
        } else {
            return false
        }
    }
    

    function playerInvincible() {
        circles.forEach( circle, idx => {
            if (colliding(circle)) {
                circles.splice(idx, 1)
            } 
        })
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawHeader();
        drawBorder();
        dot.drawDot();
        player.drawPlayer();
        circles.forEach(circle => {
            circle.drawCircle();
            circle.move();  
        });
        player.drawScore();

        // player movement and wall collision mechanics 
        if (rightPressed && player.parameters.x < canvas.width - player.parameters.radius - 100) {
            player.updatePosition("right", 5);
        } else if (leftPressed && player.parameters.x > player.parameters.radius + 100) {
            player.updatePosition("left", 5);
        } else if (upPressed && player.parameters.y > player.parameters.radius + 100) {
            player.updatePosition("up", 5);
        } else if (downPressed && player.parameters.y < canvas.height - player.parameters.radius - 100) {
            player.updatePosition("down", 5);
        }

        // player collect dots 
        if (colliding(dot)) {
                dot.reposition();
                player.collision();
                circles.push(new Circle(ctx, canvas, 0, 5));
        } 

        // circle collision 
        circles.forEach(circle => {
            if (colliding(circle)) {
                player.circleCollision();
                circle.collision();
                if (player.score <= 0) {
                    circles = [];
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    // alert("Game over");
                    location.reload();
                } 
            } 
        });


        // switch (player.score) {
        //     case 10:
        //         playerInvincible();
        //         break;
        //     default:
        //         break;
        // }
    }
    setInterval(draw, 10);
});
