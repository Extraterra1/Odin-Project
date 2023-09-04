const palindromes = function (str) {
  str = str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .replaceAll(" ", "");
  return str === str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
