// a();

 // this is function statement and also called as the function declaration
// function a() {    
// console.log("a is called");
// }
// this is function expression
// var b = function() {            
//     console.log("b is called");
 
// }

// b();

// a function without a name is called as the anonymous function but it is also a function statement without name.
//  they are use as a value . we can assign a anonymous function to a variable.
// function (){

// }

//  Named function expression 
// var c = function xyz(param1,param2) {            
//     console.log(xyz);
    
//  param1,param2 - they are parameters
// }
// c(1,2);
// 1,2 are arguments
//  we cannot call xyz out side its scope
// like this
//  it show a reference error that xyz is not defined
// xyz();


//  first class function 
//  the ability to use function as a value , we can also pass a function inside a function
// also we return a function from the function and can be passed as a argument in another function


// var c = function (param1) {            
//     return function xyz(){

//     }
// }
// console.log(c());

// b(function(){
    
// });

// first class citizen is also a first class function.



// fun1()()()

// const fun2 = fun1()
// const fun3 = fun2()
// fun3();


// function fun1(){
//     console.log('function 1 called');
//     return function fun2(){
//         console.log('function 2 called');

//         return function fun3(){
//             console.log('function 3 called');

//     }
// }
// }

// fun1()()();

// var getA = function(a){
//     return a;
// };
// let getA  = a => a;
// console.log(getA(1)); 

// let square  = a => a*a;
// console.log(square(3)); 

// let square1  = (a) => { return a*a};
// console.log(square1(4)); 



// var a =5;
// let square2  = () => { return a*a};
// console.log(square2());

// var a =6;
// let square3  = _ => { return a*a};
// console.log(square3());


// let mult  = (a,b,c) => { return a*b*c};
// console.log(mult(5,8,3));


// why we use fat arrow function:-
// var x = function(){
//     var that = this;
// this.val = 1;
// setTimeout(function(){
//     that.val++;
//     console.log(that.val)
// } ,1)
// };
// var x = new x();
// output is 2 ,with this.

// var x = function(){
// this.val = 1;
// setTimeout(() => {
//     this.val++;
//     console.log(this.val)
// } ,1)
// };
// var x = new x();

//  fat arrow does not have argument variable

// var x = (...n) => {
//     console.log(n[0])
// };
//  x(1,2,3);

// This inside the global scope
// this.table = 'window table';
// console.log(this.table);
//  this.garage = {
//     table:'garage table',
//     cleanTable() {
//         console.log(`cleaning ${this.table}`)
//     }
//  };

//  console.log(this.garage.table);

// This inside an object

// let johnsroom = {
//     table :'johns tabele'
// };

// console.log(johnsroom.table);

// this inside a method

// let johnsroom = {
//         table :'johns tabele',
//         cleanTable() {
//             console.log(`cleaning ${this.table}`)
//         }
//     };
    
    // console.log(johnsroom.table);
// johnsroom.cleanTable();    


// this inside a finction
// this.table ='window table';

// const cleanTable = function(){
//     console.log(`cleaning ${this.table}`)
// }; 

// we cannot use this inside a function
// sp for this we use call function
// this.table ='window table';

// const cleanTable = function(soap){
//     console.log(`cleaning ${this.table} using ${soap}`);
// }; 
// cleanTable.call(this,'some soap');

// this inside an inner function

// this.table ='window table';

// const cleanTable = function(soap){
//     let that = this;
//     const innerFunction =function(_soap){
//         console.log(`cleaning ${that.table} using ${soap}`);
//     }
//     innerFunction(soap);
// }; 
// cleanTable.call(this,'some soap');

// 2nd method
// this.table ='window table';

// const cleanTable = function(soap){

//     const innerFunction =function(_soap){
//         console.log(`cleaning ${this.table} using ${soap}`);
//     }
//     innerFunction.call(this,soap);
// }; 
// cleanTable.call(this,'some soap');

// 3rd solution
// this.table ='window table';

// const cleanTable = function(soap){

//     const innerFunction =function(_soap){
//         console.log(`cleaning ${this.table} using ${soap}`);
//     }
//     innerFunction.bind(this)(soap);
// }; 
// cleanTable.call(this,'some soap');


// this.table ='window table';

// const cleanTable = function(soap){

    // const innerFunction = (_soap) => {
    //     console.log(`cleaning ${this.table} using ${soap}`);
    // }
//     // innerFunction(soap);
// }; 


//  this inside a constructor
// let createroom = function(name){
//     this.table =`${name}s table`
// };

// createroom.prototype.cleanTable = function(soap){
//     console.log(`cleaning ${this.table} using ${soap}`);
// }

// const jillsroom = new createroom('jill');
// const johnsroom = new createroom('john');
// cleanTable.call(this,'some soap');
// cleanTable.call(jillsroom,'some soap');
// cleanTable.call(johnsroom,'some soap');

// jillsroom.cleanTable('some soap');
// johnsroom.cleanTable('some soap');

// this inside a class

// this.table ='window table';
// class createroom {
//     constructor(name){
//         this.table =`${name}s table`
//     }
//     cleanTable(soap){
//         console.log(`cleaning ${this.table} using ${soap}`);

//     }
// }

// const jillsroom = new createroom('jill');
// const johnsroom = new createroom('john');

// jillsroom.cleanTable('some soap');
// johnsroom.cleanTable('some soap');


// var getA = function(a){
//     return a;
// };

// let getA = a => a;

// console.log(getA(1));

// let sq = a => a*a;


// var a = 4
// let sq = () => {return a*a};
// console.log(sq());


// var a = 4
// let sq = _ => {return a*a};
// console.log(sq());


// var a = 4
let mult = (a,b) => {return a*b};
console.log(mult(2,4));

