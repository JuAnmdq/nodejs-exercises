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

  addStudent(...students) {
    for (let i = 0; i < this.students.length; i++) {
      this.students.push(student);
    }
  }

  removeStudent() {

  }
}

module.exports = Course;
