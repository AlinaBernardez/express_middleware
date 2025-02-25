const horaActual = (req, res, next) => {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    const time = `${hours}:${minutes}:${seconds}`;
    req.dateType = `Son las ${time}`;
    next();
};

module.exports = horaActual;