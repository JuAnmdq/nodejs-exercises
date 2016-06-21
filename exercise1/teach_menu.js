'use strict'

let teacherList = require('./teacher_list'),
    courseList  = require('./course_list');

let teachMenu = function(rl) {
    let teacherMenu = 'Teachers:\n';

    for (let i = 0; i < teacherList.length; i++) {
      teacherMenu += `(${teacherList[i].id}) ${teacherList[i].name}\n`;
    }

    console.log(teacherMenu);

    let courseMenu = 'Courses:\n';

    for (let i = 0; i < courseList.length; i++) {
        courseMenu += `(${courseList[i].id}): ${courseList[i].name}\n`;
    }

    console.log(courseMenu);

    let teacherId = '',
        courseId = '';

    if (teacherList.length > 0) {
        rl.question('Pick a teacher (Id): ', (answer) => {
            teacherId = answer;

            rl.question('Pick a course (Id): ', (answer) => {
                courseId = answer;
                console.log(`TeacherId: ${teacherId}, CourseId: ${courseId}`);
                rl.close();
            });
        });
    } else {
        console.log('You haven\'t registered any teachers.');
        rl.close();
    }
};

module.exports = teachMenu;
