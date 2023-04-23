/*
  Write a function called sumZero which accepts a sorted 
  array of integers. The function should find the first pair
  where the sum is 0.  Return an array of both the integers
  that sum to 0.  Return UNDEFINED otherwise.
*/

function sumZero2(arr) {
  if (arr.length < 2) return undefined;

  let pointer1 = 0;
  let pointer2 = arr.length - 1;

  while (pointer1 < pointer2) {
    let pairCheck = arr[pointer1] + arr[pointer2]
    
    if (pairCheck === 0) return [arr[pointer1], arr[pointer2]];
    if (pairCheck > 0) {
      pointer2--;
    } else {
      pointer1++
    }
  }
  return undefined
}

console.log(sumZero2([-1,0,3,4,1,8,5]));
