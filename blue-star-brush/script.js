const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'cyan'
ctx.lineWidth = 2;
ctx.shadowOffSetX = 10;
ctx.shadowOffSetY = 10;
ctx.shadowBlur = 10;
ctx.shadowColor = 'cyan';


function drawshape(x, y, radius, inset, n) {
    ctx.beginPath();
    ctx.save();
    ctx.translate(x, y);
    ctx.moveTo(0, 0 - radius);
    for (let i = 0; i < n; i++){
        ctx.rotate(Math.PI / n);
        ctx.lineTo(0, 0 - (radius * inset));
        ctx.rotate(Math.PI / n);
        ctx.lineTo(0, 0 - radius);
    }
    ctx.restore();
    ctx.closePath();
    ctx.stroke(); 
    ctx.fill();
}
drawshape(100, 120, 100, .5, 5);  

window.addEventListener('mousemove', function(e){
    drawshape(e.x, e.y, 100, 0.5, 5);
});
