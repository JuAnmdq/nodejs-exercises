'use strict'

// 1. Solved introducing let scope variable in the iteration
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// 2.
let start = (cb) => {
  process1('Process 1 OK.\n', cb);
};

let process1 = (data, cb) => {
  data += 'Process 2 OK.\n';
  process2(data, cb);
};

let process2 = (data, cb) => {
  data += 'Process 3 OK.\n';
  lastProcess(data, cb);
};

let lastProcess = (data, cb) => {
  cb(data);
};

start((data) => {
  console.log(data + 'The calls are finished successfully.');
});

// 3.
