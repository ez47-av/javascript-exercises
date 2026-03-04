const palindromes = function (string) {
  // remove all the punctation first as palindrome don't consider punctuation or spaces, then lowercase
  string = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  console.log(string);
  let reverse = "";

  for (let i = 0 ; i < string.length; i++) {
    reverse = string[i] + reverse;
  }

  return string === reverse ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
