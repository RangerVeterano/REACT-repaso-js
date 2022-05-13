//arreglos JS
//const arreglo = new Array(100); //solo para crear un arreglo con las posiciones deseadas

const arreglo = [1, 2, 3, 4];

// arreglo.push(1); //100 posiciones vacias + numero 1
// arreglo.push(2); 
// arreglo.push(3);  //No es recomendable porque se modifica el objeto
// arreglo.push(4);  //(depende del caso creo yo)

//con el operador spread mandamos todos los valores sueltos
let arreglo2 = [...arreglo, 5];

const arreglo3  = arreglo2.map(i => i*2)
arreglo3.push(6)

// arreglo2.push(5);

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3)