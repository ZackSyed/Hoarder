class Player {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas; 
        this.parameters = {
            x: 500,
            y: 500,
            radius: 40
        }
        this.score = 0; 
    }

    drawPlayer() {
    let { x, y, radius } = this.parameters;
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI*2);
        this.ctx.strokeStyle = "black";
        this.ctx.stroke();
        this.ctx.closePath();
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
            default:
                break;
        }
    }

    collision() {
        this.score += 1; 
    }

    drawScore() {
        this.ctx.font = "16px Arial";
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fillText("Score: "+this.score, 8, 20);
    }
}

export default Player; 





