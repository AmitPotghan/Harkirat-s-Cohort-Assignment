/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  let newstr = str.split(" ").join("").toLowerCase().replace(/[.,!@#$^&*(){?/><"'?}]/g,"");
  let revstr = "";//last one is for punctuation wala case

  for(let i=newstr.length-1;i>=0;i--){
    revstr += newstr.charAt(i);
  }
  
  return newstr === revstr;
}
console.log(isPalindrome('Able, was I ere I saw Elba!'))
module.exports = isPalindrome;
