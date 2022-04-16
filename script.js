const mainContainer = document.querySelector ('.mainContainer');
const controls = document.querySelector ('.controls');
const array = []; 

let containerSide = 768;
let squareSide = 0; 
function createSquares(a){
    total = a*a;
    for ( i = 0 ; i < total ; i ++){
        const square = document.createElement ('div');
        square.setAttribute('class' , 'square');
        square.style.height = calculateDimension(a);
        square.style.width = calculateDimension(a);
        mainContainer.appendChild(square);
    
    }
}

function calculateDimension(a){
    squareSide = (containerSide/a)-2;
    return squareSide+'px';
}