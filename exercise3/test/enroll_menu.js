'use strict'

const should = require('should');

let studentList = [
    {
        id: 1,
        name: 'John Doe',
        address: 'Delepi 700',
        birth_date: '10/02/1955',
        friends: [],
        avg_grade: 9
    },
    {
        id: 2,
        name: 'Walter Doe',
        address: 'Urqui 1880',
        birth_date: '17/09/1950',
        friends: [],
        avg_grade: 6
    },
    {
        id: 3,
        name: 'Diana Doe',
        address: 'San Francisco 260',
        birth_date: '06/11/1973',
        friends: [],
        avg_grade: 7
    }
];

let courseList = [
    {
        id: 1,
        name: 'Maths',
        students: [],
        teacher: {},
        minimum_avg_grade: 7
    },
    {
        id: 2,
        name: 'Chemestry',
        students: [],
        teacher: {},
        minimum_avg_grade: 9
    },
    {
        id: 3,
        name: 'JavaScript',
        students: [],
        teacher: {},
        minimum_avg_grade: 8
    }
];

let studentExists = (studentId) => {
    return studentList.some((student) => { return student.id === studentId; });
};

let courseExists = (courseId) => {
    return courseList.some((course) => { return course.id === courseId; });
};

describe('Student', () => {
    describe('#studentExists()', () => {
        it('should exists in the student list', () => {
            studentExists(2).should.be.exactly(true);
        });
    });
});

describe('Course', () => {
    describe('#courseExists()', () => {
        it('should exists in the course list', () => {
            courseExists(1).should.be.exactly(true);
        });
    });
});
