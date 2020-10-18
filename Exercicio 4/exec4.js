function somarMultiplos(x) { 
 let multiplosTres = 0;
 let multiplosCinco = 0;

 for(i = 0; i <= x; i++) {
    if(i % 3 === 0) {
      multiplosTres += i;
    }
    if(i % 5 === 0) {
      multiplosCinco += i;
    }
 }
 return multiplosTres + multiplosCinco
}
console.log(somarMultiplos(10));