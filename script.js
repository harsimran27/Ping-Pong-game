const canvas = document.getElementById("myCanvas");
const startGameBtn = document.getElementById("start-game-btn");
const context = canvas.getContext("2d");

const width = 300;
const height = 500;

const paddleWidth = 40;
const paddleHeight = 5;

canvas.width = width;
canvas.height = height;

let pingPongUi = () => {

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

    context.font = "25px Arial"
    context.fillText(10, 10, height / 2 - 20);

    context.font = "25px Arial"
    context.fillText(15, 10, height / 2 + 40);

}

const ball = {
    x: 200,
    y: 200,
    size: 7,
    dx: 5,
    dy: 4,
}

let drawCircle = () => {
    context.beginPath();
    context.arc(ball.x, ball.y, ball.size, 0, 2 * Math.PI, false);
    context.fillStyle = "white";
    context.fill();
}

let update = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    pingPongUi();
    drawCircle();

    //change position
    ball.x += ball.dx;
    ball.y += ball.dy;

    //detect side walls
    if (ball.x + ball.size > canvas.width || ball.x - ball.size < 0) {
        ball.dx *= -1;
    }

    // Detect top and bottom walls
    if (ball.y + ball.size > canvas.height || ball.y - ball.size < 0) {
        ball.dy *= -1;
    }

    requestAnimationFrame(update);
}

// update();
startGameBtn.addEventListener("click", ()=>{
    update();
});


