const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

function Bar() {
    this.left = random(width / 2);
    this.right = random(width / 2);
    this.x = height;
    this.w = 20;
}


