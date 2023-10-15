#RECURSION

## Fibonacci Sequence Generator

The `fib` function is a recursive JavaScript function that generates the Fibonacci sequence up to a specified term. The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.

### `fib(n, arr)`

This function takes two parameters:

- `n` (required): The term up to which you want to generate the Fibonacci sequence.
- `arr` (optional): An array used to store the generated Fibonacci sequence. It is pre-initialized with the first two numbers (0 and 1) of the sequence.

The function recursively calculates and populates the Fibonacci sequence in the `arr` array up to the `n`-th term.

#### Example:

```javascript
console.log(fib(8));
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21]
```

## Merge Sort

The Merge Sort algorithm is a highly efficient comparison-based sorting method that divides an array into smaller subarrays until each subarray contains only one element, and then combines these smaller subarrays to produce a sorted final array. It is a classic example of a divide-and-conquer algorithm.

### `merge(left, right)`

This function takes two arrays, `left` and `right`, and merges them into a single, sorted array. It employs a "two-pointer" approach, comparing elements from each input array and selecting the smallest element at each step. The merged result is returned as a new array.

- `left`: The left subarray to merge.
- `right`: The right subarray to merge.

### `mergeSort(arr)`

The `mergeSort` function recursively divides an array into two halves until each subarray has only one element, and then utilizes the `merge` function to merge and sort these subarrays. This process continues until the entire array is sorted.

- `arr`: The input array to be sorted.

#### Example:

```javascript
const arr = [2, 5, 7, 3, 8, 1];
const sortedArr = mergeSort(arr);
console.log(sortedArr); // Output: [1, 2, 3, 5, 7, 8]
```
