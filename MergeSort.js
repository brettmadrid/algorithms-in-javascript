// merges two sorted arrays into a single sorted array
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  // push any remaining elements onto end of results array
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  // push any remaining elements onto end of results array
  while (j < arr1.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

console.log(merge([1, 10, 50], [2, 14, 99, 100]));
