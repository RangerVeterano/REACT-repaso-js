//Si en un archivo hacemos una exportacion por defecto no es necesario crear la constante
//para luego indicar que se va a exportar

//podemos indicar la exportacion con "default", sin especificar variable

const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

const owners = ['DC','Marver'];

// export const owners = ['DC','Marver'];

// //DE esta forma es la correcta cuando es por defecto
// export default heroes

//Esto es la misma forma de poder exportar las cosas
export {
    heroes as default //con esto indicamos que los hereoes son por defecto
    ,owners
}