// Long Questions

//Qn 1

var words = ['hello', 'what', 'is', 'up', 'dude']

 function lengths(words) {
   var wordsArr = [];
   for (var i=0; i < words.length; i++) {
   wordsArr.push(words[i].length);
   }
   return wordsArr;
 }

console.log(lengths(words));

//Qn 2
function transmogrifier (num1, num2, num3){
  var product = num1 * num2;
  return Math.pow(product, num3)
}

console.log(transmogrifier(5, 4, 3)); //Answer: 8000
console.log(transmogrifier(13, 12, 5)); //Answer: 92389579776
console.log(transmogrifier(42, 13, 7)); //Answer: 14466001271480793000

//Qn 3
var sentence="Let's see if we can write this in reverse."

function wordReverse (words){
  var wordssplit = words.split(" ");
  var x = '';
  for (var i= wordssplit.length - 1; i >= 0; i--)
    x = x + wordssplit[i] + " ";
    if (i= wordssplit.length - 1){
     return x
    }
}

console.log(wordReverse(sentence));

//Short Questions

//Qn 1

function maxOfTwoNumbers (num1 , num2) {
  var longerNum = num1
  if (num1 > num2){
    longerNum = num1
  }
  else {
    longerNum = num2
  }
  return longerNum
}

console.log(maxOfTwoNumbers(8,10));

//Qn 2
function maxOfThree (num1, num2, num3){
  var largestnum =num1
  if (num1 > (num2 && num3)){
    largestnum = num1;
  } else if (num2 > (num1 && num3)){
    largestnum = num2;
  } else {
    largestnum = num3;
  }
  return largestnum
}

console.log(maxOfThree(1,10,7));

//Qn 3
function isCharacterAVowel(string){
  var x = string.toLowerCase();
  var isaVowel = false;
  if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u" ){
    isaVowel = true;
  }
  else {
    isaVowel = false;
  }
  return isaVowel
}

console.log(isCharacterAVowel("a"));

//Qn 4
function sumArray (array){
  for(var i=0, sum= 0; i < array.length; i++)
    sum += array[i];
    return sum
}

console.log(sumArray([1,2,3,4]));

function multiplyArray (array){
  for(var i=0, sum=1; i < array.length; i++)
    sum *= array[i];
    return sum
}

console.log(multiplyArray([1,2,3,4]));

//Qn 5
function NoofArg(a,b,c,d,e,f){
  return arguments.length
}

console.log(NoofArg(1,2,3,4,5,6));

//Qn 6
function reverseString(str){
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}

console.log(reverseString("My Name is Amanda."));

//Qn 7
function findLongestWord (array){
  var splitArray = array.split(" ");
  var sortwords = splitArray.sort(function (a,b) {return b.length - a.length});
  return sortwords[0];
}

console.log(findLongestWord("Hello javascript is quite difficult"));
