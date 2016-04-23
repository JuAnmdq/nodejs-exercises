'use strict'
const Person = require('./person.js');

class Teacher extends Person {
  constructor(name, address, birth_date) {
    super(name, address, birth_date);
  }

  teachCourse() {

  }

  stopTeachingCourse() {

  }

  gradeStudent(student, course,  grade) {

  }
}

module.exports = Teacher;
