function fib(n, arr = [0, 1]) {
  if (n <= 1) return 1;
  if (arr.length >= n) return arr;
  const newNumber = arr[arr.length - 1] + arr[arr.length - 2];
  arr.push(newNumber);
  return fib(n, arr);
}

console.log(fib(8));
