'use strict'

// Evitar funciones sincrónicas en nodejs
let studentList = require('./student_list'),
    teacherList = require('./teacher_list'),
    courseList  = require('./course_list');

let enrollMenu = function(rl) {
    let studentMenu = 'Students:\n';

    for (let i = 0; i < studentList.length; i++) {
      studentMenu += `(${studentList[i].id}) ${studentList[i].name}\n`;
    }

    console.log(studentMenu);

    let courseMenu = 'Courses:\n';

    for (let i = 0; i < courseList.length; i++) {
        courseMenu += `(${courseList[i].id}): ${courseList[i].name}\n`;
    }

    console.log(courseMenu);

    let studentId = '',
        courseId = '';

    if (studentList.length > 0) {
        rl.question('Pick a student (Id): ', (answer) => {
            studentId = answer;

            rl.question('Pick a course (Id): ', (answer) => {
                courseId = answer;
                console.log(`StudentId: ${studentId}, CourseId: ${courseId}`);
                rl.close();
            });
        });
    } else {
        console.log('You haven\'t registered any students.');
        rl.close();
    }
};

module.exports = enrollMenu;
