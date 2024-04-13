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
    context.lineWidth = document.getElementById('slider').value;
    context.lineJoin = 'round';
    context.lineCap = 'round';
    context.strokeStyle = brushColor === 'eraser' ? 'white' : brushColor; // Set stroke style based on brush color or white for eraser
    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
}
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

document.querySelectorAll('.btn-color').forEach(button => {
    button.addEventListener('click', () => {
        brushColor = button.id;
    });
});

document.getElementById('new').addEventListener('click', () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
});

document.getElementById('erase').addEventListener('click', () => {
    brushColor = 'eraser'; // Set brush color to eraser
});

document.getElementById('slider').addEventListener('input', () => {
    document.getElementById('brushSize').textContent = document.getElementById('slider').value;
});  