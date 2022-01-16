/*
  Given two strings, write a function to determine
  if the second string is an anagram of the first.
  An anagram is a word, phrase, or name formed by
  rearranging the letters of another, such as cinema,
  formed from iceman.
*/

function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let Obj1 = {};
  let Obj2 = {};

  // create key,value pair of each letter and occurrence
  for (let val of str1) {
    Obj1[val] = (Obj1[val] || 0) + 1;
  }

  for (let val of str2) {
    Obj2[val] = (Obj2[val] || 0) + 1;
  }

  for (let key in Obj1) {
    // first compare if both objects have same keys
    if (!(key in Obj2)) {
      return false;
    }
    // now compare if the values of the keys are the same
    if (Obj2[key] !== Obj1[key]) {
      return false;
    }
  }
  return true;
}

console.log(anagram('qwerty', 'qeywrt'));
