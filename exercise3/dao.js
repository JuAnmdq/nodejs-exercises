'use strict'

const fs = require('fs');

let studentList = require('./student_list'),
    teacherList = require('./teacher_list'),
    courseList  = require('./course_list'),
    Student     = require('./models/student'),
    Teacher     = require('./models/teacher');

function dao() {
    return {
        save: () => {
            return new Promise((resolve, reject) => {
                fs.writeFile('data/courses.json', JSON.stringify(courseList, null, 2), (err) => {
                    if (err) {
                        reject(err.message);
                    }

                    resolve('You save the data successfully');
                });
            });
        },
        fetch: () => {
            return new Promise((resolve, reject) => {
                fs.readFile('data/courses.json', (err, data) => {
                    if (err) {
                        reject(err.message);
                    }

                    courseList = JSON.parse(data);

                    teacherList = courseList.filter((course) => {
                        return course.teacher.id;
                    }).map((course) => {
                        return course.teacher;
                    });

                    for (let i = 0; i < courseList.length; i++) {
                        for (let j = 0; j < courseList[i].students.length; j++) {
                            studentList.push(courseList[i].students[j]);
                        }
                    }

                    Student.setId(studentList.length);
                    Teacher.setId(teacherList.length);

                    resolve('Data was loaded OK...\n\n');
                });
            });
        }
    }
}

module.exports = dao();
