var testArray = [17, 42, 311, 5, 9, 10, 28, 7, 6];
var sum = 0;

for (var arrayPosition = 0;
      arrayPosition < testArray.length;
      arrayPosition++) {
          sum += testArray[arrayPosition];
          //+= is a unary (one-part) operator used to add a value to a value
          //to a rolling sum
}

console.log("The sum of " + testArray + " is " + sum);
