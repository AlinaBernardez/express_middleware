const express = require('express');
const app = express();
const horaActual = require('./middlewares/horaMiddleware.js');
const validarHora = require('./middlewares/validarHora.js')
const router = require('./routes/index.js')
const endroute = require('./routes/endroute.js')

app.use('/', horaActual, validarHora, router);
app.use('/', validarHora, endroute);


app.listen(3000, () => {
    console.log('Server listening');
});