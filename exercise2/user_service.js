'use strict'

const fs = require('fs');

let users = [];

let isUserRegistered = (username) => {
    return users.some((user) => {
        return user.name === username;
    });
};

let findByName = (username) => {
    return users.find((user) => {
        return user.name === username;
    });
};

function UserService() {
    return {
        create: (user) => {
            return new Promise((resolve, reject) => {
                if (!isUserRegistered(user.name)) {
                    users.push(user);
                    // I get the index because I pass the collection for write in users.json, and if its fail I delete the object in array
                    let index = users.indexOf(user);

                    fs.writeFile('users.json', JSON.stringify(users, null, 2), (err) => {
                        if (err) {
                            users.splice(index, 1);
                            reject(err.message);
                        }

                        resolve('You have save a new user successfully');
                    });
                } else {
                    reject('The user is already in the Database');
                }
            });
        },
        retrieve: () => {
            return new Promise((resolve, reject) => {
                fs.readFile('users.json', (err, data) => {
                    if (err) {
                        reject(err.message);
                    }

                    users = JSON.parse(data);
                    resolve(users);
                });
            });
        },
        retrieveByName: (username) => {
            return new Promise((resolve, reject) => {
                if (isUserRegistered(username)) {
                    let user = findByName(username);
                    resolve(user);
                } else {
                    reject('The user doesn\'t exists')
                }
            });
        },
        update: (newUser) => {
            return new Promise((resolve, reject) => {
                if (isUserRegistered(newUser.name)) {
                    let oldUser = findByName(newUser.name),
                        index = users.indexOf(oldUser);

                    users[index] = newUser;

                    fs.writeFile('users.json', JSON.stringify(users, null, 2), (err) => {
                        if (err) {
                            users[index] = oldUser;
                            reject(err.message);
                        }

                        resolve('You have update the user successfully');
                    });
                } else {
                    reject('The user doesn\'t exists')
                }
            });
        },
        delete: (username) => {
            return new Promise((resolve, reject) => {
                if (isUserRegistered(username)) {
                    let user = findByName(username),
                        index = users.indexOf(user);

                    users.splice(index, 1);

                    fs.writeFile('users.json', JSON.stringify(users, null, 2), (err) => {
                        if (err) {
                            users.push(user);
                            reject(err.message);
                        }

                        resolve('You have delete the user successfully');
                    });
                } else {
                    reject('The user doesn\'t exists')
                }
            });
        }
    };
};

module.exports = UserService();
