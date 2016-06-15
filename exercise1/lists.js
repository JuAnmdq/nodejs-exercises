'use strict'

let students = [];

let list = function() {
  /*
  for (var i = 0; i < students.length; i++) {
    console.log(`(${student.id}) ${student.name}`);
  }*/

  return students;
}

module.exports = {
  students: students,
  list: students
};
