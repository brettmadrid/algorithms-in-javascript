8789iu7/*
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

  let strObj = {}

  // sort key value pairs from string1 into strMap
  for (const char of str1) {
    strObj[char] ? strObj[char]++ : strObj[char] = 1;
  }
  console.log(strObj)
  // Now find letters from str2 in strObj
  for(const char of str2) {
    if (!strObj[char]) return false;
    strObj[char]--
  }

  return true;
}

console.log(anagram('resistance', 'ancestries'));
