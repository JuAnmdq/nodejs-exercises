'use strict'

const Teacher = require('./models/teacher');

let teacherList = require('./teacher_list');

let name = '',
    address = '',
    birth_date = '';

let teacherForm = function(rl) {
    console.log('Teacher\'s Form');

    rl.question('Introduce your name: ', (answer) => {
        name = answer;

        rl.question('Introduce your address: ', (answer) => {
            address = answer;

            rl.question('Introduce your birth date: ', (answer) => {
                birth_date = answer;

                let teacher = new Teacher(name, address, birth_date);

                console.log(`\nYou registered the Teacher:
                Id: ${teacher.id}
                Name: ${teacher.name}
                Address: ${teacher.address}
                Birth date: ${teacher.birth_date}`);

                teacherList.push(teacher);
                rl.close();
            });
        });
    });
};

module.exports = teacherForm;
