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
        let student = this.students.find((student) => { return student.id === id }),
            index = this.students.indexOf(student);

        this.students.splice(index, 1);
    }

    setId(_id) {
        id = _id;
    }
}

module.exports = Course;
