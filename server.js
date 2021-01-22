const express = require('express')
const app = express()


const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 8080;

hbs.registerPartials(__dirname + '/views/partials', function(err) {});

//express hbs
app.set('view engine', 'hbs');


//middleware es un codigo//callback que se ejecuta da igual la url que pongamos
//dogma de fé   AQUI DEFINIMOS UNA CARPETA PUBLICA SOBRE LA QUE PONDREMOS LOS HTML O PHP
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    //esto lo cambiamos en el video 68 con los handlebars
    /*let salida = {
        nombre: "mike",
        edad: 40,
        url: req.url

    }
    res.send(salida);*/

    //como segundo parametro mandamos objeto con los datos de las variables para la vista

    res.render('home', {
        nombre: 'Miguel',

    });


});

app.get('/about', function(req, res) {
    //esto lo cambiamos en el video 68 con los handlebars
    /*let salida = {
        nombre: "mike",
        edad: 40,
        url: req.url

    }
    res.send(salida);*/

    //como segundo parametro mandamos objeto con los datos de las variables para la vista

    res.render('about', {

        //usamos helper year: new Date().getFullYear()
    });



});

app.listen(8080, () => {
    //para confirmar que se levanto el server
    console.log(`escuchado peticiones en el puerto 8080 ${port}`);
});