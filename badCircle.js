import { getRandomSpawn, getRandomNegMovement } from './helper';

class Circle {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.dx = getRandomNegMovement();
        this.dy = getRandomNegMovement(); 
        this.parameters = {
            x: getRandomSpawn(700, 120),
            y: getRandomSpawn(700, 120),
            radius: 10
        }
    }

    drawCircle() {
        let { x, y, radius } = this.parameters;
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI*2);
        this.ctx.fillStyle = "green";
        this.ctx.fill();
        this.ctx.closePath();
    }

    move() {
        if (this.parameters.x + this.dx > this.canvas.width - this.parameters.radius || this.parameters.x + this.dx < this.parameters.radius && this.dx !== 0) {
            this.dx = -this.dx;
        } else if (this.parameters.y + this.dy > this.canvas.height - this.parameters.radius || this.parameters.y + this.dy < this.parameters.radius && this.dy !== 0) {
            this.dy = -this.dy;
        }
        this.parameters.x += this.dx;
        this.parameters.y += this.dy;
    }

    collision() {
        this.dy = -this.dy;
        this.dx = -this.dx;
    }
}

export default Circle;
