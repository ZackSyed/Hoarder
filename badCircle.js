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

        let initX = getRandomSpawn(600, 120);
        if (initX === this.player.parameters.x + this.player.parameters.radius + 10 || initX === this.player.parameters.x - this.player.parameters.radius + 10) {
            return initX = getRandomSpawn(600, 120);
        } else {
            return initX;
        }
    }

    setInitialY() {
        let initY = getRandomSpawn(600, 120);
        if (initY === this.player.parameters.y + this.player.parameters.radius + 10 || initY === this.player.parameters.y - this.player.parameters.radius + 10) {
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
        this.dy = -this.dy + 1;
        this.dx = -this.dx + 1;
    }
}

export default Circle;
