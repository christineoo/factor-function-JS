
/* 
  This JS function generates all factors of a 
  given input integer (not including prime number)
  Given input integer = 10
    factors(10)
    --------------
    Output will be :
    [2,5]

    factors(2)
    --------------
    Output will be :
    [] //2 is a prime number
  
*/

var factors = function(number){
  var arr = new Array();
  var j = 0;
  // When i > (Math.sqrt(number), it will return duplicated
  // results. So, only need to loop until 
  // i <= (Math.sqrt(number))
  for (i = 2; i <= (Math.sqrt(number)); i++)
  {
    if ( number % i === 0)
    {
      arr[j] = [(number/i), i];
      j = j + 1;
    }
  }

  if (arr.length == 0)
  {
    console.log("[]"); //if the input integer is a prime number
  }
  else
  {
    for (i = 0; i < arr.length; i++)
    {
      console.log("[" + arr[i] + "]"); //print out the output
    }
  }
};

 
console.log("--------------------");
console.log("factors(10)");
factors(10);

console.log("--------------------");
console.log("factors(16)");
factors(16);

console.log("--------------------");
console.log("factors(9)");
factors(9);

console.log("--------------------");
console.log("factors(7)");
factors(7);

console.log("--------------------");
console.log("factors(100)");
factors(100);

console.log("--------------------");
console.log("factors(10000)");
factors(10000);

