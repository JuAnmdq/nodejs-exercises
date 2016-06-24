'use strict'

let teacherList = require('./teacher_list'),
    courseList  = require('./course_list');

let teachMenu = function(rl) {
    let teacherMenu = 'Teachers:\n';

    teacherList.forEach((teacher) => {
        teacherMenu += `(${teacher.id}) ${teacher.name}\n`;
    });

    console.log(teacherMenu);

    let courseMenu = 'Courses:\n';

    courseList.forEach((course) => {
        courseMenu += `(${course.id}) ${course.name}\n`;
    });

    console.log(courseMenu);

    let teacherId = '',
        courseId = '';

    if (teacherList.length > 0) {
        rl.question('Pick a teacher (Id): ', (answer) => {
            teacherId = parseInt(answer);

            rl.question('Pick a course (Id): ', (answer) => {
                courseId = parseInt(answer);

                if (!teacherExists(teacherId)) {
                    console.log('\nThe teacher doesn\'t exists.');
                    return rl.close();
                }

                if (!courseExists(courseId)) {
                    console.log('\nThe course doesn\'t exists.');
                    return rl.close();
                }

                setTeacherToCourse(teacherId, courseId);
                rl.close();
            });
        });
    } else {
        console.log('You haven\'t registered any teachers.');
        rl.close();
    }
};

let teacherExists = (teacherId) => {
    return teacherList.some((teacher) => { return teacher.id === teacherId; });
};

let courseExists = (courseId) => {
    return courseList.some((course) => { return course.id === courseId; });
};

let setTeacherToCourse = (teacherId, courseId) => {
    let teacher = teacherList.find((teacher) => { return teacher.id === teacherId; }),
        course = courseList.find((course) => { return course.id === courseId });

    teacher.teachCourse(course);
};

module.exports = teachMenu;
