'use strict';
// ES6 modules exercise

var _person = require('./../models/person');

// Times method exercise
String.prototype.times = function (times) {
  return this.repeat(times);
};

console.log('*'.times(10));

let pepe = new _person.Person('Pepe', 'Irala 3655', '12/12/1966');

console.log(pepe.getName());
console.log(pepe.getAge());
