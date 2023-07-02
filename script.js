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

// setInterval(function () {
//     let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
//     let blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
//     let blockBottom = blockTop + parseInt(window.getComputedStyle(block).getPropertyValue("height"));

//     if (
//         characterTop <= blockBottom &&
//         characterTop >= blockTop &&
//         (character.style.left >= block.offsetLeft && character.style.left <= block.offsetLeft + block.offsetWidth)
//     ) {
//         // Game over condition: character hits the blocks
//         clearInterval(interval);
//         alert("Game over!");
//         // Reset character position or perform other game over actions
//     }
// }, 10);



setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

    let blockBottom = parseInt(window.getComputedStyle(block).getPropertyValue("bottom"));
    let gapTop = parseInt(window.getComputedStyle(gap).getPropertyValue("top"));
    let cTop = -(500 - characterTop);
    if (((blockBottom < 20) && (blockBottom > -50) && ((cTop < gapTop) || (cTop > gapTop + 130)))) {
        alert("Game over. Score: " + (counter - 1));
        character.style.top = 100 + "px";
        counter = 0;
    }
}, 10);





character = document.getElementById('character').getBoundingClientRect();
let characterTop = character.top;
let characterLeft = character.left;
let characterRight = character.right
let characterBottom = character.bottom

block = document.getElementById('block').getBoundingClientRect();
let blockTop = block.top;
let blockLeft = block.left;
let blockRight = block.right
let blockBottom = block.bottom

if ((blockTop > div1Top && blockTop < div1Bottom) || (blockBottom > div1Top && blockBottom < div1Bottom)) {
    let verticalMatch = true
} else {
    let verticalMatch = false
}

if ((blockRight > div1Left && blockRight < div1Right) || (blockLeft < div1Right && blockLeft > div1Left)) {
    let horizontalMatch = true
} else {
    let horizontalMatch = false
}

if (horizontalMatch && verticalMatch) {
    let intersect = true
} else {
    let intersect = false
}















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



