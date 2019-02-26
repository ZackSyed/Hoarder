import { getRandomSpawn } from './helper';

class Dot {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas; 
        this.parameters = {
            x: getRandomSpawn(550, 120),
            y: getRandomSpawn(550, 120),
            radius: 10
        }
    }

    drawDot() {
        let { x, y, radius } = this.parameters;
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI*2);
        this.ctx.fillStyle = "blue";
        this.ctx.fill();
        this.ctx.closePath(); 
    };

    reposition() {
        this.parameters.x = getRandomSpawn(550, 120);
        this.parameters.y = getRandomSpawn(550, 120);
    }

}

export default Dot; 