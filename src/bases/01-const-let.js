//Variables y constantes

const nombre = "Ignacio"; //Variables que no van a cambiar nunca
const apellidos = "Bohigues";

let valorDado = 5; //Variables cuyo valor van a cambiar

console.log(nombre, apellidos, valorDado);

if (true) {
    const nombre = "Jorge";
    let valorDado = 6; //Esta variable solo existe en este ambito

    console.log(valorDado, nombre);
}
console.log(valorDado);