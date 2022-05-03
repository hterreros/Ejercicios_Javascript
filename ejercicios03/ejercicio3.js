console.log('Hola desde el ejercicio03')
//Ejemplo de switch

let diaSemana=6;
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
    (diaSemana === 6)? console.log('Es Sabado') :console.log('Es Domingo')
    // if (diaSemana === 6){
    //     console.log('Es Sabado');
    // } else {
    //     console.log('Es Domingo');
    // }
    console.log('Es Sabado o Domingo - dia de descanso');
break;
default:
    console.log('Dia de la Semana inválido');
break;
}