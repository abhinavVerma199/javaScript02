// console.log('hello duniya');

// let lastName = 'abhinav';

// let firstName = new String('Love');

// -- Template Literal ---
// let message = 'This is \n my first \n Message';

// let message =
// `Hello abhinav

// Thanks for the Opportuninty

// Regards,
// Abhinav`;
// console.log(message);

// let words = message.split(' ');

// console.log(words);

// ---Date and Time---in js---

// let date = new Date();

// let date2 = new Date('June 20 1998 07:15');

// let date3 = new Date(1998, 6,20,7)
// console.log(date);

// date3.setFullYear(1947);

// console.log(date3);


// ---arrays ---
/*
let numbers = [1,4,5,7];

console.log(numbers);*/
//  --insertion--
//end -> push method
//beginning -> unshift
//middle -> splice


// -- Searching--
// console,log(numbers);

// console.log(numbers.indexOf(9));

// //we want to check if a number exist in an array
// if(numbers.indexOf(10) != -1)
// console.log("present");

// console.log(numbers.includes(7));

// console.log(numbers)

// ----Combining and slicing array----


// --- Combining Array---
// let first = [1,2,3];
// let second = [3,4,56,];

// let combined = first.concat(second);

// console.log(combined);

// ---Slicing Array--

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));


/*  ---finding array---
let courses = [
    {no:1, naam:'Love'},
    {no:2, naam:'Rahul'}
];



console.log(courses);


// console.log(courses.includes({no:1, naam:'Love'}));

// 

let course = courses.find(function(course) {
    return course.naam == 'Love';

})
//  oR ----
// let course = courses.find(course => course.naam === 'Kilvish');

console.log(course);

*/

// ---Removing Element----

// let numbers = [1,2,3,4,5,6,7];

// //end
// numbers.pop();
// //beginning
// numbers.shift();
// //middle
// numbers.splice(3,2);

// console.log(numbers);

// ---- emptying an array---
// let numbers = [1,2,3,4,5];
// let numbers2 = numbers;

// // numbers = [];
// // numbers.length = 0;
// //numbers.splice(0,numbers.length);

// console.log(numbers);
// console.log(numbers2);

// ---Combining & slicing Array----

// let first = [1,3,4];
// let second = [4,5,6];

// let combined = first.concat(second);

// console.log(combined);

// //--slice--
// let marks = [10,20,30,40,50,60,70,80];
// let sliced = marks.slice();
// // let sliced = marks.slice(2);
// // let sliced = marks.slice(2,6);
// console.log(sliced);


// ---Spread Operator---(combined)
// let first = [1,2,3];
// let second = [4,5,6];

// let combined = [...first,'a',false,...second,'b', true];
// console.log(combined);


// //----copy kaise create karu--
// let another = [...combined];

// // ---- Iterating An Array---(traversal array)

// let arr = [10,20,30,40,50];
// //for-of-loop
// for(let value of arr){
//     console.log(value);
// }

// // for-each-loop
// //arrow function
// arr.forEach(number => console.log(number));



// ---- Joining Arrays --
// let numbers = [10,20,30,40,50];
// const joined = numbers.join(',');

// console.log(joined);

// --- split arrays--
//-- string method basically hota hai---

// let message = 'This is my first message';
// let parts = message.split(' ');

// console.log(parts);

// let joined = parts.join('_');
// console.log(joined);



// ---Sorting Arrays---
// let numbers = [40,30,10,20,50];

// numbers.sort();

// console.log(numbers);

// // -- Reverse arrays--
// numbers.reverse();
// console.log(numbers);




// ----Filtering Arrays----

// let numbers = [1,2,-1,-4];

// let filtered = numbers.filter(value = value >= 0);

// console.log(filtered);



// ----Mapping Arrays----

// let numbers = [7,8,9,10];

// console.log(numbers);

//  let items = numbers.map(value => 'student_no' + value);
//     return 'student_no' + value;
// console.log(items);


// ---Mapping with objects---
let numbers =[1,2,-6,-9];
let filtered = numbers
    .filter(value => value >= 0)
     .map(num => {value: num});  //covert arrow function

console.log(items);