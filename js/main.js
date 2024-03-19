 
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

function colorPart(max){return Math.floor(Math.random() * (max + 1))}; 

let divisor;

function setGrid(youNumber) {
  for (let index = 0; index < youNumber; index++){
    const line = document.createElement('div');
    line.setAttribute('class', 'lineaggr');
    line.setAttribute('style', `block-size:${squareSize/youNumber}px;`);
    for (let index = 0; index < divisor; index++) {
      const lineFiller = document.createElement('div');
      lineFiller.setAttribute('class', 'aggregator');
      lineFiller.setAttribute('style', `inline-size:${squareSize/youNumber}px;block-size:${squareSize/youNumber}px;opacity:1;`);
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

  }else if(isNaN(divisor + +inputNumber)){
    par.textContent = 'The number must be entered in digits! Enter again correctly';
  }else if(inputNumber === null){
    par.textContent = '';
  }else{
    par.textContent = 'The number is not in the required range! Enter again correctly';
  };
  dataInput.appendChild(par);
});

squareContent.addEventListener('mouseover', (event) => {
  let target = event.target;
  target.style.backgroundColor = `rgb(${colorPart(255)} ${colorPart(255)} ${colorPart(255)})`;
  if(target.style.opacity && target.style.opacity > 0){
    target.style.opacity -= 0.1;
  };
});


