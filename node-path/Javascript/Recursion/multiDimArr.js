let count = 0;
function totalIntegers(arr) {
  arr.forEach((el, i) => {
    if (Array.isArray(el)) return totalIntegers(el);
    if (typeof el === 'number') {
      arr[i] = '';
      count++;
      return totalIntegers(arr);
    }
  });

  return count;
}

const seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7

console.log(seven);
