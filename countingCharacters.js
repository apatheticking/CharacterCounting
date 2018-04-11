var str = process.argv.slice(2);
var input = str.join("");


function countLetters (sentence){
  var letterCount = {};

  for(letter of sentence){
    if(!letterCount[letter]){
      letterCount[letter] = 1;
    } else {
      letterCount[letter] = letterCount[letter] + 1;
    }
  }
  return letterCount
}

console.log(countLetters(input));

