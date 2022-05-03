console.log('Hola desde el ejercicio03')
//Ejemplo de switch

let diaSemana=7
switch(diaSemana){
case 1:
    console.log('Lunes');
break;
case 2:
    console.log('Martes');
break;
case 3:
    console.log('Miercoles');
break;
case 4:
    console.log('Jueves');
break;
case 5:
    console.log('Viernes');
break;
case 6:
case 7:
    console.log('Es Sabado o Domingo - dia de descanso');
break;
default:
    console.log('Dia de la Semana inválido');
break;
}