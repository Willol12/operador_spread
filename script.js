//OPERADOR SPREAD
const primeiro =[1,2,3];
const segundo =[4,7,11];
const terceiro =[1,2,3,'%',4,5,'wil',6,9+5,9/3,5*7]
//const combinado =primeiro.concat(segundo);

//Combinar
const combinado=[5,...primeiro, 'a',...segundo,'b'];
console.log(combinado)

//const cortado =combinado.slice();

//clonar
const clonado = [...combinado];
console.log(clonado);
//spread

const desafio = [...terceiro];
console.log(desafio)