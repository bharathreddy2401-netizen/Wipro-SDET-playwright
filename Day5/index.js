/*async function getData() {
    const sum = 2 + 2;
    return await new Promise((resolve, reject) => {
        if(2 < 3) {
            setTimeout(() => {
                resolve("Data received");
            }, 2000);
        } else {
            reject('not working')
        }
    });
}*/
//---------------------------------1st example-------------------------------------------------------
async function getTodos(url) {
    let data = await fetch("https://jsonplaceholder.typicode.com/todos"); // cursor is blocked in this line
    data = data.json();
    return data;
}
 
//getTodos().then(data => console.log(data));

//-----------------------------------2 nd Example--------------------------------------------------------

async function getTodos(url) {
    let data = await fetch("https://fakestoreapi.com/products"); // cursor is blocked in this line
    data = data.json();
    return data;
}
 
//getTodos().then(data => data.forEach(d=>console.log(`Category is ${d.category} and price is ${d.price}`)));

//------------------------------------3 rd example---------------------------------------------------------

async function getTodos(url) {
    let data=await fetch("https://randomuser.me/api/");
    data=data.json();
    return data;

}
//getTodos().then(data=>console.log(data));

//---------------------------------------4 th example-------------------------------------------------------

async function getTodos() {
    let data=await fetch("https://dog.ceo/api/breeds/image/random");
    data=data.json();
    return data;
}
//getTodos().then(data=>console.log(data.status));

//---------------------------------------------5 th example----------------------------------------------------

async function getTodos() {
    let data=await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    data=data.json();
    return data;
}
//getTodos().then(data=>data.results.forEach(d=>console.log(d.name.startsWith("r"))));

//----------------------------------------------6th example-----------------------------------------------------

async function getTodos() {
    let data=await fetch("https://openlibrary.org/works/OL45804W.json");
    data=data.json();
    return data;
}
//getTodos().then(data=>console.log(data.title));

//----------------------------------------------7 th example----------------------------------------------------

async function getTodos() {
    let data=await fetch("https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,population");
    data=data.json();
    return data;
}
/*getTodos().then(data=>data.filter(d=>{
    if(d.population<10000){
        console.log(d.capital)}}));*/

//-----------------------------------------------8 th example------------------------------------------------------

async function getTodos() {
    let data=await fetch("https://zenquotes.io/api/quotes");
    data=data.json();
    return data;
}
//getTodos().then(data=>data.forEach(d=>console.log(d.a)));

//--------------------------------------------------9 th example---------------------------------------------------
async function getTodos() {
    let data=await fetch("http://api.open-notify.org/astros.json");
    data=data.json();
    return data;
}
//getTodos().then(data => console.log(data));

//-------------------------------------------------10 th example-----------------------------------------------------

async function getTodos() {
    let data=await fetch("https://official-joke-api.appspot.com/jokes/ten");
    data=data.json();
    return data;
}
//getTodos().then(data => data.forEach(d=>(console.log(d.punchline))));


//-------------------------------------Intervals---------------------
const timeoutId = setTimeout(() => {
    console.log("Data received");
}, 5000);
console.log("test");
 
clearTimeout(timeoutId);
 
const i = setInterval(() => {
    console.log("Checking for new data...");
}, 3000);
//----------------------------conversions----------------------------- 
clearInterval(i);

const obj = {
    name: "Aaryan",
    age: 25,
    city: "New York"
}
 
// console.log(JSON.stringify(obj)); // object -> string
// console.log(JSON.parse('{"name":"Aaryan","age":25,"city":"New York"}')); // string -> object
 

