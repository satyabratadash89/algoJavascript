/*
The museum of incredible dull things

The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task

Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples

removeSmallest([1,2,3,4,5]) = [2,3,4,5]
removeSmallest([5,3,2,1,4]) = [5,3,2,4]
removeSmallest([2,2,1,2,1]) = [2,2,2,1]
*/

function removeSmallest(numbers) {
var array=numbers.slice();
var i,j,k;
for(j=0;j<array.length;j++){
for(i=0;i<array.length;i++){
if(array[i]>array[i+1]){
array[i]=array[i]-array[i+1];
array[i+1]=array[i]+array[i+1];
array[i]=array[i+1]-array[i];
}
}
}
for(k=0;k<array.length;k++){
if(numbers[k]==array[0]){
numbers.splice(k, 1);
return numbers;
}
}
numbers=[];
return numbers;
}
