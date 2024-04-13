const canvas = document.getElementById('main');
const context = canvas.getContext('2d');
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;
let brushColor = 'black';

function draw(e) {
    if (!isDrawing) return;
    context.strokeStyle = brushColor === 'eraser' ? 'white' : brushColor;
    context.lineWidth = document.getElementById('slider').value;
    context.lineJoin = 'round';
    context.lineCap = 'round';
    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    if (brushColor === 'eraser') {
        context.globalCompositeOperation = 'destination-out';
    } else {
        context.globalCompositeOperation = 'source-over';
    }
}


document.querySelectorAll('.btn-color').forEach(button => {
    button.addEventListener('click', () => {
        brushColor = button.id;
    });
});