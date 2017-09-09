/* 
Description:

#Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
*/

function findMissingLetter(array){
var letters="abcdefghijklmnopqrstuvwxyz";
var letterArr=Array.from(letters);
var startIndex=0;
for(var i=0; i<letterArr.length; i++){
    if(array[0].toUpperCase()==letterArr[i].toUpperCase()){
      startIndex=i;
    }
  }
for(var j=startIndex,k=0; j<26; j++,k++){
    if(letterArr[j].toUpperCase()!==array[k].toUpperCase()){
if (array[0] == array[0].toUpperCase()) {
 return letterArr[j].toUpperCase();
}
else{
 return letterArr[j].toLowerCase();
}
    }
  }
}
