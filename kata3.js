

var monthword = ['null', 'January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var dayth = ['st', 'nd', 'rd', 'th'];

var talkingCalendar = function(date) {
  var year = Number(date.substr(0, 4));
  var month = Number(date.substr(5, 2));
  var day = Number(date.substr(8, 2));

  if (day === 1 || day === 21 || day === 31) {
    day = day + dayth[0] + ", ";
  }
  else if (day === 2 || day === 22) {
    day = day + dayth[1] + ", ";
  }
  else if (day === 3 || day === 23) {
    day = day + dayth[2] + ", ";
  }
  else {
    day = day + dayth[3] + ", ";
  }

  return (monthword[month] + " " + day + year);
}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

