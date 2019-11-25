function numSort(num1, num2) {
  return num1 - num2;
}

function numSortReverse(num1, num2) {
  return num2 - num1;
}

function stringLengthSort(str1, str2) {
  return str1.length - str2.length;
}

console.log([4, 2, 8, 10, 9].sort(numSortReverse));
console.log(
  ["howdy", "Jennifer", "Neo", "fire", "guitar"].sort(stringLengthSort)
);
