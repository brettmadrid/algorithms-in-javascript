function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  
  while (start <= end) {
    // check if array position is equal to value
    if (arr[mid] === val) return mid;

    // check if array position value is less than value
    // if so, array position value is too low
    // set start at one after current array position
    else if (arr[mid] < val) start = mid + 1;

    // if array position value is too high
    // reset end to 
    else end = mid - 1;
    mid = Math.floor((start + end) / 2);
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2));
