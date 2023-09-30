function sumTo(n) {
  if (n === 1) return n;
  return n + sumTo(n - 1);
}

function sumToLoop(n) {
  let count = n;
  for (let i = n; i > 0; i--) {
    count += i - 1;
  }
  return count;
}
const val = sumTo(100);
const valLoop = sumToLoop(100);

console.log(val);
console.log(valLoop);
