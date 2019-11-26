// larger values in the array bubble to the top
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

function BubbleSort(arr) {
  let no_swaps;
  for (let i = arr.length; i > 0; i--) {
    no_swaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        no_swaps = false;
      }
    }
    if (no_swaps) break;
  }
  return arr;
}

console.log(BubbleSort([37, 45, 29, 8, 12, 88, -3]));
