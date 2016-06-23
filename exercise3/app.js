'use strict'

// Times method exercise
String.prototype.times = function(times) {
    return this.repeat(times);
};

console.log('*'.times(10));

// OOP
let menu = require('./menu'),
    dao  = require('./dao');

dao.fetch().then((data) => {
    console.log(data);
    debugger;
    let courseList  = require('./course_list');
    console.log(courseList);
    menu();
}, (err) => {
    console.log(err);
});
