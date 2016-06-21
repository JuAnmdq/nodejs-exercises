'use strict'

// Times method exercise
String.prototype.times = function(times) {
    return this.repeat(times);
};

console.log('*'.times(10));

// OOP
let menu = require('./menu');
menu();
