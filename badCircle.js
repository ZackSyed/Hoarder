import { getRandomSpawn } from './helper';

class Circle {
    constructor(ctx, canvas, dx, dy) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.dx = dx || 0;
        this.dy = dy || 0; 
        this.parameters = {
            x: getRandomSpawn(850, 150),
            y: getRandomSpawn(825, 150),
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
}

export default Circle;
