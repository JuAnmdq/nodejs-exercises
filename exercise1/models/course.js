'use strict'

let id = 0;

class Course {
    constructor(name, minimum_avg_grade) {
        this.id = ++id;
        this.name = name;
        this.students = [];
        this.teacher = {};
        this.minimum_avg_grade = minimum_avg_grade;
    }

    setTeacher(teacher) {
        this.teacher = teacher;
    }

    addStudent(student) {
        this.students.push(student);
    }

    removeStudent(id) {
        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].id === id) {
                this.students.splice(i, 1);
            }
        }
    }
}

module.exports = Course;
