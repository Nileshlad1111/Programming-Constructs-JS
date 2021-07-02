var num = 121;
var copyNum = num;
var reverse = 0;

//reverse a number
while(copyNum != 0)
{
 reverse = reverse * 10;
 reverse = reverse + (copyNum % 10);
 copyNum = Math.floor(copyNum / 10);
}

// result
if (num == reverse)
 console.log(num +" is a palindrome number");
else
console.log(num +" is not a palindrome number");