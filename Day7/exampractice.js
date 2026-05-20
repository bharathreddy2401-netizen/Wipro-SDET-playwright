/*Question 1: The Flight Booking Data Cleaner
**Problem Statement:**
You are given a list of raw flight strings from a travel agency's database. The data is unformatted and needs to be standardized into objects for a front-end display.
**Requirements:**
1. **Parsing:** Iterate through an array of strings formatted as: "CITY_A-CITY_B:PRICE".
2. **Object Creation:** Convert each string into an object with three properties: from, to, and price.
3. **Validation & Coercion:**
  * The price must be explicitly converted to a **Number**.
  * If the price is not a valid number or is missing, set the price to 0.
4. **Filtering:** Create a new array containing only flights where the price is between **$100 and $500** (inclusive).
5. **Sorting:** Sort the final array of objects by price in **ascending order** (cheapest first).
6. **Return:** Return the final array as a **JSON string**.
**Input Data Example:**
```javascript
const rawFlights = [
 "London-Paris:150",
 "New York-Tokyo:invalid",
 "Dubai-Mumbai:450",
 "Berlin-Rome:95"
];*/

const rawFlights = [
 "London-Paris:150",
 "New York-Tokyo:invalid",
 "Dubai-Mumbai:450",
 "Berlin-Rome:95"
];

rawFlights.forEach(x=> console.log(x));


let arr=[];
for(let i=0;i<rawFlights.length;i++)
{
    let fromarr=rawFlights[i].slice(0,rawFlights[i].indexOf("-"));
    
    let toarr=rawFlights[i].slice(rawFlights[i].indexOf("-")+1,rawFlights[i].indexOf(":"));
    let dest=Number(rawFlights[i].slice(rawFlights[i].indexOf(":")+1,rawFlights[i].length));

    if(isNaN(dest))
    {
        dest=0;
    }

    let obj={
    from:fromarr,
    to:toarr,
    price:dest
};
    arr.push(obj);
   
}
console.log("final result");
arr.forEach(x=> console.log(x));




