'use strict'

const readlineSync = require('readline-sync'),
      Teacher      = require('./models/teacher');

let teacherForm = function() {
  console.log('Teacher\'s Form');

  let name       = readlineSync.question('Introduce your name: '),
      address    = readlineSync.question('Introduce your address: '),
      birth_date = readlineSync.question('Introduce your birth date: ');

  let teacher = new Teacher(name, address, birth_date);

  console.log(`You registered a teacher:
               Name: ${teacher.name}
               Address: ${teacher.address}
               Birth date: ${teacher.birth_date}`);
};

module.exports = teacherForm;
