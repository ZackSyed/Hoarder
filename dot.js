import { getRandomSpawn } from './helper';

class Dot {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas; 
        this.parameter = {
            x: getRandomSpawn(700, 120),
            y: getRandomSpawn(700, 120),
            radius: 10
        }
    }

    drawDot() {
        let { x, y, radius } = this.parameter;
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI*2);
        this.ctx.fillStyle = "blue";
        this.ctx.fill();
        this.ctx.closePath(); 
    };

    reposition() {
        this.parameter.x = getRandomSpawn(700, 120);
        this.parameter.y = getRandomSpawn(700, 120);
    }

}

export default Dot; 