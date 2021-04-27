const Person = require('./person');
const Logger = require('./logger');
const person = new Person('AnkuR KhaaN', 28);
const logger = new Logger();

person.intro();
logger.on('MSG', data => console.log(data));

logger.log('I love Camilla Belle');
