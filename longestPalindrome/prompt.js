/**
 * Implement a function that finds the longest palindrome in a given string.
 * For example, in the string "My dad is a racecar athlete", the longest
 * palindrome is "a racecar a". Count whitespaces as valid characters. Other
 * palindromes in the above string include "dad", "ete", " dad " (including
 * whitespace on each side of dad).
 */

var longestPalindrome = function(string) {
    let longest = string.substring(0, 1)
    for(let i = 0; i < string.length; i++) {
      let temp = expand(string, i, i)
      if(temp.length > longest.length) {
        longest = temp
    }
      temp = expand(string, i, i + 1)
      if(temp.length > longest.length) {
        longest = temp
      }
    }
    return longest
  };
  
    const expand = (string, begin, end) => {
      while(begin >= 0 && end <= string.length - 1 && string[begin] === string[end]) {

        begin--
        end ++
      }
    return string.substring(begin + 1, end)
  }



const test = longestPalindrome("My dad is a racecar athlete");
console.log(test);