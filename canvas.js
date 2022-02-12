// Initialization
let canvas = document.getElementById("board");
let ctx = canvas.getContext("2d");
const canvasWidth = canvas.clientWidth;
const canvasHeight = canvas.clientHeight;
// alert(canvasWidth + ", " + canvasHeight);
ctx.clearRect(0, 0, canvasWidth, canvasHeight);


const imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
const pixels = imageData.data;

for (let i = 0; i < canvasHeight; i++) {
    for (let j = 0; j < canvasHeight; j++) {
        for (let k = 0; k < 4; k++) {
            // r g b a
            if (k == 0 || k == 2) continue;
            pixels[(i * canvasHeight + j) * 4 + k] = 0xff;
        }
    }
}

ctx.putImageData(imageData, 0, 0);

ctx.beginPath();
ctx.rect(20, 40, 50, 50)
ctx.fillStyle = "Red";
ctx.fill()
ctx.closePath();