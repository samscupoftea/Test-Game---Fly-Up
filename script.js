// // const canvas = document.querySelector('canvas')
// // const c = canvas.getContext('2d')



// const block = document.getElementById("block");
// const gap = document.getElementById("gap");
// const character = document.getElementById("sprite");
// let interval;
// let both = 0;

// function moveLeft() {
//     const left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
//     character.style.left = left - 2 + "px";
// }

// function moveRight() {
//     const left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
//     character.style.left = left + 2 + "px";
// }

// document.addEventListener("keydown", event => {
//     if (both == 0) {
//         both++;
//         if (event.key === "ArrowLeft") {
//             interval = setInterval(moveLeft, 1);
//         }
//         if (event.key === "ArrowRight") {
//             interval = setInterval(moveRight, 1);
//         }
//     }
// });

// document.addEventListener("keyup", event => {
//     clearInterval(interval);
//     both = 0;
// });


// gap.addEventListener('animationiteration', () => {
//     let random = -((Math.random() * 200) + 150);
//     gap.style.right = random + "px";
// });





// character = document.getElementById('sprite').getBoundingClientRect();
// const characterTop = character.top;
// const characterLeft = character.left;
// const characterRight = character.right;
// const characterBottom = character.bottom;

// block = document.getElementById('block').getBoundingClientRect();
// const blockTop = block.top;
// const blockLeft = block.left;
// const blockRight = block.right;
// const blockBottom = block.bottom;

// let verticalMatch = false;
// let horizontalMatch = false;

// if ((blockTop > characterTop && blockTop < characterBottom) || (blockBottom > characterTop && blockBottom < characterBottom)) {
//     verticalMatch = true;
//     console.log('HIT - Vertical');
// }

// if ((blockRight > characterLeft && blockRight < characterRight) || (blockLeft < characterRight && blockLeft > characterLeft)) {
//     horizontalMatch = true;
//     console.log('HIT - Horizontal');
// }

// if (horizontalMatch && verticalMatch) {
//     let intersect = true;
//     console.log('HIT - Intersection');
// } else {
//     let intersect = false;
// }


















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




const block = document.getElementById("block");
const block2 = document.getElementById("block2");
const gap = document.getElementById("gap");
const character = document.getElementById("sprite");
let interval;


function moveLeft() {
    const left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    character.style.left = left - 2 + "px";
    checkCollision();
}

function moveRight() {
    const left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    character.style.left = left + 2 + "px";
    checkCollision();
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

gap.addEventListener("animationiteration", () => {
    let random = -((Math.random() * 200) + 150);
    gap.style.right = random + "px";
    checkCollision();
});

function checkCollision() {
    const characterRect = character.getBoundingClientRect();
    const blockRect = block.getBoundingClientRect();
    const blockRect2 = block2.getBoundingClientRect();


    if ((
        characterRect.top <= blockRect.bottom &&
        characterRect.top >= blockRect.top &&
        characterRect.left >= blockRect.left &&
        characterRect.right <= blockRect.right)
        ||

        (

            characterRect.top <= blockRect2.bottom &&
            characterRect.top >= blockRect2.top &&
            characterRect.left >= blockRect2.left &&
            characterRect.right <= blockRect2.right
        )) {
        // Game over condition: character hits the blocks
        clearInterval(interval);
        alert("Game over!");
        // Reset character position or perform other game over actions
    }
}
