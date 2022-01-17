/*
  Write a function called sumZero which accepts a sorted 
  array of integers. The function should find the first pair
  where the sum is 0.  Return an array of both the integers
  that sum to 0.  Return UNDEFINED otherwise.
*/

function sumZero(arr) {
  if (arr.length < 2) return undefined;

  let i = 0;
  let j = 1;
  let outArr = [];

  for (i; i < arr.length - 1; i++) {
    for (j; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        outArr.push(arr[i]);
        outArr.push(arr[j]);
        return outArr;
      }
    }
  }
  return undefined;
}

console.log(sumZero([1, -1, 2]));
