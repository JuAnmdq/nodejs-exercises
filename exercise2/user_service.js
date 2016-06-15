'use strict'

const fs = require('fs');

let users = [];

var isUserRegistered = function(username) {
    return users.some((user) => {
        return user.name === username;
    });
};

function UserService() {
    return {
        create: function(user) {
            fs.readFile('users.json', function(err, data) {
                /*
                if (err) {
                    return console.error(err);
                }

                users = JSON.parse(data);*/

                this.retrieve().then(function(data) {
                    debugger;
                    users = data;

                    if (!isUserRegistered(user.name)) {
                        users.push(user);

                        fs.writeFile('users.json', JSON.stringify(users, null, 2), (err) => {
                            if (err) {
                                return console.error(err);
                            }

                            console.log('You saved a new user successfully');
                            users = [];
                        });
                    } else {
                        // I have to replace it for reject
                        console.error('The user is already in the Database');
                    }
                }, function(err) {
                    console.error(err);
                });
            });
        },
        retrieve: function() {
            return new Promise(function(resolve, reject) {
                fs.readFile('users.json', function(err, data) {
                    if (err) {
                        reject(err);
                    }

                    users = JSON.parse(data);
                    resolve(users);
                });
            });
        }
    };
};

module.exports = UserService();
/*
var create = function() {
    return new Promise(function(resolve, reject) {


    });
};

var retrieveByName = function() {


    return new Promise(function(resolve, reject) {


    });
};

var update = function() {


    return new Promise(function(resolve, reject) {


    });
};

var delete = function() {


    return new Promise(function(resolve, reject) {


    });
};*/
