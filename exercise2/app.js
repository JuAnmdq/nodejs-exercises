'use strict'

// 1. Solved introducing let scope variable in the iteration
for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

// 2.
let callbacks = require('./callbacks');
callbacks();

// 3.
let events = require('./event_emitter')
events();

// 4.
let user = {
    name: 'Pedro',
    lastname: 'Rodriguez',
    age: 25,
    dob: '02/08/2001'
};

const UserService = require('./user_service');

//UserService.create(user);

UserService.retrieve().then((data) => { console.log(data); },
                            (err)  => { console.error(err);});
