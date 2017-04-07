// Challenge 1
// var sizeLength = prompt("Give me a number")
// function stringy(sizeLength) {
//
//   var random = "";
//   for (var i = 0; i < sizeLength; i++){
//     random += i%2 === 1? "0" : "1";
//
//   }
//   return random;
// }
// // stringy(15);
// console.log(stringy(sizeLength));

//Challenge 2
// var numReverse = function(num) {
//   //This will prompt the user to input whatever numbers they want
//   var stringnumby = prompt("Give me numbers")
//   //This will split the digits into an array of digits then reverse the digits
//   var reversenumby = stringnumby.split("").reverse().join('')
//
//   return reversenumby
// }
// console.log(numReverse())

//Challenge 3
//
// var fib = function (number) {
//   var dafibonacci = [];
//   //created an array called dafibonacci
//   for(var i = 0; i <= number ; i++){
//     if (i === 0){
//       dafibonacci.push(0)
//       //This will push 0 to the array
//     } else if (i === 1) {
//       dafibonacci.push(1)
//       //This will push 1 to the array
//     }
//      else if(i >= 2){
//       dafibonacci.push(dafibonacci[i-1] + dafibonacci[i-2])
//          //This will get the value of the index and add it to the value of the first index and push that to the array
//     }
//
//   }
//   return dafibonacci
//   //returns array to function
// }
// console.log(fib(10));

//Challenge 4
function checkCoupon(coupdate) {
  var date = new Date(coupdate)
  //setting coupon date
  var expireday = new Date
  //setting the expiration date to today
  expireday.setHours(0,0,0,0)
  //setting the time of expiration date to midnight
  if (date >= expireday){
    //comparing date on coupon to expiration date if date on coupon is greater or equal to today' date then the coupon is good
    return true
  } else {
    //if the date on the coupon is before today's date then it is expired
    return false
  }
}
//calling the function and passing it in a date on a coupon
console.log(checkCoupon("April 7, 2017"))
