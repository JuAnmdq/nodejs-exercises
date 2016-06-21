'use strict'

const readline    = require('readline'),
      studentForm = require('./student_form'),
      teacherForm = require('./teacher_form'),
      enrollMenu  = require('./enroll_menu'),
      teachMenu   = require('./teach_menu');

let rl = '';

let menu = function() {
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    console.log(`\nChoose an option:
    1- Create a new student
    2- Create a new teacher
    3- Enroll student to a course
    4- Get teacher to teach a course
    5- Exit`);

    rl.setPrompt('Pick one> ');
    rl.prompt();

    let name = '',
        address = '',
        birthDate = '',
        average = '';

    rl.on('line', (data) => {
        switch (parseInt(data)) {
            case 1:
                studentForm(rl);
                break;
            case 2:
                teacherForm(rl);
                break;
            case 3:
                enrollMenu(rl);
                break;
            case 4:
                teachMenu(rl);
                break;
            case 5:
                console.log('See ya!');
                process.exit(0);
                break;
            default:
                console.log('Wrong option. Try again');
                menu();
                break;
        }
        //rl.prompt();
    }).on('close', () => {
        menu();
    });
};

module.exports = menu;
