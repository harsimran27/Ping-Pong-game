const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");

const width = 300;
const height = 500;

const paddleWidth = 40;
const paddleHeight = 5;

canvas.width = width;
canvas.height = height;

context.fillStyle = "black";
context.fillRect(0, 0, width, height);

context.fillStyle = "white";
context.fillRect(130, 8, paddleWidth, paddleHeight);

context.fillStyle = "white";
context.fillRect(130, height - 10, paddleWidth, paddleHeight);

context.beginPath();
context.moveTo(0, height / 2);
context.lineTo(width, height / 2);
context.setLineDash([4]);
context.strokeStyle = "white"
context.stroke();

context.beginPath();
context.arc(width / 2, height / 2, 7, 0, 2 * Math.PI, false);
context.fillStyle = "white";
context.fill();

context.font = "25px Arial"
context.fillText(10,10,height/2-20);

context.font = "25px Arial"
context.fillText(15,10,height/2+40);

