/*

Description:

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:

Kata.HighAndLow("1 2 3 4 5"); // return "5 1"
Kata.HighAndLow("1 2 -3 4 5"); // return "5 -3"
Kata.HighAndLow("1 9 3 4 -5"); // return "9 -5"

*/

function highAndLow(numbers){
var arr=Array.from(numbers);
var newArr=[];
var indexAt=0;
var number='';
var k=0;
  var j=0;
for(var i=0; i<arr.length; i++){
  if(arr[i]!==' '){
number=number+arr[i];
    }else if(arr[i]===' '|| (i===arr.length))  { 
      newArr.push(number);
      number='';
      continue;
    }

}
newArr.push(number);
newArr=newArr.sort(function(a,b){return a-b;})
  return ""+newArr[newArr.length-1]+" "+newArr[0]+"";
}
