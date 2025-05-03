


// JAVASCRIPT CHAPTER 12 TO 13


// Q1: Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).





// QUESTION NO : 2

// let a = 40;
// let b = 80;

// if (a > b) {
//     console.log("The Larger Number is: " + a);
// }else if (b > a){
//     console.log("The Larger Number is: " + b);
// }else{
//     console.log("Both Numbers Are Equal");
// }





// Question no : 3

// let new = 0;

// if(new > 0){
//     console.log("Whether is Positive");
// }else if (new < 0){
//     console.log("Whether is Negative");
// }else{
//     console.log("Whether is Zero");
// }




// Question no : 5

// let pass = "56789";
// let userName = "guest";

// let a = prompt("Enter Your Username :");
// let b = prompt("Enter Your Password :");

// if (a === userName && b === password) {
//     alert("Correct !");
// } else {
//     alert("Incorrect !")
// }





// Question no : 6

// let greeting = "";
// let hour = 13;
// if (hour < 18) {
//     greeting = "Good Morning";
// }
// else {
//     greeting = "Good evening";
// }
// console.log(greeting);






// Question no : 7

// let timeOne = prompt ("Enter Your Time")

// if(timeOne >= 0 && timeOne < 12){
//     console.log("Good Morning");
// }
// else if (timeOne >= 12 && timeOne < 17){
//     console.log("Good Afternoon");
// }
// else if (timeOne >= 17 && timeOne < 21){
//     console.log("Good Evening");
// }
// else if (timeOne >= 21 && timeOne < 24){
//     console.log("Good Night");
// }






// JAVASCRIPT CHAPTER 14 TO 16



// QUESTION NO : 1

// let stdName = prompt("Enter your name");

// console.log(stdName);





// Question no : 2

// let stdName = {
//     name: "MS GUEST"
// };
// console.log(stdName);




// Question no : 3

// let stdNames = ["Moshin","Mustafa ","Ali","Ahmed"];

// console.log(stdNames);


// Question no : 4

// let stdNumbers = [1,2,3,4,5,6,7,8,9,10];

// console.log(stdNumbers);





// Question no : 5

// let booleanArray = [true, false, true, false];

// console.log(booleanArray);





// Question no : 6


// let mix = ["Ali", 2 ,False , "MEOW", 4 ,true]

// console.log(mix);





// Question no : 7

// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// console.log(qualifications);





// Question no : 8


// let studentNames = ["Muhammad", "Mustafa", "Ali"];
// let studentNumbers = [250, 300, 480];

// let totalNumbers = 500;

// for (let i = 0; i < studentNames.length; i++) {
//     let percentage = (studentNames[i] / totalNumbers) * 100;

//     console.log(`Score of ${studentNames[i]} is ${studentNumbers[i]}. percentage: ${percentage} %`);
// }





// Question no : 10

// let number = [3, 8, 1, 2];

// number.sort();

// console.log(number);





// Question no : 11

// let cities = ["Karachi","lahore","Islamabad","Quetta","Peshawar"];


// let selectedCities = cities.slice(3);


// console.log("Cities list:", cities);
// console.log("Selected Cities list: " + selectedCities);






// Question no : 12


// let array = ["This","is","My","Cat"];
// console.log(array);

// let a = array.join()
// console.log(a);


// Question no : 15



// let BrandName = ["Samsung", "Motorola", "Nokia", "Oppo", "Iphone"]
// // console.log(BrandName.length);

// document.write("<select>")

// for (let i = 0; i < manufacturers.length; i++) {
//     document.write("<option>" + manufacturers[i] + "</option>");
// }

// document.write("</select>")











// JAVASCRIPT CHAPTER 17 TO 20


// Question no : 1
// (Array of arrays)

// let multiArray = [
//     [],
//     [],
//     [],
// ];
// console.log(multiArray);



// Question no : 2

// let matrix = [
//     [0, 2, 1, 2],
//     [1, 3, 0, 2],
//     [2, 0, 3, 3],
// ]
// console.log(matrix);






// Question no : 3

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// };





// Question no : 5


// let fruits = ["apple", "banana", "mango", "orange",
//     "strawberry"];

// for (let i = 0; i <= fruits.length; i++) {
//     console.log(fruits[i]);
// }


// Question no : 6


// Part A:
// for (let i = 1; i <= 15; i++) {
//     console.log(i);

// }

// Part B:
// for (let i = 10; i >= 1; i--) {
//     console.log(i);

// }


// Part C:
// for (let i = 0; i <= 20; i += 2) {
//     console.log(i);
// }


// Part D:
// for (let i = 1; i < 20; i += 2) {
//     console.log(i);
// }


// Part E:
// for (let i = 2; i <= 20; i += 2) {
//     console.log(i+"k");
// }



// Question no : 8

// let array = [45, 30, 25, 50, 20];

// let large =array[0];

// for (let i =0; i< array.length; i++){
//     if (array[i]>larger){
//         larger = array[i];
//     }
// }
// console.log("The largeest number is: " +large);





// Question no : 9

// let array = [45, 30, 25, 50, 20];

// let smallest = array[0];

// for (let i = 0; i < array.length; i++) {
//     if (array[i] < smallest) {
//         smallest = array[i];
//     }
// }
// console.log("The smallest number is: " + smallest);






// Question no : 10

// for (let i = 5; i <= 100; i += 5) {
//     console.log(i);
// }



