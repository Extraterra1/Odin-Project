const sumAll = function (start, end) {
  if (typeof start != "number" || typeof end != "number") return "ERROR";
  if (start < 0 || end < 0) return "ERROR";
  if (start > end) end = start;

  //   Triangular Numbers Equation. Kind of a shortcut, should probably be done with a loop
  return (end * (end + 1)) / 2;
};

// Do not edit below this line
module.exports = sumAll;
