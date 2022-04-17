const mainContainer = document.querySelector ('.mainContainer');
const controls = document.querySelector ('.controls');
const array = []; 
const generatorBtn = document.getElementById ('generatorBtn');
const sizeInput = document.getElementById ('size');
const colorBtn = document.querySelector('.colorBtn');

let containerSide = 768;
let squareSide = 0; 
let gridStatus= false; 
let lastSize = 0; 
let currentSize = 0;
let black = true; 

generatorBtn.onclick = mainFunction; 
colorBtn.onclick = () => {
    switch (black){
        case true: black = false; 
            colorBtn.classList.toggle('colorful');
            break; 
        case false: black = true; 
            colorBtn.classList.toggle('colorful');
                    break;
    }
}

window.onload = generator(64);

function mainFunction (){
currentSize = sizeInput.value; 
generator (currentSize);

}
function generator(gridSide){
    
    if (gridStatus === false){
        createSquares(gridSide);
    }else {
        eraseSquares(lastSize);
        createSquares(gridSide);
    }


}
function calculateDimension(gridSide){
      squareSide = (containerSide/gridSide)-2;
                     return squareSide+'px';
}
function eraseSquares(gridSide) {

    total = gridSide*gridSide;
    for ( i = 0 ; i < total ; i ++){
        const square = document.querySelector('.square');
        square.remove();
    }


}
function createSquares(gridSide){

    total = gridSide*gridSide;
    for ( i = 0 ; i < total ; i ++){
        const square = document.createElement ('div');
        square.setAttribute('class' , 'square');
        square.style.height = calculateDimension(gridSide);
        square.style.width = calculateDimension(gridSide);
        mainContainer.appendChild(square); 
    }

    gridStatus = true; 
    lastSize = gridSide;

    const squares = document.querySelectorAll('.square');
    squares.forEach ((square) => {
    square.onmouseenter= changeColor; 
    });


}
function changeColor(e) {

    switch(black){

        case true: 
            e.target.style.background = 'black';
            break;
        
        case false: 
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            e.target.style.background = "#" + randomColor;
            break;
        default:
            e.target.style.background = 'white';
            
    }
}

