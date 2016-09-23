// Long Questions

//Qn 1

var words = ['hello', 'what', 'is', 'up', 'dude']

 function lengths(words) {
   for (var i=0; i < words.length; i++);
   console.log(words[i].length);
}

lengths(words);

//Qn 2
function transmogrifier (num1, num2, num3){
  var product = num1 * num2;
  console.log (Math.pow(product, num3));
}

transmogrifier(5, 4, 3); //Answer: 8000
transmogrifier(13, 12, 5); //Answer: 92389579776
transmogrifier(42, 13, 7); //Answer: 14466001271480793000

//Qn 3
var sentence="Let's see if we can write this in reverse."

function wordReverse (words){
  var wordssplit = words.split(" ");
  var x = '';
  for (var i= wordssplit.length - 1; i >= 0; i--)
    x = x + wordssplit[i] + " ";
    if (i= wordssplit.length - 1){
      console.log (x);
    }
}

wordReverse(sentence);

//Short Questions

//Qn 1

function maxOfTwoNumbers (num1 , num2) {
  if (num1 > num2){
    console.log(num1);
  }
  else {
    console.log(num2)
  }
}

maxOfTwoNumbers (3,10);

//Qn 2
function maxOfThree (num1, num2, num3){
  if (num1 > (num2 && num3)){
    console.log(num1);
  } else if (num2 > (num1 && num3)){
    console.log(num2);
  } else {
    console.log(num3);
  }
}

maxOfThree(1,10,7);

//Qn 3
function isCharacterAVowel(string){
  var x = string.toLowerCase();
  if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u" ){
    console.log(true);
  }
  else {
    console.log(false);
  }
}

isCharacterAVowel("E");

//Qn 4
function sumArray (array){
  for(var i=0, sum= 0; i < array.length; i++)
    sum += array[i];
     console.log(sum);
}

sumArray([1,2,3,4]);

function multiplyArray (array){
  for(var i=0, sum=1; i < array.length; i++)
    sum *= array[i];
    console.log(sum);
}

multiplyArray([1,2,3,4]);

//Qn 5
function NoofArg(a,b,c,d,e,f){
  console.log(arguments.length);
}

//Qn 6
NoofArg(1,2,3,4,5,6);

function reverseString(str){
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  console.log(joinArray);
}

reverseString("My Name is Amanda.");

//Qn 7
function findLongestWord (array){
  var splitArray = array.split(" ");
  var sortwords = splitArray.sort(function (a,b) {return b.length - a.length});
  console.log(sortwords[0]);
}

findLongestWord("Hello javascript is quite difficult");
