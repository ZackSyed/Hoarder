import { getRandomSpawn } from './helper';

class Dot {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas; 
        this.parameter = {
            x: getRandomSpawn(850, 150),
            y: getRandomSpawn(825, 150),
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

    // VerticalDots = (ctx, dotX, dotY, dotRadius) => {
    // }

}

export default Dot; 