import { getRandomSpawn, getRandomNegMovement } from './helper';

class Circle {
    constructor(ctx, canvas, player) {
        this.ctx = ctx;
        this.player = player;
        this.canvas = canvas;
        this.dx = getRandomNegMovement();
        this.dy = getRandomNegMovement(); 
        this.parameters = {
            x: this.setInitialX(),
            y: this.setInitialY(),
            radius: 10
        }
    }

    setInitialX() {
        let { radius, x } = this.player;
        let initX = getRandomSpawn(600, 120);
        if (initX === x + radius || x - radius) {
            return initX = getRandomSpawn(600, 120);
        } else {
            return initX;
        }
    }

    setInitialY() {
        let { radius, y } = this.player;
        let initY = getRandomSpawn(600, 120);
        if (initY === y + radius || y - radius) {
            return initY = getRandomSpawn(600, 120);
        } else {
            return initY;
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
