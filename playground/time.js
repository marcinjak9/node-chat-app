var moment = require('moment');

// var date = new Date();
// console.log(date.getMonth())

// var date = moment();
// date.add(1, 'years').subtract(12, 'months')
// console.log(date.format('MMM Do, YYYY'));
var createdAt = 3925708
var date = moment(createdAt);

console.log(date.format('h:mm a'));