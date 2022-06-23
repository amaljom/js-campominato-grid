
//  ! dobbiamo generare automaticamente cento caselle dentro il container presente nel html
const container = document.getElementById('containder-grid');

const blackList=[];
// ! FUNZIONE CHE GENERA UN NUOVO QUADRATO
function createElement(){
    const newBox= document.createElement('div');
    newBox.classList.add("new-grid");
   // diamo indietro il risultato 
    return newBox;
}

// ! FUNZIONE CHE GENERA UN NUMERO
function createNumber(usedNumbers){
    let randomNumber = (Math.floor(Math.random() * 100)+1);
    while(usedNumbers.includes(randomNumber)){
        randomNumber = (Math.floor(Math.random() * 100)+1);
    }
    return randomNumber;
}


// * richiamo la funzione per genereare quadrati
for (let index = 0; index < 100; index++) {
    // ? RICHIAMO DELLA FUNZIONEPER GENERARE LE BOX
    const newGridBox = createElement();

    // ? RICHIAMO DELLA FUNZIONE PER GENERARE I NUMERI
    
    const gridNumber= createNumber(blackList);

    newGridBox.innerHTML=gridNumber;
    blackList.push(gridNumber);
    container.append(newGridBox);
}
