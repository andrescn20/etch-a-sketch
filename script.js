const mainContainer = document.querySelector ('.mainContainer');
const controls = document.querySelector ('.controls');
let a = 16; 

function createHorizontals(a){
    for ( i = 0 ; i < a ; i ++){
        const horizontal = document.createElement ('div');
        horizontal.setAttribute('class' , 'horizontal');
        mainContainer.appendChild(horizontal);
    }
}