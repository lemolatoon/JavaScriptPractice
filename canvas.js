"use strict";
// Initialization
const canvas = document.getElementById("board");
const context = canvas.getContext("2d");
const canvasWidth = canvas.clientWidth;
const canvasHeight = canvas.clientHeight;

// r g b a
export const I_COLOER = [0x7f, 0xff, 0xd4, 0xff];
export const O_COLOR = [0xff, 0xff, 0x00, 0xff];
export const T_COLOR = [0x99, 0x32, 0xcc, 0xff];
export const J_COLOR = [0x00, 0x00, 0xcd, 0xff];
export const L_COLOR = [0xff, 0x8c, 0x00, 0xff];
export const S_COLOR = [0x00, 0xff, 0x7f, 0xff];
export const Z_COLOR = [0xff, 0x63, 0x47, 0xff];

sample()

function sample() {
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
        for (let j = 0; j < canvasWidth; j++) {
            for (let k = 0; k < 4; k++) {
                // r g b a
                if (k == 1 || k == 2) continue;
                pixels[(i * canvasHeight + j) * 4 + k] = 0xff;
            }
        }
    }

    ctx.putImageData(imageData, 0, 0);

    let array = []
    let green = [0, 0xff, 0, 0xff];
    console.log(green);
    console.log(array.length);
    for (let i = 0; i < 200; i++) {
        array.push([]);
        for (let j = 0; j < 400; j++) {
            console.log(`i: ${i}, j: ${j}`);
            array[i][j] = green;
        }
    }
    draw_pixcels(array, 100, 390);

}

export function draw_pixcels(array, x_start, y_start) {
    // array[x][y][c]
    const imageData = context.getImageData(0, 0, canvasWidth, canvasHeight);
    const pixels = imageData.data;
    let height = array.length;
    let width = array[0].length;
    console.assert(array[0][0].length === 4);
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            for (let k = 0; k < 4; k++) {
                pixels[((i + x_start) * canvasHeight + (j + y_start)) * 4 + k] = array[i][j][k];
            }
        }
    }
    context.putImageData(imageData, 0, 0);
}