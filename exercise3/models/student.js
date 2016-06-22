'use strict'

const Person = require('./person.js');

let id = 0;

class Student extends Person {
    constructor(name, address, birth_date, avg_grade) {
        super(name, address, birth_date);
        this.id = ++id;
        this.avg_grade = avg_grade;
    }

    enrollToCourse(course) {
        if (this.avg_grade >= course.minimum_avg_grade) {
            course.addStudent(this);
        } else {
            console.log('The average of the student is not enough to enroll to ' + course.name);
        }
    }

    leaveCourse() {

    }

    setCourseGrade() {

    }
}

module.exports = Student;
