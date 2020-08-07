// // ** string concatination
// var string="Hello";
// string += " World";
//  // string = string + " World"
// console.log(string + "!");


// // ** regular math operator
// console.log((5+4) / 3);
// console.log(undefined/4);


// // *EQUALITY
// var x = 3 , y = 3;
// if (x==y) {
// 	console.log("x is equals to y");
// }

// x="3";
// if (x==y) {
// 	console.log("x and y are equal");
// }

// // ** strict equality
// if (x===y) {
// 	console.log("'x' and y are equal");
// }
// else{
// 	console.log("STRICT:'x' and y are not equal");
// }


// // ***If statement (ALL FALSE) 
// if (false || null || 0 || undefined || "" || NaN) {
// 	console.log("This line won't ever execute");
// }
// else{
// 	console.log("All False");
// }

// // *** If statement (All true)
// if(true && "false" && 1 && -1 && "Hello"){
// 	console.log("All True");
// } 

// // *** Best practice for {} style
// //  Curly brace on the same or next line..
// // Is is just a style?
// function a()
//  {
//  	return //** the js engine automatically places a ; if it doesn't see anything. Therefore executes undefined.
//  	{
//  		name:"Prachi"
//  	};
// }

// function b(){
// 	return{
// 		name:"Prachi"
// 	};
// }
// console.log(a());
// console.log(b());

// for loop
var sum=0;
for (var i=0; i < 10; i++){
	console.log(i);
	sum=sum + i;
}
console.log("sum of 0 through 9 is: " + sum);