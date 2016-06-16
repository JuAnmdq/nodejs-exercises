'use strict'

const readlineSync = require('readline-sync'),
      Student      = require('./models/student');

let studentList  = require('./studentList');

let studentForm = function() {
    console.log('Student\'s Form');

    let name = readlineSync.question('Introduce your name: '),
        address = readlineSync.question('\nIntroduce your address: '),
        birth_date = readlineSync.question('\nIntroduce your birth date: '),
        avg_grade = readlineSync.question('\nIntroduce your average: ');

    let student = new Student(name, address, birth_date, avg_grade);

    console.log(`You registered the Student:
               Id: ${student.id}
               Name: ${student.name}
               Address: ${student.address}
               Birth date: ${student.birth_date}
               Average: ${student.avg_grade}`);

    studentList.push(student);
};

module.exports = studentForm;
