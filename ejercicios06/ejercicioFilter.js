console.log('Ejemplo Filter');
let arreglo=[50,80,70,72,86];

let arregloDos = arreglo.filter(
    function(value,index){
        return (value>50 || index===2);
    }
)
console.log(arreglo);
console.log('El arreglo Dos');
console.log(arregloDos);


let calificaciones=[70,80,80,90,60];
console.log('-------------------------------------------');
console.log('ejercicio guiado');
const result=function(calificaciones){


let promedio=0;
calificaciones.forEach(
    function(valor,index){
        promedio=promedio+valor;
    })
promedio=promedio/ calificaciones.length;   
if (promedio>70) {
console.log('aprobado: '+promedio);
} else{
    console.log('no aprobado: '+promedio);
}
}
result(calificaciones);