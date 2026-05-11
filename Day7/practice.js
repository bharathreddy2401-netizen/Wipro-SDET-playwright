/* Variables*/
//create a program that swaps two numbers without third variable
/*
let a =5;
let b =10;
console.log(a,b);
a=a+b;
b=a-b;
a=a-b;
console.log(a,b);
-------------------------------------------------------------------------------------
//check wheather the number is string ,number boolean,null or undefined

function check(number)
{
    if(number=== null)
    {
        return "Given input is null";
    }
    else{
        return typeof number;
    }
}
console.log(check("12"));
--------------------------------------------------------------------------
//takes year and calculate date of birth

function ageCheck(year)
{
    if(isNaN(year)|| 2026<year>1900 )
    {
        return "Enter valid year";
    }
    else{
        return 2026-year;
    }
}
console.log(ageCheck(2004));
---------------------------------------------------------------------------------
//Strings
//Reverse a string without using built in functions

let string="Hello World!";
let rev="";

for(let i=string.length-1;i>=0;i--)
{
    rev+=string[i];
}
console.log(rev);
--------------------------------------------------------------------------------
//Count the number of vowels in a string.

function countVowels(string)
{
    let string1=string.toLowerCase();
    let count=0;
    let arr=string1.split("");
    for(x of arr)
    {
        if(x=="a"||x=="e"||x=="i"||x=="o"||x=="u")
        {
            count++;
        }
    }
    return count;
}
let string1="WElcome to Java Script";
console.log(`count of vowels in the given string is ${countVowels(string1)}`);
------------------------------------------------------------------------------------------
//Check whether a string is a palindrome.
let string3="racecar";
let rev1="";

for(let i=string3.length-1;i>=0;i--)
{
    rev1+=string3[i];
}
if(rev1===string3)
{
    console.log(`Given string : ${string3} is palindrone`);
}
else
{
    console.log("Given input is not a palindrone");
}
----------------------------------------------------------------------------------
//Capitalize the first letter of every word in a sentence.

function Capitalize(string)
{
    let parts=string.split(" ");
    let res="";//parts[0][1].toUpperCase();
    for(let i=0;i<parts.length;i++)
    {
        let word=parts[i];
        res += word[0].toUpperCase() + word.slice(1) + " ";
        
    }
    return res;
}
let string ="my name is bharath reddy";
console.log(Capitalize(string));
------------------------------------------------------------------------------
//Find the longest word in a sentence.

function findLongest(string)
{
     let parts=string.split(" ");
     let num=[];
     for(let i=0;i<parts.length;i++)
     {
        num[i]=parts[i].length;
     }
     let max= Math.max(...num);
     console.log(max);
     let ind=num.indexOf(max);
     return parts[ind];
}
let string ="my name is bharath reddy";
console.log(`Longest word in the given string is ${findLongest(string)} `);
-------------------------------------------------------------------------------
//Numbers & Math

//Check whether a number is prime.
function isPrime(n) {
  
    if (n <= 1) return false;
    
    
    if (n === 2) return true;
    
    if (n % 2 === 0) return false;

    let limit = Math.sqrt(n);
    for (let i = 3; i <= limit; i += 2) {
        if (n % i === 0) {
            return false; 
    }

    return true; 
    }
}
console.log(isPrime(11)); // true
console.log(isPrime(15)); // false
console.log(isPrime(2));  // true
 ------------------------------------------------------------------------------------------   
//Find factorial of a number using loops.

function factorial(number)
{
    let fact=1;
    for(let i=1;i<=number;i++)
    {
        fact=fact*i;
    }
    return fact;
}
console.log(`factorial of given number is ${factorial(5)}`);
----------------------------------------------------------------------------------
//Find Fibonacci series up to n numbers.

function getFibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    
    let series = [0, 1];

    for (let i = 2; i < n; i++) {
        
        let nextNumber = series[i - 1] + series[i - 2];
        series.push(nextNumber);
    }

    return series;
}

console.log(getFibonacci(10));


--------------------------------------------------------------------------
//Check whether a number is Armstrong number.
function Armstrong(num)
{
    let numStr = num.toString();
    let n = numStr.length;
    let sum = 0;
    let temp = num;

    
    while (temp > 0) {
        let digit = temp % 10; 
        sum += Math.pow(digit, n); 
        temp = Math.floor(temp / 10); 
    }

    
    return sum === num;
}
console.log(Armstrong(153));

---------------------------------------------------------------------------------------
//arrays
//Find the largest and smallest number in an array.

let arr=[1,25,63,78,95,1,5,24,1,87,2];

console.log("Minimum nuber in the given Array",Math.min(...arr));
console.log("Maximum nuber in the given Array: ",Math.max(...arr));

------------------------------------------------------------------------------------
//Remove duplicate elements from an array.

function removeDuplicates(arr) {
    let uniqueArr = [];
    
    for (let i = 0; i < arr.length; i++) {
       
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i]);
        }
    }
    
    return uniqueArr;
}

console.log(removeDuplicates([10, 10, 20, 30, 20]));

--------------------------------------------------------------------------------------
//Sort an array without using built-in sort().
function sorting(arr)
{
    let temp=0;
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i;j<arr.length-1;j++)
        {
            if(arr[i]>arr[j])
            {
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    
    }
    return arr;
}
let arr=[10,50,80,72,45,98];
console.log(`sorted array is: ${sorting(arr)}`);
-----------------------------------------------------------------------------------
//Merge two arrays and remove duplicates.

let arr=[10,15,20,30,40];
let arr2=[15,25,63,78,98];

let arr3=[...arr,...arr2];
let arr1=[];
for(let i=0;i<arr3.length;i++)
{
    if(!arr1.includes(arr3[i]))
    {
        arr1.push(arr3[i]);
    }
}
console.log(arr1);

-----------------------------------------------------------------------------------------
//OBJECTS

//Create an object for a student and display all properties dynamically.

let student={
    name:"Bharath",
    gender:"Male",
    city:"warangal",
    id:15
};
console.log(student);


------------------------------------------------------------------------------------
//Count number of keys in an object.

let student={
    name:"Bharath",
    gender:"Male",
    city:"warangal",
    id:15
};
let count=Object.keys(student).length;

console.log(count);
----------------------------------------------------------------------------------------
// Merge two objects into one

let student1={
    name:"Bharath",
    gender:"Male",
    city:"warangal",
    id:15
};
let address1={
    house_no: 2,
    street:12,
    mandal:"hanamkonda",
    state:"Telangana",
}
let a1={...student1,...address1};
console.log(a1);
--------------------------------------------------------------------------------
// Convert an object into an array of keys and values.

let address1={
    house_no: 2,
    street:12,
    mandal:"hanamkonda",
    state:"Telangana",
}
let student=Object.entries(address1);
console.log(student);

------------------------------------------------------------------------------
//Create a shopping cart object and calculate total bill amount. 
let cart={
    soaps:200,
    detergent:500,
    tooth_paste:150,
    rice:800,
    milk:50
};
let bill=Object.values(cart).reduce((acc,curr) => { return acc+curr });
console.log(`total bill is ${bill}`);
------------------------------------------------------------------------------
//loops
//Print star pyramid patterns. 

let n=5;
for(let i=0;i<=n;i++)
{
    console.log(" * ".repeat(i));
}
-------------------------------------------------------------------------------
//Print multiplication tables from 1 to 10.

let arr=[1,2,3,4,5,6,7,8,9,10];
for(let i=1;i<=10;i++)
{
    
    arr.forEach(x=>console.log(`Multiplication table of ${i} is : ${i} * ${x} = ${i*x}`));
}
--------------------------------------------------------------------------
//Print all prime numbers between 1 and 100. 
function isprime(num)
{
    
    if(num<=1) return false;
    if(num==2) return true;
    if(num%2==0) return false;

    for(let i=3;i<=Math.sqrt(num);i++)
    {
        if(num%i==0) return false;
    }
    return true;

}
console.log(`prime numbers from 1 to 100 are: `);
let primes=[]
for(let i=0;i<=100;i++)
{
    if(isprime(i))
        primes.push(i);
       
}
console.log(primes);
---------------------------------------------------------------------------
//functions
//Create a function that returns the greatest of three numbers. 

let a=25,b=30,c=5;
function max(a,b,c)
{
    return (Math.max(a,b,c));
}
console.log(`Maximum of given 3 numbers is ${max(a,b,c)}`);
---------------------------------------------------------------------------
// Write a function that accepts an array and returns only even numbers.
function even(arr)
{
    let a=arr.filter(x=>x%2==0);
    return a;
}
let arr=[1,2,3,4,5,6,7,8,9,10,41,87,96,23];
console.log(even(arr));
---------------------------------------------------------------------------
//Callback Functions & setTimeout 

// Create a delayed greeting message using setTimeout. 
setTimeout(()=>
{
    console.log("Good morning!");
},5000);

----------------------------------------------------------------------------
//Build a countdown timer.

function startCountdown(seconds) {
    let counter = seconds;

    const timer = setInterval(() => {
        console.log(`Time remaining: ${counter}s`);
        counter--;

        if (counter < 0) {
            clearInterval(timer); 
            console.log("Time's up!");
        }
    }, 1000);
}

startCountdown(10);
--------------------------------------------------------------------------------

//Double all numbers in an array using map(). 

let arr=[1,2,3,4,5,6,7,8,9,10];
console.log(arr.map(x=>x*2));
----------------------------------------------------------------------------------------

//Filter all students scoring above 80 marks
let marks=[50,80,90,54,78,86,95,65,99];
console.log(marks.filter(x=>x>80));

-------------------------------------------------------------------------------------

//Print all array values using forEach(). 
let marks=[50,80,90,54,78,86,95,65,99];
marks.forEach(x=>console.log(x));
--------------------------------------------------------------------------------------------

// Convert array of names into uppercase.
let arr=["Ramu","Rahul","shiva","charan"];
console.log(arr.map(x=>x.toUpperCase()));
-----------------------------------------------------------------------------------------

//Extract only even numbers using filter(). 
let marks=[50,80,90,54,78,86,95,65,99];
let arr=marks.filter(x=>(x%2==0));
console.log(arr);
--------------------------------------------------------------------------------------------

// Scope and Hoisting
// Predict output of variable hoisting examples.

console.log(greet);
var greet = "Hello, world!";
console.log(greet);
console.log(count);
let count = 10;
---------------------------------------------------------------------------------------------------

//Create examples showing block scope using let.
for (let i = 0; i < 3; i++) {

  console.log("Iteration:", i);
}

// console.log(i);
-----------------------------------------------------------------------------------------------------

//Write a program demonstrating closure behavior.
function arthimetic(a,b)
{
    
    this.a=a;
    this.b=b;


    this.sum=function()
    {
        return a+b;
    }
    this.diff=function()
    {
        return a-b;
    }
}
const obj=new arthimetic(5,10);
console.log(obj.sum());

------------------------------------------------------------------------------------

// Closures

let sum = 0; // 2
function f() {
    function increment() {
        sum++;
        
        function inner2() {
            sum++;
            console.log(sum);
        }
        return inner2();
    }
    return increment();
}
f();
console.log(sum);
---------------------------------------------------------------------------------------------------------------------------------

//calculator with call backs

const calc = {
    sum: (...op) => op.reduce((acc, curr) => acc + curr, 0),
    sub: (...op) => op.reduce((acc, curr) => acc - curr, 0),
    mul: (...op) => op.reduce((acc, curr) => acc * curr, 1),
    div: (...op) => op.reduce((acc, curr) => acc / curr, 1),
};
 
 
function calculator(operation, ...operands) {
    return operation(...operands);
}
 
console.log(calculator(calc.sum, 1, 2, 3))

*/


