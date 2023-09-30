function SumSquares(arr) {
  if (arr.length === 0) return 0;
  let total = 0;
  const firstItem = arr.shift();

  if (Array.isArray(firstItem)) {
    total += SumSquares(firstItem);
  }
  if (typeof firstItem === 'number') total += firstItem ** 2;

  return total + SumSquares(arr);
}

const l = [10, [[10], 10], [10]];

console.log(SumSquares(l));
