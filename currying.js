// let multiply = function(x,y){
//     console.log(x * y);
// }

// let multiply = function(x){
//     return function(y){
//         console.log(x * y);
//     }
// }


// let multiplyBYTwo = multiply(2); //2 is  as the value of x
// multiplyBYTwo(3);

// let multiplyBYThree = multiply.bind(this,3); //2 is  as the value of x
// multiplyBYThree(5);

// let multiplyBYThree = multiply(3);
// multiplyBYThree(5);

// CALL , APPLY AND BIND


// var obj = { num:2};

// var addtothis = function(a){
//     return this.num + a;
// };

// console.log(addtothis.call(obj,8));//functionname.call(obj,functionarguments);



// ANSWER 4.
// var Student = {age : 25}

// var age = function(){
//     return this.age;
// }
// console.log(age.call(Student));




// var obj = { num:2};

// var addtothis = function(a,b,c){
//     return this.num + a + b + c;
// };

// console.log(addtothis.call(obj,8,10,12));



// var obj = { num:2};

// var addtothis = function(a,b,c){
//     return this.num + a + b + c;
// };
// var arr =[1,2,3];
// console.log(addtothis.apply(obj,arr));

// var obj = { num:2};
// var obj2 = {num:5};

// var addtothis = function(a,b,c){
//     return this.num + a + b + c;
// };
// var arr =[1,2,3];
// console.log(addtothis.apply(obj,arr));
// console.log(addtothis.apply(obj2,arr));

// var obj = { num:2};


// var addtothis = function(a,b,c){
//     return this.num + a + b + c;
// };
// var arr =[1,2,3];
// var bound = addtothis.bind(obj);

// console.log(bound(1,2,3));

// var obj = {num : 2};
// var functionname = function(arg1,arg2,arg3){

// };

// functionname.call(obj,arg1,arg2,arg3);

// functionname.apply(obj,[arg1,arg2,arg3]);

// var bound = functionname.bind(obj);
// bound(arg1,arg2,arg3);