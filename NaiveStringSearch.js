// finds the number of occurrences of a string in an input string

// pseudocode
// 1. Loop over the longer string
// 2. Loop over the shorter string (the one searched for)
// 3. If the characters don't match, break out of the shorter string
// 4. If the characters do match, keep going
// 5. If you complete the inner loop increment a match counter variable
// 6. Finally, return the count once the longer string loop is completed

function naiveSearch(longerString, searchString) {
  let result = 0;

  for (let i = 0; i < longerString.length; i++) {
    for (let j = 0; j < searchString.length; j++) {
      if (longerString[i + j] != searchString[j]) {
        break;
      }
      if (j === searchString.length - 1) {
        result++;
      }
    }
  }
  return result;
}

console.log(naiveSearch("cowodofdcow fadocow", "cow"));
