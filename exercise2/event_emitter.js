'use strict'

const EventEmitter = require('events');

let events = function() {
    let eventEmitter = new EventEmitter();

    let startEE = () => {
        let data = 'EE Process 1 OK.\n';
        eventEmitter.emit('callProcess1', data)
    };

    let process1EE = (data) => {
        data += 'EE Process 2 OK.\n';
        eventEmitter.emit('callProcess2', data);
    };

    let process2EE = (data) => {
        data += 'EE Process 3 OK.\n';
        eventEmitter.emit('callLastProcess', data);
    };

    let lastProcessEE = (data) => {
        console.log(data + 'The event-listeners are finished successfully.');
    };

    eventEmitter.on('callProcess1', process1EE);
    eventEmitter.on('callProcess2', process2EE);
    eventEmitter.on('callLastProcess', lastProcessEE);

    startEE();
};

module.exports = events;
