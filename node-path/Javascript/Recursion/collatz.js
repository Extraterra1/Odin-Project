let counter = 0;
function collatz(n) {
  if (n === 1) return counter;
  counter++;

  if (n % 2 === 0) return collatz(n / 2);
  if (n % 2 !== 0) return collatz(n * 3 + 1);
}

function collatzNoCounter(n) {
  if (n === 1) return 0;

  if (n % 2 === 0) return 1 + collatz(n / 2);
  if (n % 2 !== 0) return 1 + collatz(n * 3 + 1);
}

console.log(collatz(27));
