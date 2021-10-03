const canvas = document.getElementById("myCanvas");
const startGameBtn = document.getElementById("start-game-btn");
const context = canvas.getContext("2d");

const width = 300;
const height = 500;

const ball = {
    x: 200,
    y: 200,
    size: 7,
    dx: 3,
    dy: 2,
}

const slite = {
    w: 40,
    h: 5,
    x: 130,
    speed: 7,
    dx: 0,
    dy: 0
};

canvas.width = width;
canvas.height = height;

let pingPongUi = () => {

    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);

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

let clear = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

let drawCircle = () => {
    context.beginPath();
    context.arc(ball.x, ball.y, ball.size, 0, 2 * Math.PI, false);
    context.fillStyle = "white";
    context.fill();
}

let update = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    clear();
    pingPongUi();
    twoSlites();
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

let twoSlites = () => {

    context.fillStyle = "white";
    context.fillRect(slite.x, 8, slite.w, slite.h);

    context.fillStyle = "white";
    context.fillRect(slite.x, height - 10, slite.w, slite.h);

}

let newPos = () => {
    slite.x += slite.dx;
    slite.y += slite.dy;

    detectWalls();
}

let detectWalls = () => {
    // Left wall
    if (slite.x < 0) {
        slite.x = 0;
    }

    // Right Wall
    if (slite.x + slite.w > canvas.width) {
        slite.x = canvas.width - slite.w;
    }
}

let updateSlite = () => {

    clear();

    newPos();

    requestAnimationFrame(updateSlite);

}

let moveRight = () => {
    slite.dx = slite.speed;
}

function moveLeft() {
    slite.dx = -slite.speed;
}

let keyDown = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'Right') {
        moveRight();
    } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
        moveLeft();
    }
}

let keyUp = (e) => {
    if (
        e.key == 'Right' ||
        e.key == 'ArrowRight' ||
        e.key == 'Left' ||
        e.key == 'ArrowLeft'
    ) {
        slite.dx = 0;
        slite.dy = 0;
    }
}

startGameBtn.addEventListener("click", () => {
    canvas.style.border = "1px solid white";
    update();
});

updateSlite();

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
