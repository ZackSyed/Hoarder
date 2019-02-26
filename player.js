
class Player {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas; 
        this.parameters = {
            x: 400,
            y: 400,
            radius: 40
        }
        this.score = 0; 
        this.timer = 0;
    }

    drawPlayer() {
    let { x, y, radius } = this.parameters;
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI*2);
        this.ctx.strokeStyle = "red";
        this.ctx.stroke();
        this.ctx.closePath();
        // this.image = new Image();
        // this.image.src = './app/assets/1200px-SNice.svg.png'
    }

    updatePosition(direction, num) {
        switch (direction) {
            case "right":
                this.parameters.x += num;
                break;
            case "left":
                this.parameters.x -= num;
                break; 
            case "up":
                this.parameters.y -= num;
                break; 
            case "down":
                this.parameters.y += num; 
                break;
            case "leftUp":
                this.parameters.x -= num;
                this.parameters.y -= num; 
                break;
            case "leftDown":
                this.parameters.x -= num;
                this.parameters.y += num; 
                break;
            case "rightUp":
                this.parameters.x += num;
                this.parameters.y -= num; 
                break;
            case "rightDown":
                this.parameters.x += num;
                this.parameters.y += num; 
                break;
            default:
                break;
        }
    }

    collision() {
        this.score += 1; 
    }

    circleCollision() {
        this.score -= 1;
        if (this.score < 0) {
            this.score = 0; 
        }
    }

    drawScore() {
        this.ctx.font = "24px Arial";
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fillText("Score: "+this.score, 500, 80);
    }

    drawTimer() {
        this.ctx.font = "24px Arial";
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fillText("Timer: " + this.timer + ' sec', 500, 55);
    }

    increaseTimer() {
        this.timer + 1;
    }
}

export default Player; 





