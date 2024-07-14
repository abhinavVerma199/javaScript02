// console.log('chaliye shuru krte hai');

//object create

// let rectangle = {
//     length: 1,
//     breadth: 2,

//     draw: function(){
//       console.log('drawing rectangle'); 
//     }
// };


// // --- Factory function

// // function createRectangle(len, bre) {

// //   return rectangle = {
// //         length: len ,
// //         breadth: bre,
    
// //         draw(){
// //           console.log('drawing rectangle'); 
// //         }
// //     };
  
// // }

// // let rectangleObj1 = createRectangle(5, 4);
// // let rectangle2 = createRectangle(2,3);
// // let rectangle3 = createRectangle(7,9);


// // -->  Camelcase -> numberOfStudents
// //  -->  constructor function -> Pascal Notation -> first letter of every is capital
// function Rectangle(len, bre){
//      this.length = len;
//      this.breadth = bre;
//      this.draw= function(){
//         console.log('drawing');
//      }
// }

// // --- object creation using constructor function
// let rectangleObject = new Rectangle(4,6);


// // -----> Dynamic Nature of objects ---
// rectangleObject.color = 'yellow';
// console.log(rectangleObject);

// delete rectangleObject.color;
// console.log(rectangleObject);




// let rectangle1 = {
//     length: 1,
//     breadth: 2,

//     draw: function(){
//       console.log('drawing rectangle'); 
//     }
// };

// let rectangle2 = {
//     length: 1,
//     breadth: 2,

//     draw: function(){
//       console.log('drawing rectangle'); 
//     }
// };


// let a = 10;
// let b = a;

// a++;
// console.log(a);
// console.log(b);

// let a = { value: 10};
// let b = a;

// a.value++;

// console.log(a.value);
// console.log(b.value);


// let a = 10;

// function inc(a) {
//   a++;
// }

// inc(a);
// console.log(a);


// let a = {value:10};

// function inc(a){
//   a.value++;

// }

// inc(a);

// console.log(a.value);


// ---- for-of loop ---
// let rectangle = {
//   length:2,
//   breadth:4
// };


// ---- for-in-loop--
// for(let key in rectangle){
//   // keys are reflected through key variable
//   // values are reflected through rectangle[key]
//   console.log(key,rectangle [key]);
// }


//  ----for of loop --
// for(let key of Object.keys(rectangle)){
//   console.log(key);
// }


// if('color' in rectangle){
//   console.log('Present');
// }
// else{
//   console.log('absent')
// }


// ----object -clone ---
// let src= {
//   a: 10,
//   b :20,
//   c :30,
// };

// let dest = {}

// for(let key in src){
//   dest[key] = src[key];
// }

//   console.log(dest);

// src.a++;
// console.log(dest);

// ----object clone second type----

// let src = {
//   a:10,
//   b:20,
//   c:30

// };

// let src2 = { value: 25};
// let dest = object.assign({}, src, src2);

// console.log(dest);

// src:a++;
// console.log(dest);


// ----object clone third type----

// let src = {
//   a:10,
//   b:20,
//   c:30

// };

// let dest = {...src};

// console.log(dest);

// src:a++;
// console.log(dest);

// ---- String ---

console.log('Hello jee');

let lastName = 'world';
lastName.length;

let firstName = new String('Love');