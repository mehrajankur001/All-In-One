const moment = require('moment');

const logger = (req, res, next) => {
    const url = `${req.protocol}://${req.get('host')}${req.originalUrl}:${moment().format()}`;
    console.log(url);
    var a = 5;
    next();
}

module.exports = logger;