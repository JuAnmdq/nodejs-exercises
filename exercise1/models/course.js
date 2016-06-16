'use strict'

class Course {
    constructor(name, minimum_avg_grade) {
        this.name = name;
        this.students = [];
        this.minimum_avg_grade = minimum_avg_grade;
    }

    setTeacher(teacher) {
        this.teacher = teacher;
    }

    addStudent() {
        for (let i = 0; i < arguments.length; i++) {
            this.students.push(arguments[i]);
        }
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
