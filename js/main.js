 
const allContent = document.querySelector('.allContent');
let divQty;

if(allContent.offsetHeight < allContent.offsetWidth){
  divQty = Math.floor(allContent.offsetHeight / 16);
}else{
  divQty = Math.floor(allContent.offsetWidth / 16);
}

allContent.style.inlineSize = `${divQty * 16}px`;
allContent.style.blockSize = `${divQty * 16}px`;

for (let index = 0; index < 256; index++) {
  const divFiller = document.createElement('div');
  divFiller.setAttribute('class', 'aggregator');
  divFiller.setAttribute('style', `inline-size:${divQty}px;block-size:${divQty}px;flex:0 0 ${divQty}px;`);
  allContent.appendChild(divFiller);
}
