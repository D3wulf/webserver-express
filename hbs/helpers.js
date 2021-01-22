let hbs = require('hbs');


//helpers
hbs.registerHelper('getYear', () => {

    return new Date().getFullYear();
});

hbs.registerHelper('mays', (texto) => {

    let palabras = texto.split(' ');

    //idx = index
    palabras.forEach((palabra, idx) => {

        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
    });

    return palabras.join(' ');
})