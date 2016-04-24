'use strict'
debugger;
let students = [];

let list = function() {
  for (var i = 0; i < students.length; i++) {
    console.log(`(${student.id}) ${student.name}`);
  }
}

module.exports = {
  students: students,
  list: list
};
