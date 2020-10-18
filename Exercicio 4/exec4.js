function somarMultiplos(x) { 
 let soma = 0;

 for(i = 0; i < x; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
      soma += i;
    }
 }
 return soma
}
console.log(somarMultiplos(10));