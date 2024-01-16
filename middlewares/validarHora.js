const validarHora = (req, res, next) => {
    const now = new Date()
    const hours = now.getHours()
    if(hours >= 12 | hours <= 23 ) {
        res.locals.isTime = true
        next()
    } else {
        res.locals.isTime = false
        res.redirect('/')
        next()
    }
}

module.exports = validarHora