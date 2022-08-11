Number;
BigInt;
String;
Boolean;
Function;
Object; // Function, Array, Date, RegExp, Math
Symbol;
null;
undefined;

//functions are a special type of obj
Date, RegExp; //objects that can be called anywhere

parseInt(); //Convert a string to a integer

//string methods
const a = "hello, world";

a.length; //returns the length of string
a.charAt(0); //returns the first character of string
a.replace("world, mars"); //replaces the substring world with mars
a.toUpperCase(); //returns a new string with uppercase letters

null; // represents a deliberate non-value
undefined; // is a value that indicates an uninitialized variable

//false = false, 0, "", NaN, null, undefined
//true = all other values

Boolean(""); //false
Boolean(123); //true

//variables
let b = null; //let is a block level declaration, so it is only available in the block that it is enclosed in
// myLetVariable is *not* visible out here

for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {
	// myLetVariable is only visible in here
}

// myLetVariable is *not* visible out here
