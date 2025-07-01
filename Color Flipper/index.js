const body = document.getElementsByTagName('body')[0];

function setColor(color) {
    body.style.backgroundColor = color;
}

function setRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    const color = `rgb(${r}, ${g}, ${b})`;

    console.log(color);
    body.style.backgroundColor = color;
}