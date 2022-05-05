console.log('------');
console.log('Manipulacion de Arreglos');
console.log('------');
let arreglo=[10,20,30];
console.log(arreglo);
arreglo.push(40);
arreglo.push(70);
arreglo.push(90);
console.log('------');
console.log(arreglo);
for (let ciclo=0;ciclo<arreglo.length;ciclo++){
    console.log('El valor es '+arreglo[ciclo]);
}

console.log('------');
arreglo.pop();
console.log(arreglo);
arreglo.unshift(90);
console.log(arreglo);
arreglo.shift();
console.log(arreglo);