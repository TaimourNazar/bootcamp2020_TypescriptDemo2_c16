"use strict";
var obj2 = {
    firstname: "hello",
    email: "hello@mail.com"
};
console.log(obj2.firstname);
var abc = 56;
console.log(abc);
var human = {
    name: "Zeeshan",
    age: 24,
    email: "abc@mail.com"
};
var arr = [45, 67, 45];
//arr[1]=3; allowed
var arr1 = [45, 67, 45];
//arr1[1]=3; not allowed
var arr2 = [45, 67, 45, true, "Hello"];
arr2[1] = "hello";
//Tuples
var a = [1];
var arr_tuple = [45, "hello"];
//ENUM
var Language;
(function (Language) {
    Language[Language["Urdu"] = 0] = "Urdu";
    Language[Language["English"] = 1] = "English";
    Language[Language["Russian"] = 2] = "Russian";
})(Language || (Language = {}));
console.log(Language.Urdu);
var Language2;
(function (Language2) {
    Language2[Language2["Urdu"] = 100] = "Urdu";
    Language2[Language2["English"] = 101] = "English";
    Language2[Language2["Russian"] = 230] = "Russian";
})(Language2 || (Language2 = {}));
console.log(Language2.English);
//Functions
function add(a, b) {
    return a + b;
}
console.log(add(4, 5));
var myadd = function (num1, num2) {
    return num1 + num2;
};
myadd(4, 7);
var myFilter = function (name) {
    return 67;
};
var myFilter2 = function (name) {
    return "Hello";
};
function myData(num) {
    return num;
}
myData(4);
myData("hello");
