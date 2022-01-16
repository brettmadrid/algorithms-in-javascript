/*
  Write a function called "same", which accepts two arrays.
  The function should return true if every value in the first
  array has its corresponding value in the second array squared.
  The frequency of the values must be the same.
*/

// NAIVE APPROACH - O of n2
// function same1(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     let found = arr2.indexOf(arr1[i] ** 2);
//     if (found === -1) {
//       console.log(`false`);
//       return false;
//     }
//     // remove found value from arr2
//     arr2.splice(found, 1);
//   }
//   console.log(`true`);
//   return true;
// }

function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let freqCntr1 = {};
  let freqCntr2 = {};

  for (let val of arr1) {
    // create a new key,value pair
    // if exists, get its value and add one
    // otherwise, create new pair with val of 1
    freqCntr1[val] = (freqCntr1[val] || 0) + 1;
  }

  for (let val of arr2) {
    // do same with second array
    freqCntr2[val] = (freqCntr2[val] || 0) + 1;
  }

  // now compare the objects
  for (let key in freqCntr1) {
    if (!(key ** 2 in freqCntr2)) {
      return false;
    }
    // check for frequency of keys appearing
    if (freqCntr2[key ** 2] !== freqCntr1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same2([1, 2, 3, 1], [1, 4, 9, 1]));
