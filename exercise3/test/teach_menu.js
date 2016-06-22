'use strict'

const should = require('should');

let teacherList = [
    {
        id: 1,
        name: 'John Doe',
        address: 'Delepi 700',
        birth_date: '10/02/1955',
        friends: []
    },
    {
        id: 2,
        name: 'Walter Doe',
        address: 'Urqui 1880',
        birth_date: '17/09/1950',
        friends: []
    },
    {
        id: 3,
        name: 'Diana Doe',
        address: 'San Francisco 260',
        birth_date: '06/11/1973',
        friends: []
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

let teacherExists = (teacherId) => {
    return teacherList.some((teacher) => { return teacher.id === teacherId; });
};

let courseExists = (courseId) => {
    return courseList.some((course) => { return course.id === courseId; });
};

describe('Teacher', () => {
    describe('#teacherExists()', () => {
        it('should exists in the teacher list', () => {
            teacherExists(2).should.be.exactly(true);
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
