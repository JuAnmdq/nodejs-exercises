'use strict'

let callbacks = function() {
    let start = (cb) => {
        process1('CB Process 1 OK.\n', cb);
    };

    let process1 = (data, cb) => {
        data += 'CB Process 2 OK.\n';
        process2(data, cb);
    };

    let process2 = (data, cb) => {
        data += 'CB Process 3 OK.\n';
        lastProcess(data, cb);
    };

    let lastProcess = (data, cb) => {
        cb(data);
    };

    start((data) => {
        console.log(data + 'The callbacks are finished successfully.');
    });
};

module.exports = callbacks;
