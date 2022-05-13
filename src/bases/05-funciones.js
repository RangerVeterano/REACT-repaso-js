
// function saludar(nombre) {
//     return `Hola ${nombre}`;
// }
// === Esto es para evitar modificar lo que hace la funcion
// const saludar = function (nombre) {
//     return `Hola ${nombre}`;
// };
// === Esto de abajo es una funcion de flecha
// const saludar = (nombre) => {
//     return `Hola ${nombre}`;
// };
// === Para en el caso de que la funcion solo haga un return
const saludar = (nombre) => `Hola ${nombre}`;
const saludar2 = () => `Hola Mundo`;

console.log(saludar('Ignacio'));
console.log(saludar2());

// const getUser = () => {
//     return {
//         uid: '6969',
//         username: 'RangerVeterano'
//     };
// };
//Si omitimos el return js se va a volver loco porque no sabe que devolver, pero si
//ponemos lo que queremos devolver entre parenteis lo pilla bien
//Con la forma de abajo hemos omitido el return y seguimos devolviendo el objeto completo
const getUser = () => (
    {
        uid: '6969',
        username: 'RangerVeterano'
    });

const user = getUser();
console.log(user);

// function getUsuarioActivo(nombre) {
//     return {
//         uid: '12345456',
//         username: nombre
//     };
// }

const getUsuarioActivo = (nombre) => ({ uid: 'ABC1234', username: nombre });

const usuarioActivo = getUsuarioActivo('Ignacio');

console.log(usuarioActivo);