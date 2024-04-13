// Get the canvas element and its 2d context
const canvas = document.getElementById('main');
const context = canvas.getContext('2d');

// Initialize drawing variables
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;
let brushColor = 'black'; //default brush color

// Function to draw on the canvas
function draw(e) {
    if (!isDrawing) return;  // Stop drawing if mouse is not clicked
    context.lineWidth = document.getElementById('slider').value; // Set line width to the value from the slider
    context.lineJoin = 'round';
    context.lineCap = 'round';
    // Set stroke style to brush color or white for eraser
    context.strokeStyle = brushColor === 'eraser' ? 'white' : brushColor; // Set stroke style based on brush color or white for eraser
    context.beginPath();
    context.moveTo(lastX, lastY); // Move to the last recorded position
    context.lineTo(e.offsetX, e.offsetY); // Draw a line to the current mouse position
    context.stroke(); // Apply the stroke
    [lastX, lastY] = [e.offsetX, e.offsetY]; // Update the last recorded position
}

// Event listeners for mouse actions
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY]; // Record the starting position
});
canvas.addEventListener('mousemove', draw); // Draw as the mouse is moved
canvas.addEventListener('mouseup', () => isDrawing = false);  // Stop drawing when mouse is released
canvas.addEventListener('mouseout', () => isDrawing = false);  // Stop drawing when mouse leaves the canvas

// Event listener for color buttons
document.querySelectorAll('.btn-color').forEach(button => {
    button.addEventListener('click', () => {
        brushColor = button.id; // Set brush color to the id of the clicked button
    });
});

// Event listener for the "new" button to clear the canvas
document.getElementById('new').addEventListener('click', () => {
    context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
});

// Event listener for the eraser button
document.getElementById('erase').addEventListener('click', () => {
    brushColor = 'eraser'; // Set brush color to eraser
});

// Event listener for the slider to update brush size
document.getElementById('slider').addEventListener('input', () => {
    document.getElementById('brushSize').textContent = document.getElementById('slider').value; // Update brush size display
});  