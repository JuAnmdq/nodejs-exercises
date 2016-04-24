'use strict';

const readlineSync = require('readline-sync'),
      Student      = require('./models/student'),
      studentList  = require('./lists').students;

let studentForm = function() {
  console.log('Student\'s Form');

  let name       = readlineSync.question('Introduce your name: '),
      address    = readlineSync.question('Introduce your address: '),
      birth_date = readlineSync.question('Introduce your birth date: '),
      avg_grade  = readlineSync.question('Introduce your average: ');

  let student = new Student(name, address, birth_date, avg_grade);

  console.log(`You registered the Student:
               Name: ${student.name}
               Address: ${student.address}
               Birth date: ${student.birth_date}
               Average: ${student.avg_grade}`);

  studentList.push(student);
};

module.exports = studentForm;
