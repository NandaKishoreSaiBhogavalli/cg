// // Array is a collection of items which can store similiar or unsimiliar datatype values and resizable typically a list in python
// // CRUD operations are also allowed in array
// // declaration of array syntax: arr = [item1, item2,.....]
 let arr = [1,2,3,4,5]
 console.log(arr)
// // Read syntax for array : arr_name[index]
// console.log(arr[0])
// console.log(arr[5])// undefined bcoz there is no 5 index, only 0-4 indexes are there
// // Update syntax for array :  arr_name[index] = value
// arr[0] = 10
// console.log(arr)
// arr[5] = 20// if tried to change array index of 5 which is not there then index of 5 will be added to the new value which is 20
// console.log(arr)
// arr[10] = 30
// console.log(arr)  // [ 10, 2, 3, 4, 5, 20, <4 empty items>, 30 ]  remaining indexes in middle will be empty and the index of 10 will be 30

// let arr1 = []  // creating empty array
// console.log(arr1)
// arr1[0] = 10 // appending element to empty array
// arr1[1] = 20
// console.log(arr1)

// //delete syntax : delete arr_name[index]   and sometimes it will be behaving like jingilala
// delete arr[0]  //[ <1 empty item>, 2, 3, 4, 5, 20, <4 empty items>, 30 ]  item will be deleted and will be shown empty item, after deletion size wont decrease it remains same just shows empty element
// console.log(arr)

// // objects inside objects,array

// let details = {
//   name : "abc",
//   email : "abc@gmail.com",
//   password : "abc@123",
//   marks : {
//     phy : 99,
//     maths : 100,
//     chem : 50
//   },
//   address : {
//     city : "hyd",
//     state : "TG",
//     pincode : 110011
//   },
//   hobbies : ["reading","coding","playing"]
// }
// // to retreive it, the syntax is obj_name.inside_obj_name[index] this is retrieving arrays
// console.log(details.hobbies[2])
// // to retreive it, the syntax is obj_name.inside_obj_name.inside_obj_name
// console.log(details.marks.phy)
// console.log(details.address.pincode)
// console.log(details.hobbies[0])


 // arrays inside objects
 let users = [
   {email : "abc@gmail.com",password : "abc123"},
   {email : "xyz@gmail.com",password : "abc123"},
   {email : "ghi@gmail.com",password : "abc123"},
   {email : "klm@gmail.com",password : "abc123"}
 ]
 console.log(users[0])
 console.log(users[0].password)

// // we can store homogeneous and hetrogenous data inside an arra it can be of number,obj,boolean,and array too
// let arr3 = [1,2,3,4,"abc",false,{},[]]
// console.log(arr3)


// //loops : for,while,do-while
// // syntax for, for loop :  for(expression1;expression2;expression3){  //statements  }   // expression1 -> variable,expression2 -> condition,expression3 -> updation

// for(let i=0; i<=10;i++){     //expression1 -> variable,expression2 -> condition,expression3 -> updation
//   console.log(i)
// }

// let j = 0
// for(;j<=5;j++){
//   console.log(j)
// }

// //print 10 Natural numbers
// for(k=1;k<=5;k++){
//   console.log(k)
// }

// //print even numbers nd odd numbers
// let start = 10
// let end  = 30
// for(i=start;i<=end;i++){
//   if(i%2==0){
//     console.log("even=" +i) // + for concatinating string and integer
//   }
//   else{
//     console.log("odd=" +i)
//   }
// }

// //sum of n even numbers
// let first = 10
// let last  = 30
// let even_sum = 0

// for(i=first;i<=last;i++){
//   if(i%2==0){
//     even_sum +=i
//   }
// }
// console.log(even_sum)

// //sum of n odd numbers
// let ofirst = 10
// let olast  = 30
// let odd_sum = 0

// for(i=ofirst;i<=olast;i++){
//   if(i%2!=0){
//     odd_sum +=i
//   }
// }
// console.log(odd_sum)

// //print 10 natural numbers in reverse order
// for(let i=10;i>0;i--){   //expression2 i>0 says that i should be greater than 0 then only loop executes, so it checks i=10 so i>0 so true loop executes, everytime it checks it will be 10,9,8..1 and when 0, i>0 is false so loop terminates from here
//   console.log(i);
// }

// //print 10 natural numbers in reverse order of step2
// for(let i=10;i>=0;i=i-2){
//   console.log(i);
// }

 // checking factors for given number
 let givenNum = 7
 let count = 0
 for(let i=1;i<=givenNum;i++){
   if(givenNum%i==0){
     count++
     console.log(i)
   }
 }
 console.log("count = "+count)

// checking prime
let givenNums = 7
let counter = 0
for(let i=2;i<givenNums;i++){
  if(givenNums%i==0){ // this block checks the factor refer previous code for factor code
    counter++

  }
}
if(counter==0){  //if the factors are 0 then it is a prime number bcoz we start iteration from 2 and stop before the given number i<givenNums
  console.log(givenNums+" is a prime number")
}
else{
  console.log(givenNums+" is not a prime number")
}

console.log(Math.trunc(1.4)) // this removes decimal value its like a floor decimal


// checking prime
let givenum = 10
let countr = 0
for(let i=2;i<=Math.trunc(givenum/2);i++){
  if(givenum%i==0){ // this block checks the factor refer previous code for factor code
    countr++
    break;  // iteration will be once for this 10 bcoz, after for loop it checks if block when 10%2==0 the countr moves from 0 to 1, then break, so if 10%2!=0 it wont enters if block and traverse 10%3, 10%4 and checks it iterates neeku telusu gudha musukuni explan cheyaku
  }
}
if(countr==0){  //if the factors are 0 then it is a prime number bcoz we start iteration from 2 and stop before the given number i<givenNums
  console.log(givenum+" is a prime number")
}
else{
  console.log(givenum+" is not a prime number")
}


// tasks for the day
// 