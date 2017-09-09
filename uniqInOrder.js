/* Implement the function unique_in_order which takes as argument a sequence and returns a 
list of items without any elements with the same value next to each other and preserving the 
original order of elements. 
Example:
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

*/

var uniqueInOrder=function(iterable){
  var arr= Array.from(iterable);
  var newArr=[];
  var i=0,k=0;
  for(i=k;i<arr.length; i++){
  if(arr[i]!==arr[i+1]){
  newArr.push(arr[i]); 
  continue;
  }
  }
  return newArr;
}
