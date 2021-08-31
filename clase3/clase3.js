const personajes = [
    {
        id: 1,
        nombre: 'Homero',
        apellido: 'Simpson',
        edad: 35
    },
    {
        id: 2,
        nombre: 'Marge',
        apellido: 'Simpson',
        edad: 35
    },
    {
        id: 3,
        nombre: 'Bob',
        apellido: 'Esponja',
        edad: 20
        
    },
    {
        id: 4,
        nombre: 'Leo',
        apellido: 'Messi',
        edad: 33
    }
];

const getEdades = (personajes) => {
    // let acum = 0;
    // acum += personajes[i].edad;
    // for (let i = 0; i < personajes.length; i++) {
    // personajes.forEach(personaje => acum += personaje.edad);
    // }
    const edades = personajes.map(personaje => personaje.edad).reduce((empanda, edad) => empanda + edad);
    // map devuelve un array NUEVO con un elemento de un objeto
    // reduce me hace el acumulador
    console.log(edades);
}

const borrar = (personajes, id) => {
    const posicion = personajes.findIndex(personaje => personaje.id === id);
    console.log(posicion);
    personajes.splice(posicion, 1);
    // splice borra el objeto en la posicion diga y la cantida que yo diga
    console.log(personajes);
}
borrar(personajes, 2);
getEdades(personajes);

// const mayor30 = personajes.filter(personaje => personaje.edad > 30)
// console.log(mayor30);
// const personaje = personajes.find(personaje => personaje.id === 1);
// console.log(personaje);

// filter me devuelve un array de objetos de los objetos que cumplen la condicion
// find me devulve un objeto del primer objeto que cumple la condicion