function factorial(n) {
  if (n === 1) return n;
  return n * factorial(n - 1);
}

const val = factorial(4);
console.log(val);
