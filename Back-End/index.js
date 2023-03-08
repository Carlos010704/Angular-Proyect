'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const port = 3900;
 
// mongoose.set('useFindAndModify', true);
mongoose.set('strictQuery', true);
mongoose.Promise = global.Promise;


mongoose.connect('mongodb://127.0.0.1:27017/api_rest_blog', { useNewUrlParser: true })
    .then( () => {
        console.log('La conexion a la base se realizo correctamente!!');

        //Crear servidor y escuchar peticiones
        app.listen(port, () => {
            console.log('Servidor corriendo en http://127.0.0.1:'+port);
        })

    })
