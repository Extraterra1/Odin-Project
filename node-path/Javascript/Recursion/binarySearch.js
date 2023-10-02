const binarySearch = (arr, val) => {
  if (arr.length === 0) return 'not found';

  const middle = Math.floor(arr.length / 2);
  const middleValue = arr[middle];
  if (middleValue === val) return `item found, value ${val}`;

  if (val < middleValue) {
    return binarySearch(arr.slice(0, middle), val);
  } else {
    return binarySearch(arr.slice(middle), val);
  }
};

const arr = [6, 7, 8, 9, 10, 11, 14, 15, 17, 19, 22, 23, 25, 28, 30];

console.log(binarySearch(arr, 6));
