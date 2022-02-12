let canvas = document.getElementById("board");
let ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(20, 40, 50, 50)
ctx.fillStyle = "Red";
ctx.fill()
ctx.closePath();