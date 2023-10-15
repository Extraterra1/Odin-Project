function fib(n) {
  let a = 1;
  let b = 1;
  let arr = [0, a, b];
  for (let i = 3; i < n; i++) {
    let c = a + b;
    a = b;
    b = c;
    arr.push(c);
  }
  return arr;
}

console.log(fib(8));
