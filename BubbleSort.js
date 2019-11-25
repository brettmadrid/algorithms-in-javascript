// larger values in the array bubble to the top
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

function BubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      swap(arr, i, i + 1);
    }
  }
  return arr;
}

console.log(BubbleSort([5, 2, 3, 1, 4]));
