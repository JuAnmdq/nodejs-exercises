'use strict'

const Person = require('./person.js');

let id = 0;

class Teacher extends Person {
    static setId(_id) {
        id = _id;
    }

    constructor(name, address, birth_date) {
        super(name, address, birth_date);
        this.id = ++id;
    }

    teachCourse(course) {
        course.setTeacher(this);
    }

    stopTeachingCourse() {

    }

    gradeStudent(student, course, grade) {

    }
}

module.exports = Teacher;
