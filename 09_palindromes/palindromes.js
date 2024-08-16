const palindromes = function (string) {
  let alphanumerical = "abcdefghijklmnopqrstuvwxyz1234567890";

  let cleanString = string
    .toLowerCase()
    .split("")
    .filter((character) => alphanumerical.includes(character))
    .join("");

  let reversedString = cleanString.split("").reverse().join("");

  return cleanString == reversedString;
};

// Do not edit below this line
module.exports = palindromes;
