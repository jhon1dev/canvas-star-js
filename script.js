var canvas = document.getElementById("canvas1");
const context = canvas.getContext('2d');

context.beginPath();

context.moveTo(75, 250);
context.lineTo(150, 50);
context.lineTo(225, 250);
context.lineTo(50, 120);
context.lineTo(250,120);
context.lineTo(75,250)

context.lineWidth = 3;
context.strokeStyle = 'red';
context.stroke();