let obj2:{firstname:string,email:string}={
    firstname:"hello",
    email:"hello@mail.com"
}

console.log(obj2.firstname);

//Type Aliases

type Age = number;

let abc: Age=56;
console.log(abc);

type Person={
    name: string
    age: number
    email?: string
}

let human: Person={
    name:"Zeeshan",
    age: 24,
    email: "abc@mail.com"
};

let arr: number[]=[45,67,45];
//arr[1]=3; allowed
let arr1: readonly number[]=[45,67,45];
//arr1[1]=3; not allowed
let arr2: any=[45,67,45,true,"Hello"];
arr2[1]="hello";

//Tuples
let a:[number]=[1];
let arr_tuple:[number,string]=[45,"hello"];

//ENUM
enum Language{
    Urdu,
    English,
    Russian
}
console.log(Language.Urdu)

enum Language2{
    Urdu=100,
    English,
    Russian=230
}
console.log(Language2.English)

//Functions
function add(a:number,b:number):number{
    return a+b;
}
console.log(add(4,5));


//Funciton in variable (js)
type Addition = (num1:number,num2:number)=>number
let myadd: Addition = (num1:number,num2:number):number=>{
    return num1+num2;
}
myadd(4,7);

//Generic Type Function
type Filter<T>={
    (name:T):T
}

let myFilter: Filter<number>=(name:number): number=>{
    return 67;
}

let myFilter2: Filter<string>=(name:string): string=>{
    return "Hello";
}

function myData<T>(num:T):T{
    return num;
}
myData<number>(4);
myData<string>("hello");