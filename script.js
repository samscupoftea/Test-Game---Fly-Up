const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 400;
canvas.height = 500;

const block = document.getElementById("block");
const gap = document.getElementById("gap");

gap.addEventListener('animationiteration', () => {
    let random = -((Math.random() * 200) + 150);
    gap.style.right = random + "px";
});










// //CREATE PLAYER SPRITE IN JS. 
// class Sprite {
//     constructor(position) {
//         this.position
//     }
//     //what should the sprite look like? 
//     draw() {
//         c.fillStyle = 'red'
//         c.fillRect(this.position.x, this.position.y, 30, 30)

//     }

// }


// const player = new Sprite({
//     x: 0,
//     y: 0
// })

// player.draw();

// console.log(player)
// console.log("HELLO WORLD");




// function Bar() {
//     this.left = random(width / 2);
//     this.right = random(width / 2);
//     this.x = height;
//     this.w = 20;
// }



