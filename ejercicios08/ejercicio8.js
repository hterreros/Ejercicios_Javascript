console.log('templates');

let firstName = 'Harold Terreros';
let age = 37;

console.log(`Mi nombre es: ${firstName} y mi edad es: ${age}`);

let disco = {
    nameDisc: 'Queen',
    date:  new Date('1985-02-20'),
    price:99.9,
    tracks: ['pista_1_Queen', 'pista_2_Queen', 'pista_3_Queen' ]
}
let discoRock = {
    nameDisc: 'Cerati',
    date:  new Date('1985-04-20'),
    price:99.9,
    tracks: ['pista_1_Cerati', 'pista_2_Cerati', 'pista_3_Cerati' ]
}
let discoSalsa = {
    nameDisc: 'Salsa',
    date:  new Date('1985-03-20'),
    price:99.9,
    tracks: ['pista_1_Salsa', 'pista_2_Salsa', 'pista_3_Salsa' ]
}
let Discos =[disco,discoRock,discoSalsa];

console.log('*************************************');
Discos.forEach(
    function(imprime){
   console.log(`El disco se llama: ${imprime.nameDisc} la fecha es: ${imprime.date} el precio es ${imprime.price}`);
})
console.log('*************************************');
//funcion flecha   Se usan {} luego de la flecha cuando hay mas de 2 acciones
Discos.forEach(
    (imprime) =>{
        console.log(`El disco se llama: ${imprime.nameDisc} la fecha es: ${imprime.date} el precio es ${imprime.price}`)
        imprime.tracks.forEach(
            (pista) => console.log(pista)
        )
    }
)
console.log('******DEsestructuracion*****************');
Discos.forEach(
    (imprime) =>{
        let { nameDisc,date,price,tracks}= imprime;
        console.log(`El disco se llama: ${nameDisc} la fecha es: ${date} el precio es ${price}`)
        tracks.forEach(
            (pista) => console.log(pista)
        )
    }
)
