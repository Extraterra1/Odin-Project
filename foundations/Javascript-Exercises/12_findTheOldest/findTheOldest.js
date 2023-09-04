const findTheOldest = function (arr) {
  const peopleSorted = arr.sort((a, b) => {
    if (!a.yearOfDeath) a.yearOfDeath = new Date().getFullYear();
    if (!b.yearOfDeath) b.yearOfDeath = new Date().getFullYear();
    console.log(a, b);
    return b.yearOfDeath - b.yearOfBirth - (a.yearOfDeath - a.yearOfBirth);
  });

  return peopleSorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
