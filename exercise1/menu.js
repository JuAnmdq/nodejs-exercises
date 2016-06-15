'use strict'

const readline    = require('readline'),
      studentForm = require('./student_form'),
      teacherForm = require('./teacher_form'),
      list        = require('./lists').list;

const rl = readline.createInterface(process.stdin, process.stdout);

let menu = function() {
  console.log(`Choose an option:
    1- Create a new student
    2- Create a new teacher
    3- Enroll student to a course
    4- Get teacher to teach a course
    5- Exit`
  );

  rl.setPrompt('Pick one> ');
  rl.prompt();

  rl.on('line', (data) => {
    switch (parseInt(data)) {
      case 1:
        studentForm();
        this();
        break;
      case 2:
        teacherForm();
        menu();
        break;
      case 3:
        console.log('You picked the option 3');
        console.log(list);
        break;
      case 4:
        console.log('You picked the option 4');
        break;
      case 5:
        console.log('You picked the option 5');
        break;
      default:
        console.log('Wrong option.');
        rl.close();
    }
    rl.prompt();
  }).on('close', () => {
    console.log('Program ends.');
    process.exit(0);
  });
}

module.exports = menu;
