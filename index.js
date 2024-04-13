const canvas = document.getElementById('main');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;
let brushColor = 'black';



document.querySelectorAll('.btn-color').forEach(button => {
    button.addEventListener('click', () => {
      brushColor = button.id;
    });
  });