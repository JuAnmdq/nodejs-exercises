'use strict'

const Student  = require('./models/student');

let studentList  = require('./student_list');

let name = '',
    address = '',
    birth_date = '',
    avg_grade = '';

let studentForm = function(rl) {
    console.log('Student\'s Form');

    rl.question('Introduce your name: ', (answer) => {
        name = answer;

        rl.question('Introduce your address: ', (answer) => {
            address = answer;

            rl.question('Introduce your birth date: ', (answer) => {
                birth_date = answer;

                rl.question('Introduce your average: ', (answer) => {
                    avg_grade = parseInt(answer);

                    let student = new Student(name, address, birth_date, avg_grade);

                    console.log(`\nYou registered the Student:
                    Id: ${student.id}
                    Name: ${student.name}
                    Address: ${student.address}
                    Birth date: ${student.birth_date}
                    Average: ${student.avg_grade}`);

                    studentList.push(student);
                    rl.close();
                });
            });
        });
    });
};

module.exports = studentForm;
