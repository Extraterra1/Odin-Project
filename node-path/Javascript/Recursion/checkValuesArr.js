function all(arr, callback) {
  const conditions = arr.map((e) => callback(e));
  if (conditions.every((e) => e)) return true;
  return false;
}

function recursiveAll(arr, callback) {
  if (arr.length === 0) return true;

  if (callback(arr[0])) {
    arr.shift();
    return recursiveAll(arr, callback);
  }
  return false;
}

const res = recursiveAll([1, 2, 8], function (num) {
  return num < 7;
});

console.log(res);
