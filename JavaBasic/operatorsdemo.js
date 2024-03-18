// arithmetic Operators
let x = 10;
let y = 3;
console.log("\n\t\tArithmetic operation\n");
console.log(x+y); // additions 
console.log(x-y); // subtraction
console.log(x*y); // multiplication
console.log(x/y); //division
console.log(x%y); //remainder
console.log(x**3);//exponent

//Assignment operator
console.log("\n\t\tAssignment Operator\n");
let a = 20;
a += 7;
console.log("Value of a after addition is ", a);
a %= 3;
console.log("Value of a after storing remainder is",a);
a *= 5;
console.log("value after multiplication is ",a);
a -= 3;
console.log("Value after subtraction is", a);
a /= 2;
console.log("Value after division is ", a);
a **= 2;
console.log("Value after exponent is ",a);


// Relational operators
console.log("\n\t\tRelational Operator\n");
let X = 10;
let Y = 20;
let Z = 5;
let A = 10;
console.log("X < Z", X < Z); // less than 
console.log("Y > Z", Y > Z); // greater than
console.log("X <= Z", X<= Z); //less than equal to
console.log("X >= A", X >= A); //greater than equal to


//logical Operators
console.log("\n\t\tLogical Operator\n")
console.log(true && false);
console.log(false || false);
console.log(true && true);
console.log((5 < 10) && (6 < 3));
console.log(!false); //logical not 
console.log(6 && 10);
console.log(10 || 0);
console.log(6 || 19);
console.log(0 || -0);
console.log(10/null);
console.log(undefined/null);