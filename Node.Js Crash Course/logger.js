const myemiter = require('events');
const uuid = require('uuid');

class Logger extends myemiter {
    log(msg) {
        this.emit('MSG', { id: uuid.v4(), msg });
    }
}

module.exports = Logger;