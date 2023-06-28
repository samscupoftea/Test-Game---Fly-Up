const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 400;
canvas.height = 500;

const block = document.getElementById("block");
const gap = document.getElementById("gap");
const character = document.getElementById("sprite");

function moveLeft() {
    const left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    character.style.left = left + 1 + "px";
}

function moveRight() {
    const right = parseInt(window.getComputedStyle(characer).getPropertyValue("right"));
    character.style.right = right - 1 + "px";
}






// gap.addEventListener('animationiteration', () => {
//     let random = -((Math.random() * 200) + 150);
//     gap.style.right = random + "px";
// });

// document.addEventListener("mousemove", e => {
//     player.position = (e.x / window.innerHeight) * 100;
// })


// const player = new Player(playerElem);

// document.addEventListener('mousemove', (e) => {
//     player.position = (e.x / window.innerHeight) * 100;
// });





//CREATE PLAYER SPRITE IN JS. 
class sprite {
    constructor(position) {
        this.position
    }
    //what should the sprite look like? 
    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, 30, 30)

    }

}



player.draw();

console.log(player)
console.log("HELLO WORLD");




// function Bar() {
//     this.left = random(width / 2);
//     this.right = random(width / 2);
//     this.x = height;
//     this.w = 20;
// }



