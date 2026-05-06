/* question 1*/
/*Question 1: The Guest List Formatter
Goal: Practice Template Literals and Array Methods.
Write a function called formatGuests that takes an array of names. The function should:
Remove the first name from the list (it’s the host, not a guest).
Add "Guest: " before each remaining name using .map().
Return a single string where each guest is on a new line.
*/

let arr=["Bharath","Rahul","Ramu","charan","pranay"];
arr.shift();
arr.map(x=>console.log(`Guest: ${x}`));

/*Question 2: The Logic Gate (Filter & Math)
Goal: Practice Arrow Functions, filter, and Math methods.
Create an arrow function called getHighNumbers. It should take an array of mixed types (strings and numbers) and:
Filter the array to keep only the numbers.
Filter those numbers again to only keep ones greater than a random threshold between 1 and 50.
Return the final array.*/

let arr1=["hello",1,45,23,67,54,32,12,9,"a"];
let getHighNumbers=arr1.filter(x=> typeof x==="number");

let random=Math.floor(Math.random()*50+1);
console.log(random);
getHighNumbers=arr1.filter(x=> x>random);
console.log(getHighNumbers);

/*Question 3: The Price Calculator
Goal: Practice Type Conversion and splice.
You have an array of prices, but they are currently strings. Write a script that:
Removes the last item in the array using an array method (because it's a "handling fee" you want to calculate separately).
Converts the remaining string prices into actual numbers.
Calculates the sum of those numbers using an arrow function.
Prints: "Total Price: $[sum]" using a template literal.*/

let arr2=["20","30","400","48","500","100","20","100"];
arr2.pop();
let sum=0;
let arr3=arr2.map(x=> parseInt(x));
arr3.forEach(y=>sum=sum+y);
console.log(`Total price: ${sum}`);