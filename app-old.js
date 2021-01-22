//este paket ya viene en node, no requiere instalacion
const http = require('http');
//creacion del servidor
//recibe request y los response
http.createServer((req, res) => {
        //
        res.writeHead(200, { 'content-type': 'application/json' });

        let salida = {
            nombre: "mike",
            edad: 40
        }
        res.write(JSON.stringify(salida));
        res.sendDate;
        res.end();

    })
    //el puerto de escucha
    .listen(8080);

console.log('escuchando el 8080');