'use strict'

const Person = require('./person.js');

let id = 0;

class Student extends Person {
    constructor(name, address, birth_date, avg_grade) {
        super(name, address, birth_date);
        this.id = ++id;
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
