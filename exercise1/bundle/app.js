'use strict';

// Times method exercise

var _person = require('./models/person.js');

var _person2 = _interopRequireDefault(_person);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

String.prototype.times = function (times) {
  return this.repeat(times);
};

console.log('*'.times(10));

// ES6 modules exercise

//const Person = require('./models/person');

var pepe = new _person2.default('Pepe', 'Irala 3655', '12/12/1966');

console.log(pepe.getName());
console.log(pepe.getAge());
