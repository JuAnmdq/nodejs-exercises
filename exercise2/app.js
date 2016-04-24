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
const fs = require('fs');

let user = {
  name: 'Pedro',
  lastname: 'Rodriguez',
  age: 25,
  dob: '02/08/2001'
};

let read = function(filePath) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, JSON.stringify(user, null, 2), (err, data) => {
      if (err) {
        reject(err);
      }

      resolve('success');
    });
  });
};

read('./users.txt').then((data) => {
  console.log('JSON saved stated: ' + data);
})
.catch((err) => {
  console.log(err);
  throw err;
});
