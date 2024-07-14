// console.log('kya haal');


//function call or invoke

// run();

// function run(){
//     console.log('running');
// }


// // Named function assignment
// let stand = function walk() {
//     console.log('walking');
// };

// //Anonymous function assignment
// let stand2 = function(){
//     console.log('walking');
// };

// stand();

// let jump = stand;

// jump();

// stand2();

// 

// let x = 1;
// x = 'a';

// console.log(x);

// function sum(){
//     let total = 0;
//     for(let value of arguments)
//     total = total + value;
//     return total;
// }

// // console.log(sum(1,2));
// // console.log(sum(1));
// // console.log(sum());
// // console.log(sum(1,2,3,4,5));

// // let ans = sum(1,2,2,3);
// // console.log(ans);




// ------Rest operator-----
// function sum(num,...args){
//     console.log(arms);
// }

// sum(1,2,3,4,5,6);

// ----Default parameters
// function interest(p,r,y){
//     return p*r*y/100;
// }

// console.log(interest(1000,10,5));

// --- getter setter----

// getter ->access properties
// setter -> change or mutate properties

// let person = {
//     fName : 'abhinav',
//     lName : 'verma',
//     get fullName(){
//         return `${person.fName} ${person.lName}`;

//     },
//     set fullName(value){
//     if(typeof value !== String) {
//         throw new Error("You have not sent a string")
//     }

//        let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }

// };



// // console.log(person);



// //  issue -> read only

// // console.log(person.fullName);
// try{

// person.fullName = true;
// }
// catch (e){
//     alert('You have sent a number in fullName')
// }

// console.log(person.fullName);





// // ---- Erro Handling----
// //#  Try & catch



// ---- Scope ----

// {
//     var a = 5;
//     console,log(a);
// }



// function walk(){
//     var a = 5;

// }

// console.log(a);


// for(var i = 0; i<10; i++){

// }
// console.log(i);

// if(true){
//     var a = 5;
// }

// console.log(a);

// function a() {
//     const a = 5;

// }
// const ab = 5;
// function b(){
//     const a = 5;
// }

// // --- sorting
// let a = [10,5,4,25];

// a.sort(function(a,b){
//     return a-b;
// });

// console.log(a);



// -----Reducing An Array----
// let arr = [-1,-2,-3,-4];
// let total = 0;

// for(let value of arr)
// total = total + value;

// console.log(total);




// let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log("PRINTING TOTAL SUM");
// console.log(totalSum);



// const x = 5;
// const y = 6;

// console.log(`The sum of x and {y} id ${x+y}`);

// let x = 0;
// for(let i = 0; i < 5; i++){
//     x += i;
// }
// console.log(x);


// const x = [1,2,3];
// console.log(x[3]);

// const x = 5;
// const y = "5";
// console,log(x === Y);

// const x = "123";
// console.log(Number(x));


// const x = [1,2,3];
// x.push(4);
// console.log(x.length);

// let x = 5;
// function foo(){
//     let x = 10;
//     console.log(x);
// }
// foo();
// console.log(x);

// const x = [1,2,3];
// const y = x;
// x.push(4);
const x = [1,2,3];
x.forEach(function(element){
    console.log(element*2);
});
