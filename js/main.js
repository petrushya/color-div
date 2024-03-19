 
const squareContent = document.querySelector('.squareContent');
const dataInput = document.querySelector('.dataInput');
const numberInput = document.querySelector('#numberInput');
const par = document.createElement('p');

let squareSize;
if(squareContent.offsetHeight < squareContent.offsetWidth){
  squareSize = Math.floor(squareContent.offsetHeight/10)*10;
}else{
  squareSize = Math.floor(squareContent.offsetWidth/10)*10;
};

squareContent.style.inlineSize = `${squareSize}px`;
squareContent.style.blockSize = `${squareSize}px`;

let divisor;

function setGrid(youNumber) {
  for (let index = 0; index < youNumber; index++){
    const line = document.createElement('div');
    line.setAttribute('class', 'lineaggr');
    line.setAttribute('style', `block-size:${squareSize/youNumber}px;`);
    for (let index = 0; index < divisor; index++) {
      const lineFiller = document.createElement('div');
      lineFiller.setAttribute('class', 'aggregator');
      lineFiller.setAttribute('style', `inline-size:${squareSize/youNumber}px;block-size:${squareSize/youNumber}px;`);
      line.appendChild(lineFiller);
    };
    squareContent.appendChild(line);
  };
}

if(!divisor){
  divisor = 16;

  setGrid(divisor);
};

numberInput.addEventListener('click', () => {
  divisor=0;
  const inputNumber = prompt('Enter a number from 16 to 100 inclusive');
  
  if(divisor + +inputNumber === +inputNumber && +inputNumber >=16 && +inputNumber <=100){
    divisor = Math.floor(+inputNumber);
    const removeDiv = squareContent.querySelectorAll('.lineaggr');
    removeDiv.forEach((item)=>{
      squareContent.removeChild(item);
    });
    par.textContent = `Grid ${divisor} X ${divisor}`;

    setGrid(divisor);

  }else if(+inputNumber < 16 || +inputNumber > 100){
    par.textContent = 'The number is not in the required range! Enter again correctly';
  }else{
    par.textContent = 'The number must be entered in digits! Enter again correctly';
  };
  dataInput.appendChild(par);
});
