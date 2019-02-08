import * as Player from './player';


document.addEventListener("DOMContentLoaded", () => {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var x = canvas.width/2;
    var y = canvas.height-30;
    var playerX = 240;
    var playerY = 160;
    var playerRadius = 40; 
    var circleRadius = 10;
    var dotX = Math.floor(Math.random() * Math.floor(canvas.width - 10));
    var dotY = Math.floor(Math.random() * Math.floor(canvas.height - 10));
    var dotRadius = 10;
    var dx = 2;
    var dy = -2;
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

    function drawCircle() {
        ctx.beginPath();
        ctx.arc(x, y, circleRadius, 0, Math.PI*2);
        ctx.fillStyle = "";
        ctx.fill();
        ctx.closePath();
    }

    function drawDots() {
        ctx.beginPath();
        ctx.arc(dotX, dotY, dotRadius, 0, Math.PI*2);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath(); 
    }

    // function drawPlayer() {
    //     ctx.beginPath();
    //     ctx.arc(playerX, playerY, playerRadius, 0, Math.PI*2);
    //     ctx.strokeStyle = "black";
    //     ctx.stroke();
    //     ctx.closePath();
    // }


    function draw(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);  
        drawBorder(); 
        Player.drawPlayer(ctx, playerX, playerY, playerRadius);
        drawCircle();
        drawDots();
        if(x + dx > canvas.width-circleRadius || x + dx < circleRadius) {
            dx = -dx;
        } else if (y + dy > canvas.height-circleRadius || y + dy < circleRadius) {
            dy = -dy;
        }
        x += dx;
        y += dy; 

    
        if (rightPressed && playerX < canvas.width-playerRadius-150) {
            playerX += 5;
        } else if (leftPressed && playerX > playerRadius + 150) {
            playerX -= 5;
        } else if (upPressed && playerY > playerRadius + 150) {
            playerY -= 5;
        } else if (downPressed && playerY < canvas.height-playerRadius-150) {
            playerY += 5;
        }
    }
    setInterval(draw, 10);
});
