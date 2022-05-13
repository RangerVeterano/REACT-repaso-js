//Esto es que es un objeto
const personas = {
    nombre: 'Ignacio',
    apellido: 'Bohigues',
    edad: 45,
    direccion: {
        ciudad: 'Almudaina',
        zip: '03827',
        lat: 12.3322332,
        lng: 14.2332231
    }
};

//console.log({personas}); // == {personas:personas} 1ºpersona es el indice el 2º es el objeto
console.table(personas);

//Haciendo esto estamos copiando la referencia, no los valores
//Quiere decir que si cambiamos a persona2 personas tambien va a cambiar
// const persona2 = personas;

//Si queremos hacer un clon lo mejor es crear un objeto vacio,
//empleamos el operador spread "..."
const personas2 = { ...personas };



console.log(personas); //Aqui personas su nombre ya no es Ignacio sino que es Jorge

