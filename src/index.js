const express = require('express'); // Pido la utilizacion de la libreria
const app = express(); // se inicio
const proveedoresRoutes = require('./routes/proveedoresRoutes');
const productosRoutes = require('./routes/productosRoutes');

// req, request -> obtenesmos informacion que nos mandaron
// res, response -> obtenemos una variable que nos permite responder osea debolver una respuesta
app.get('/',(req, res) => {
    res.send('Hola mundo');
});

//le digo que para cualquiera de las rutas utilize proveedoresRoutes
app.use('/proveedores', proveedoresRoutes);
app.use('/productos', productosRoutes)

// se realizara un colback
app.listen(4000,() => {
    console.log('el nombre del viento');
});