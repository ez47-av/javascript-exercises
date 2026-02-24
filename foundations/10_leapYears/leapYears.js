// Leap years are years divisible by four
// Years divisible by 100 are not leap years unless they are divisible by 400
// If the given input is:
//    divisible by four, 
//      AND not divisible by 100 BUT divisible by 400


const leapYears = function(year) {
  if (year % 4 === 0 && (!(year % 100 === 0) || year % 400 === 0)) {
    return true;
  }

  return false;
};

// Do not edit below this line
module.exports = leapYears;
