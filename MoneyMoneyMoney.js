/* 
Mr. Scrooge has a sum of money 'P' that wants to invest, and he wants to know how many years 'Y' this sum has to be kept in the bank in order for this sum of money to amount to 'D'.

The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly, and the new sum is re-invested yearly after paying tax 'T'

Note that the principal is not taxed but only the year's accrued interest.

 Let P be the Principal = 1000.00      
  Let I be the Interest Rate = 0.05      
  Let T be the Tax Rate = 0.18      
  Let D be the Desired Sum = 1100.00


After 1st Year -->
  P = 1041.00
After 2nd Year -->
  P = 1083.86
After 3rd Year -->
  P = 1128.30
  
Thus Mr. Scrooge has to wait for 3 years for the initial pricipal to ammount to the desired sum.  
*/

function calculateYears(principal, interest, tax, desired) {
    // your code
  if(desired>principal){
  for(var i=1; i; i++){
var balance=principal*Math.pow((1+interest*(1-tax)),i);
    if(balance>=desired){
      console.log(i);
      return i;
    }
  }
    }else{
      return 0;
    }
}
