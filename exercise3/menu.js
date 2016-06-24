'use strict'

const readline    = require('readline'),
      studentForm = require('./student_form'),
      teacherForm = require('./teacher_form'),
      enrollMenu  = require('./enroll_menu'),
      teachMenu   = require('./teach_menu'),
      dao         = require('./dao');

let rl = '';

let exit = () => {
    dao.save().then((data) => {
        console.log('See ya!');
        console.log(data);
        process.exit(0);
    }, (err) => {
        console.log(err);
    });
};

let error = () => {
    console.log('Wrong option. Try again');
    menu();
};

let options = {
    1: studentForm,
    2: teacherForm,
    3: enrollMenu,
    4: teachMenu,
    5: exit
};

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

    rl.on('line', (data) => {
        options[parseInt(data)] ? options[parseInt(data)](rl) : error();
    }).on('close', () => {
        menu();
    });
};

module.exports = menu;
