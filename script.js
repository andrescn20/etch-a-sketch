const mainContainer = document.querySelector ('.mainContainer');
const controls = document.querySelector ('.controls');
const array = []; 
const generatorBtn = document.getElementById ('generatorBtn');
const sizeInput = document.getElementById ('size');
const colorBtn = document.querySelector('.colorBtn');
const eraserBtn = document.querySelector('.eraserBtn');

let containerSide = 520;
let squareSide = 0; 
let gridStatus= false; 
let lastSize = 0; 
let currentSize = 0;
let black = true; 
let white = false; 


window.onload = generator(24);


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
eraserBtn.onclick = () => {
    switch (white){
        case true: white = false; 
            eraserBtn.classList.toggle('eraser');
            break; 
        case false: white = true; 
            eraserBtn.classList.toggle('eraser');
             break;
    }
}


function mainFunction (){
    let input = sizeInput.value;
    currentSize = parseInt(input, 10);

    if ( Number.isNaN(currentSize)) {
        alert('Invalid input. Please enter a number');
    } else if (Math.abs(currentSize) > 100){
        alert('Invalid input. Max input is 100');
    }else {
        currentSize = Math.abs(currentSize);
        generator (currentSize);
    }
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
    square.onmousemove= changeColor; 
    });


}
function changeColor(e) {


    if (black === true && white === false) { 
            e.target.style.background = 'black';

    } else if (black === false && white === false){ 
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            e.target.style.background = "#" + randomColor;
    }else{
            e.target.style.background = 'white'; 
    }
}

