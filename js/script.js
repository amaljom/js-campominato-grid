
//  ! dobbiamo generare automaticamente cento caselle dentro il container presente nel html


const container = document.getElementById('containder-grid');

// ! FUNZIONE CHE GENERA UN NUOVO QUADRATO
function createElement(){
    const newBox= document.createElement('div');
    newBox.classList.add("new-grid");
    
    return newBox;
}


// * richiamo la funzione per genereare quadrati
for (let index = 0; index < 100; index++) {
    const newGridBox = createElement();

    container.append(newGridBox);
}
