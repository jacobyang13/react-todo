var moment = require('moment');

console.log(moment().format());


var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1498232354;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMMM Do, YYYY @ h:mm A'))
