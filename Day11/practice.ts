/* The Generic API Wrapper
Scenario: You need a reusable function to fetch data that automatically types the response.
Task: Write a generic function fetchData<T>(url: string): Promise<T>. It should use the fetch API, check if the response is okay, and return the JSON parsed as type T. Test it by creating an Album interface and fetching data from a mock URL.
*//*
async function fetchData<T>(url: string): Promise<T>
{
    let response=await fetch(url);
    if(!response.ok)
    {
        throw new Error(`Network failed ${Error}`);
    }
    let data=response.json();

    return data;

}

interface Album{
    id:number,
    userId:number,
    title:string
}

async function demo()
{
    const url="https://jsonplaceholder.typicode.com/albums/1";
    const album= await fetchData<Album>(url);

    console.log(album);

}
demo();

*/

//-------------------------------------------------------------------------------------------------

//2 nd

/* Record Mapping for Configuration
Scenario: You are managing feature flags or permissions for specific user roles.
Task: Define an enum Role { Admin, Editor, Guest }. Use the Record utility type to create a variable PermissionMap where every Role must be mapped to a boolean value. If a role is missing from the object, TypeScript should throw an error.
*/
/*
enum Role {
    Admin,
    Editor,
    Guest
}
console.log(Role);
const PermissionMap: Record<Role, boolean> = {
  [Role.Admin]: true,
  [Role.Editor]: true,
  [Role.Guest]: false,
};
console.log(PermissionMap);
//------------------------------------------------------------------------------------------------------
//3rd
*/
/*Exhaustiveness Checking (The never Type)
Scenario: You want to ensure that if a new member is added to a Union, your logic must be updated to handle it.
Task:
Create a union type TaskStatus = 'Open' | 'InProgress' | 'Closed'.
Write a function handleTask(status: TaskStatus) using a switch statement.
In the default case, assign the status to a variable of type never.
The Test: Add 'Archived' to the union and verify that the code fails to compile until you add the new case.
*//*
type TaskStatus='open'|'InProgress'|'closed'|'Archeived';

function handleTask(status:TaskStatus)
{
    switch(status)
    {
        case 'open':
            console.log("Task is open");
            break;
        case 'InProgress':
            console.log("Task is in Progress");
            break;
        case 'closed':
            console.log("Task is closed");    
            break;
        default:
            const task:never=status;
            return task;
    }
}
handleTask("open");
*/
//------------------------------------------------------------------------------------------------------------------------------------

//4 th

/*Recursive Navigation Type
Scenario: You are building a tree structure for a file system or a sidebar menu.
Task: Define a type FolderNode that has a name: string. It should also have an optional files: string[] and an optional subFolders property, which is an array of FolderNode objects.
*//*
type FolderNode={name:string,
    files? :string[],
    subFolders? :FolderNode[]
}

const folder:FolderNode={
    name:"Wipro",
    subFolders: [{
        name:"Day1",
        files:["index.js","practice.js"]
    },{
        name:"Day2",
        files:["index.js","practice.js"]
    },{
        name:"Day3",
        files:["index.js","practice.js"]
    }
]

}
console.log(folder.subFolders);*/
//------------------------------------------------------------------------------------------------------------------------------

//5 th

/* Template Literal Types for CSS
Scenario: You are building a UI library and want to strictly enforce unit types for a "spacing" prop.
Task: Create a type MarginValue that only allows strings ending in "px", "rem", or "vh" (e.g., "10px", "2rem"). Use Template Literal Types to ensure a number must precede the unit.
*//*
type unit="px"|"rem"|"vh";
type MarginValue=`${number}${unit}`;
let a:MarginValue="25px";
console.log(a);*/
//---------------------------------------------------------------
//6 th

/* Conditional Types & the infer Keyword
Scenario: You are working with a library that returns data wrapped in a Promise, and you need to extract the underlying type.
Task: Create a utility type UnwrapPromise<T>. It should check if T is a Promise. If it is, use the infer keyword to return the type the promise resolves to; otherwise, return T itself.
*/

/*
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
type UserType = UnwrapPromise<Promise<string>>;
type AgeType = UnwrapPromise<Promise<number>>;
type BooleanType = UnwrapPromise<boolean>;

const user: UserType = "Bharath";
const age: AgeType = 24;
const isActive: BooleanType = true;

console.log(user);
console.log(age);
console.log(isActive);
*/








//---------------------------------------------------------------------
//7th

/*The Union Manipulation Puzzle
Scenario: You have a massive union of possible events but need to categorize them for specific handlers.
Task: Given type AllEvents = 'click' | 'dbclick' | 'submit' | 'reset' | 'keypress'.
Use Extract to create MouseEvents (only click and dbclick).
Use Exclude to create NonFormEvents (everything except submit and reset).*/
/*
type AllEvents = 'click' | 'dbclick' | 'submit' | 'reset' | 'keypress';
type MouseEvents=Extract<AllEvents,"click" | "dbclick">;
type NonFormEvents=Exclude<AllEvents,'submit'|'reset'>;


//--------------------------------------------------------------------------------------------------------------
//8 th
/*Async Higher-Order Function (HOF)
Scenario: You want to wrap any asynchronous function with a standard error logger.
Task: Write a generic function safeExecute<T> that takes an async function as an argument. It should return a new function that, when called, executes the original function inside a try/catch block and returns null if it fails.
*/
function safeExecute<Args extends any[], T>(asyncFnc: (...args: Args) => Promise<T>) {
    return async (...args: Args): Promise<T | null> => {
        try {
            return await asyncFnc(...args);
        } catch (err) {
            console.error(err);
            return null;
        }
    }
}

const info = async (id: number): Promise<string> => {
    if(id === -1) throw new Error("Invalid ID");
    return `Data for ID: ${id}`
}


async function dryRun() {
    const getData = safeExecute(info);
    const res = await getData(10);
    const res1 = await getData(0);
    const res2 = await getData(-1);
    console.log(res, res1, res2);
}

dryRun();

//----------------------------------------------------------------------------------------------------------------------
//9th 
/*Index Signatures for Dynamic Metadata
Scenario: You are receiving a "Metadata" object from a server where the keys are dynamic strings, but the values must be either a string, number, or boolean.
Task: Create an interface UserMetadata that has a required createdAt: Date but allows any other dynamic string keys as long as their values match the union type mentioned.


type value= string |number|boolean|Date;


interface UserMetadata{
    createdAt: Date;
    [keys:string]:value;
}
const validUser: UserMetadata = {
  createdAt: new Date(), 
  theme: "dark"         
  
};

console.log(validUser);
*/
//10 th


/*Mapped Types with Key Remapping
Scenario: You have a data model and need to generate a type for an API response that "prefixes" all the keys.
Task:
Define an interface Car { make: string; model: string; }.
Create a mapped type ApiResponse<T> that iterates through keys of T and renames them to be uppercase and prefixed with DATA_ (e.g., make becomes DATA_MAKE).
*/

interface Car {
  make: string;
  model: string;
  year: number;
}


type ApiResponse<T> = {
  [K in keyof T as `DATA_${Uppercase<string & K>}`]: T[K];
};

const carData: ApiResponse<Car> = {
  DATA_MAKE: "Tesla",
  DATA_MODEL: "Model 3",
  DATA_YEAR: 2024,
};

function printCarResponse(response: ApiResponse<Car>) {
  console.log(`Car: ${response.DATA_MAKE} ${response.DATA_MODEL}`);
}

printCarResponse(carData);


interface User {
  id: number;
  username: string;
}

const userData: ApiResponse<User> = {
  DATA_ID: 1,
  DATA_USERNAME: "jdoe_dev"
};
