'use strict'

const Person = require('./person.js');

let id = 0;

class Teacher extends Person {
    constructor(name, address, birth_date) {
        super(name, address, birth_date);
        this.id = ++id;
    }

    teachCourse() {

    }

    stopTeachingCourse() {

    }

    gradeStudent(student, course, grade) {

    }
}

module.exports = Teacher;
