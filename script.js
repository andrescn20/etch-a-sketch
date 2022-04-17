const mainContainer = document.querySelector ('.mainContainer');
const controls = document.querySelector ('.controls');
const array = []; 

let containerSide = 768;
let squareSide = 0; 
const squaresArray = [];

function calculateDimension(a){
    squareSide = (containerSide/a)-2;
    return squareSide+'px';
}

function createSquares(a){
    total = a*a;
    for ( i = 0 ; i < total ; i ++){
        const square = document.createElement ('div');
        square.setAttribute('class' , 'square');
        square.style.height = calculateDimension(a);
        square.style.width = calculateDimension(a);
        mainContainer.appendChild(square); 
        squaresArray.push(square);
    }

    const squares = document.querySelectorAll('.square');

    squares.forEach ((square) => {

    square.onclick = changeColor; 

    });
}


function changeColor(e) {
    e.target.style.background = 'black';
}


/* This code is working correctly: 

const btn = document.querySelectorAll('button');

btn.forEach ((button) => {

    button.onclick = changeColor; 

}); */


/*const blackSquare = mainContainer.getElementsByClassName("square");
    let length = blackSquare.length; 
    for (i = 0 ; i < length ; i++){
    
        blackSquare[i].addEventListener("onmouseover", (i)=> {
            blackSquare[i].style.backgroundColor = 'black';
        });

function borderStatus(){
    let border = document.getElementById("borderBtn");
    border.classList.toggle("border");
}

function colorStatus(){
    let border = document.getElementsByClassName('.square');
    border.classList.toggle("color");
}*/

