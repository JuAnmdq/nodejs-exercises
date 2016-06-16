'use strict'

let studentList = require('./studentList'),
    teacherList = require('./studentList');

let enrollMenu = function() {
    console.log('Students:');

    for (let i = 0; i < studentList.length; i++) {
      let student = studentList[i];
      console.log(`(${student.id}) ${student.name}\n`);
    }

    console.log(`Courses:
                 (2132): Maths
                 (2342): History
                 (2656): Chemestry`);
};

module.exports = enrollMenu;
