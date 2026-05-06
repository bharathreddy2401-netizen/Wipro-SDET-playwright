let a="Bharath";
let b="Arun";
let c="Ramu";

console.log(`Hello, ${a} ,${b} and ${c}!`);

function table(number)
{
    for(let i=0;i<10;i++)
    {
        console.log(`${number} x ${i} = ${number*i}`);
    }
}
table(5);

let sum=(x,y)=>x+y;
console.log("addition of two numbers: "+sum(5,10));

let arr=[1,2,3,4,5];

arr.map(function(x)
{
    console.log(`Multiplied numbers ${x*2}`);
})

arr.map(x=>x*2).forEach(x=>console.log(`Multiplied numbers are ${x}`));
arr.push("Bharath");
arr.filter(x=>typeof x==="number").map(x=>x*2).forEach(x=>console.log(`Multiplied numbers are ${x}`));

console.log(Math.ceil(0.001));



console.log(Math.floor(Math.random()*10));
let str="10";
console.log(Number(str));

let val = "0.6";
console.log(parseInt(val));
console.log(parseFloat(val));

let colours=["blue","red","green"];
console.log(colours.indexOf("purple"));
console.log(colours.indexOf("green"));
console.log(colours.includes("red"));
console.log(colours.length);
console.log(colours[1]);
console.log(colours[colours.length-1]);
colours.push("Yellow");
colours.unshift("purple");
console.log(colours);
colours.splice(0,2);
console.log(colours);
colours.pop();
console.log(colours);
colours.shift();
console.log(colours);


/*reduce function*/

let fruitbasket=["Banana","Apple","Orange","Apple","Banana","Pineapple","Kiwi","Mango"];
let count=fruitbasket.reduce((acc,curr)=>
{
    acc[curr]=(acc[curr] || 0)+1;
    return acc;
},{});
console.log(count);