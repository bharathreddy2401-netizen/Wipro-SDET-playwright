/*function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}
 
getData().then((data) => {
    console.log(data);
}).catch((error) => {
    console.error("Error:", error);
});*/
/*setTimeout(() => {
     console.log("Data received");
 }, 5000);
 */
/*setInterval(() => {
     console.log("Checking for new data...");
 }, 3000);*/


 /* 1st Json API
 
 fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res => res.json()) // res -> string -> json)
    .then(data => data.filter(d => d.id % 2 === 0))
    .then(data => data.map(d => (d.title = "Bharath " + d.title)))
    .then(data => console.log(data))
    .catch(error => console.error("Error fetching data:", error));*/

/* 2nd store API

fetch("https://fakestoreapi.com/products")
    .then(res=> res.json())
  //  .then(data=>console.log(data));
    .then(data=>data.filter(d=>d.category=="jewelery"))
    .then(data=>data.map(d=>console.log(d.price)))
    .catch(err => console.error("Error:", err));*/


/* 3rd Random User API

fetch("https://randomuser.me/api/")
    .then(res=>res.json())
   
    .then(data=>
        {
           return data.results.filter(d=>d.gender=="male");
        })
    .then(data=>data.forEach(d=>console.log(d.cell)))
    .catch(err => console.error("Something went sideways:", err));
    */

/* 4th Dog API

fetch("https://dog.ceo/api/breeds/image/random")
    .then(res=>res.json())
    .then(data=>console.log(data.status))
    .catch(err => console.error("Error:", err));*/

/* 5 th Pokemon
    
fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
    .then(res=>res.json())
   // .then(data=>console.log(data))
   .then(data=>data.results.filter(d=>d.name.startsWith("p")))
   .then(data => data.map(p => console.log(p.name)))
   .catch(err => console.error("Error:", err));*/

   /*6th Books

fetch("https://openlibrary.org/works/OL45804W.json")
    .then(res=>res.json())
   // .then(data=>console.log(data))
    .then(data=>console.log(data.title))
    .catch(err => console.error("Error:", err));*/

    /*7th  countries details
fetch("https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,population")
    .then(res=>res.json())
    .then(data=>data.filter(d=>d.population<100000))
    .then(data=>data.map(d=>console.log(d.population)))
    .catch(err => console.error("Error:", err));*/

    /*8th  
fetch("https://zenquotes.io/api/quotes")
  .then(res => res.json())
  .then(data => data.filter(d => d.q.length < 100))
  .then(data => data.map(d=> d.q))
  .then(console.log)
  .catch(console.error);*/

  /*9th

  fetch("http://api.open-notify.org/astros.json")
  .then(res => res.json())
  .then(data => data.people)
  .then(data => data.map(d => d.name))
  .then(console.log);*/

  /* 10th */

  fetch("https://official-joke-api.appspot.com/jokes/ten")
  .then(res => res.json())
  .then(data => data.filter(d => d.type === "programming"))
  .then(console.log)
  .catch(console.error);
