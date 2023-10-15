function merge(left, right) {
  const output = [];
  let rightI = 0;
  let leftI = 0;

  while (leftI < left.length && rightI < right.length) {
    const leftEl = left[leftI];
    const rightEl = right[rightI];

    if (leftEl < rightEl) {
      output.push(leftEl);
      leftI++;
    } else {
      output.push(rightEl);
      rightI++;
    }
  }
  return [...output, ...left.slice(leftI), ...right.slice(rightI)];
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const left = arr.slice(0, Math.floor(arr.length / 2));
  const right = arr.slice(Math.floor(arr.length / 2));

  return merge(mergeSort(left), mergeSort(right));
}

const arr = [2, 5, 7, 3, 8, 1];

console.log(mergeSort(arr));
