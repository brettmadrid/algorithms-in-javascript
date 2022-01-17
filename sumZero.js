/*
  Write a function called sumZero which accepts a sorted 
  array of integers. The function should find the first pair
  where the sum is 0.  Return an array of both the integers
  that sum to 0.  Return UNDEFINED otherwise.
*/

// NAIVE approach O of n2
function sumZero(arr) {
  if (arr.length < 2) return undefined;

  let i = 0;
  let j = 1;

  for (i; i < arr.length - 1; i++) {
    for (j; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
  return undefined;
}

function sumZero2(arr) {
  if (arr.length < 2) return undefined;

  let leftPtr = 0;
  let rightPtr = arr.length - 1;

  while (leftPtr < rightPtr) {
    let valSum = arr[leftPtr] + arr[rightPtr];
    if (valSum === 0) {
      return [arr[leftPtr], arr[rightPtr]];
    }
    if (valSum < 0) {
      leftPtr++;
    } else {
      rightPtr--;
    }
  }
  return undefined;
}

console.log(sumZero2([-1, 1, 3]));
