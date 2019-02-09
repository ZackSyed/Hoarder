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
        let { x, y, radius } = this.parameters;
        if (x + this.dx > this.canvas.width - radius || x + this.dx < radius) {
            this.dx = -this.dx;
        } else if (y + this.dy > this.canvas.height - radius || y + this.dy < radius) {
            this.dy = -this.dy;
        }
        x += this.dx;
        y += this.dy;
    }
}

export default Circle;
