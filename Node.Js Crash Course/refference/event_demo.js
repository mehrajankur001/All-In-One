const EventEmiter = require('events');

//create Class
class MyEmiter extends EventEmiter { }

//Init Object
const myEmiter = new MyEmiter();

//Event Listener
myEmiter.on('event', () => {
    console.log('Event Fired');
});

myEmiter.emit('event');
myEmiter.emit('event');
