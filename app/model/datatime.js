var dateFormat = require('dateformat');
var now = new Date();

dateFormat(now, "isoDateTime");
console.log(now)

var d = new Date();
d.setDate(d.getDate() - 1);
dateFormat(d, "isoDateTime");
console.log(d)

