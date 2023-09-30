let counter = 0;
function collatz(n) {
  console.log('operation ' + ++counter);
  if (n === 1) return 1;
  if (n % 2 === 0) return collatz(n / 2);
  if (n % 2 !== 0) return collatz(n * 3 + 1);
}

console.log(collatz(1543534534543534));
