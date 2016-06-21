'use strict'

let Course = require('./models/course');
let courseList = [];

// (name, minimum_avg_grade)
let maths = new Course('Maths', 8),
    chemestry = new Course('Chemestry', 7),
    javascript = new Course('JavaScript', 6);

courseList.push(maths);
courseList.push(chemestry);
courseList.push(javascript);

module.exports = courseList;
