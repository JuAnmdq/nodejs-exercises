'use strict'
const Person = require('./person.js');

class Student extends Person {
  constructor(name, address, birth_date, avg_grade) {
    super(name, address, birth_date);
    this.id++;
    this.avg_grade = avg_grade;
  }

  enrollToCourse() {

  }

  leaveCourse() {

  }

  setCourseGrade() {
    
  }
}

module.exports = Student;
