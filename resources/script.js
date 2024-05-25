let changeColor = document.querySelector('h2');
let elemDiv = document.getElementById('container');

function showBorder() {
    elemDiv.style.boxShadow = '10px 10px black';
}

function hideBorder() {
    elemDiv.style.boxShadow = '5px 5px black';
}

changeColor.onmousedown = showBorder;
changeColor.onmouseup = hideBorder;