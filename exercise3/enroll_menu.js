'use strict'

let studentList = require('./student_list'),
    courseList  = require('./course_list');

let enrollMenu = function(rl) {
    let studentMenu = 'Students:\n';

    studentList.forEach((student) => {
        studentMenu += `(${student.id}) ${student.name}\n`;
    });

    console.log(studentMenu);

    let courseMenu = 'Courses:\n';

    courseList.forEach((course) => {
        courseMenu += `(${course.id}) ${course.name}\n`;
    });

    console.log(courseMenu);

    let studentId = '',
        courseId = '';

    if (studentList.length > 0) {
        rl.question('Pick a student (Id): ', (answer) => {
            studentId = parseInt(answer);

            rl.question('Pick a course (Id): ', (answer) => {
                courseId = parseInt(answer);

                if (!studentExists(studentId)) {
                    console.log('\nThe student doesn\'t exists.');
                    return rl.close();
                }

                if (!courseExists(courseId)) {
                    console.log('\nThe course doesn\'t exists.');
                    return rl.close();
                }

                enrollStudentToCourse(studentId, courseId);
                rl.close();
            });
        });
    } else {
        console.log('You haven\'t registered any students.');
        rl.close();
    }
};

let studentExists = (studentId) => {
    return studentList.some((student) => { return student.id === studentId; });
};

let courseExists = (courseId) => {
    return courseList.some((course) => { return course.id === courseId; });
};

let enrollStudentToCourse = (studentId, courseId) => {
    let student = studentList.find((student) => { return student.id === studentId; }),
        course = courseList.find((course) => { return course.id === courseId });

    student.enrollToCourse(course);
};

module.exports = enrollMenu;
