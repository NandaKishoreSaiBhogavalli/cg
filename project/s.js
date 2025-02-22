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