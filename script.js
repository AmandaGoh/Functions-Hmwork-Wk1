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
  console.log(x = x + wordssplit[i] + " ");
}

wordReverse(sentence);
