import { mapString, isSubsequence, longestWord } from 'subsequence.functions';
import { dictionary, stringSequence } from 'subsequence.words';
function longestMatch(string, dictionary, ___) {
  let subQ = [
    ___
  ];
  let map = mapString(string, ___);
  for (var element of dictionary) {
    if (isSubsequence(element, map, ___)) {
      subQ.push(element);
    }
  }
  return longestWord(subQ, ___);
};
console.log(stringSequence);
console.log(dictionary);
console.log(longestMatch(stringSequence, dictionary));