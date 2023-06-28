// const canvas = document.querySelector('canvas')
// const c = canvas.getContext('2d')



const block = document.getElementById("block");
const gap = document.getElementById("gap");
const character = document.getElementById("sprite");
let interval;
let both = 0;

function moveLeft() {
    const left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    character.style.left = left - 2 + "px";
}

function moveRight() {
    const left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    character.style.left = left + 2 + "px";
}

document.addEventListener("keydown", event => {
    if (both == 0) {
        both++;
        if (event.key === "ArrowLeft") {
            interval = setInterval(moveLeft, 1);
        }
        if (event.key === "ArrowRight") {
            interval = setInterval(moveRight, 1);
        }
    }
});

document.addEventListener("keyup", event => {
    clearInterval(interval);
    both = 0;
});


gap.addEventListener('animationiteration', () => {
    let random = -((Math.random() * 200) + 150);
    gap.style.right = random + "px";
});

setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockBottom = parseInt(window.getComputedStyle(block).getPropertyValue("bottom"));

    if (characterTop <= blockBottom && characterTop >= blockBottom - 50) {
        // Game over condition: character hits the blocks
        clearInterval(interval);
        alert("Game over!");
        // Reset character position or perform other game over actions
    }
}, 10);


// document.addEventListener("mousemove", e => {
//     player.position = (e.x / window.innerHeight) * 100;
// })


// const player = new Player(playerElem);

// document.addEventListener('mousemove', (e) => {
//     player.position = (e.x / window.innerHeight) * 100;
// });





// //CREATE PLAYER SPRITE IN JS. 
// class sprite {
//     constructor(position) {
//         this.position
//     }
//     //what should the sprite look like? 
//     draw() {
//         c.fillStyle = 'red'
//         c.fillRect(this.position.x, this.position.y, 30, 30)

//     }

// }








// function Bar() {
//     this.left = random(width / 2);
//     this.right = random(width / 2);
//     this.x = height;
//     this.w = 20;
// }



