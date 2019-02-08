export const drawPlayer = (ctx, x, y, radius) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI*2);
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();
};



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


if (rightPressed && playerX < canvas.width-playerRadius-150) {
    playerX += 5;
} else if (leftPressed && playerX > playerRadius + 150) {
    playerX -= 5;
} else if (upPressed && playerY > playerRadius + 150) {
    playerY -= 5;
} else if (downPressed && playerY < canvas.height-playerRadius-150) {
    playerY += 5;
}




