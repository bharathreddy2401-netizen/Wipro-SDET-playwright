/*first*/
let a=5;
let b=10;
let c=0;

c=a;
a=b;
b=c;
console.log(a,b);

/*second*/
function check(a)
{
    console.log("This is a:",typeof a);
}
check(20);
check("hello");

/*Third*/

let name="Bharath Reddy";
let space=name.indexOf(" ");

console.log(name[0]+""+name[space+1]);

/*fourth*/

let messy = " Javascript is fun "
messy=messy.trim();
console.log(messy.toLowerCase());

/*fifth*/

let array=["Rice","Bread","Salt"];
array.length=array.length+1;

for (let i = array.length - 2; i >= 0; i--) {
    array[i + 1] = array[i];
}
array[0]="Eggs";
array.push("Milk");
array.pop();
console.log(array);

/*sixth*/

let numbers = [10, 20, 30, 40, 50];

let count=0;
for(let i=0;i<numbers.length;i++)
{
    if(numbers[i]==30)
    {
        count=1;
    }
    if(numbers[i]==50)
    {
        console.log("index of 50 is:",i);
    }
}
if(count=0)
{
    console.log(false);
}
else
{
    console.log(true);
}