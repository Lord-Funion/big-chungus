// Set up the canvas and context
const canvas = document.getElementById("chungusCanvas");
const ctx = canvas.getContext("2d");

// Variables for the animation
let bodyX = 200;
let bodyY = 220;
let bodyW = 246;
let faceW = bodyW / 2;
let noseW = 10;
let noseL = 12;
let directionW = 1;
let directionL = 1;
let eyeW = 32;
let eyeL = 34;
let pupil = 10;
let legW = 41;
let legL = 133;

// Function to draw the scene
function draw() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Body
    ctx.fillStyle = "magenta";
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.ellipse(bodyX, bodyY, bodyW / 2, 214 / 2, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Face
    ctx.beginPath();
    ctx.ellipse(bodyX, bodyY - 70, faceW / 2, 114 / 2, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Nose
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.ellipse(193, 158, noseW / 2, noseL / 2, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(204, 158, noseW / 2, noseL / 2, 0, 0, Math.PI * 2);
    ctx.fill();

    // Eyes
    ctx.beginPath();
    ctx.ellipse(165, 133, eyeW / 2, eyeL / 2, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(223, 133, eyeW / 2, eyeL / 2, 0, 0, Math.PI * 2);
    ctx.fill();

    // Pupils
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(222, 132, pupil / 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(163, 132, pupil / 2, 0, Math.PI * 2);
    ctx.fill();

    // Legs
    ctx.fillStyle = "magenta";
    ctx.fillRect(100, 251, legW, legL);
    ctx.fillRect(253, 251, legW, legL);

    // Text bubble
    ctx.beginPath();
    ctx.ellipse(192, 41, 178 / 2, 40 / 2, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "black";
    ctx.font = "16px Arial";
    ctx.fillText("ME BIG CHUNGUS", 120, 45);

    // Update eyes for animation
    eyeW += directionW;
    if (eyeW >= 50) {
        directionW = -1;
    } else if (eyeW <= 0) {
        directionW = 1;
    }

    eyeL += directionL;
    if (eyeL >= 50) {
        directionL = -1;
    } else if (eyeL <= 0) {
        directionL = 1;
    }

    // Call the next frame
    requestAnimationFrame(draw);
}

// Start the animation
draw();
