const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    if(res.locals.isTime) {
        res.send(`
        <h1>¡Hola!</h1><br><h3>${req.dateType}</h3><br>
        <button onclick="location.href='/endroute'" type="button">Entrar</button>
        `)
    }
    else {
        res.send(`
        <h1>¡Hola!</h1><br><h3>${req.dateType}</h3><br>
        <button disabled type="button">Entrar</button><br>
        <p>Aún no es la hora</p>
        `)
    }

})

module.exports = router