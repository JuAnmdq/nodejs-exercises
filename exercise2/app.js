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
const UserService = require('./user_service');

let username = 'Pedrito';

let user = {
    name: 'Pedro',
    lastname: 'Rodriguez',
    age: 25,
    dob: '02/08/2001'
};

let newUser = {
    name: 'Pedrito',
    lastname: 'Sanchez',
    age: 29,
    dob: '02/08/2001'
};

// This services gets all the data for first time
UserService.retrieve().then((data) => {
    console.log(data);
    main();
}, (err)  => {
    console.error(err);
});

var main = () => {
    UserService.create(user).then((data) => {
        console.log(data);
    }, (err) => {
        console.error(err);
    });

    UserService.retrieveByName(username).then((data) => {
        console.log(data);
    }, (err) => {
        console.error(err);
    });

    UserService.update(newUser).then((data) => {
        console.log(data);
    }, (err) => {
        console.error(err);
    });

    UserService.delete(username).then((data) => {
        console.log(data);
    }, (err) => {
        console.error(err);
    });
};
