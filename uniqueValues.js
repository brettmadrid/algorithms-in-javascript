/*
  Given a sorted array, provide a count of all unique values
*/

function uniqueValues(arr) {
  let myObj = {};

  for (let num of arr) {
    myObj[num] = (myObj[num] || 0) + 1;
    console.log(myObj);
  }

  return Object.keys(myObj).length;
}

console.log(uniqueValues([1, 1, 1, 2, 2, 3, 5, 5, 6]));
