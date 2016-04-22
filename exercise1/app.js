'use strict';

// Times method exercise
String.prototype.times = function(times) {
  return this.repeat(times);
};

console.log('*'.times(10));

// Models exercise
const Student = require('./models/student'),
      Teacher = require('./models/teacher'),
      Course  = require('./models/course');

let pepe = new Student('Pepe', 'Irala 3655', '12/12/1966', 8.5),
    carla= new Student('Carla', 'J.B Justo 398', '04/03/1992', 8.5),
    laura = new Student('Laura', 'Rivadavia 987', '10/05/1987', 8.5),
    jirafales = new Teacher('Jirafales', 'Bosch 384', '09/05/1943');

console.log(pepe.getName());
console.log(jirafales.getName());

let worstCourse = new Course('The Worst', 3);

worstCourse.addStudent(pepe, carla, laura);
