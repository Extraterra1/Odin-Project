function product(arr) {
  if (arr.length === 0) return 1;
  const currentNumber = arr[0];
  arr.shift();
  return currentNumber * product(arr);
}

console.log(product([1, 2, 3]));
