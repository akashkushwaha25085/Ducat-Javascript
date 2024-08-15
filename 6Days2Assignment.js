// Problem 1
// Write code to check if a number is positive, negative, or zero 

// var num = "akdsfsgf"

// if (num > 0) {
//    console.log("number is positive");
// }

//  else if (num == 0) {
//    console.log("number is Zero");
// } 
// else if (num<0) {
//    console.log("number is negative");
// }
// else{
//    console.log("not a number");
// }

// Write code that calculates the final grade (A, B, C, D, or F) for a student

// let grade = 30;

// // function grade(){

//    if(grade>90){
//       console.log("A");
//    }
//    else if(grade>80){
//       console.log("B");
//    }

//    else if(grade>70){
//       console.log("C");
//    }
//    else if(grade>60){
//       console.log("D");
//    }
//    else if(grade>50){
//       console.log("E");
//    }
//    else if(grade>40){
//       console.log("F");
//    }
//    else{
//       console.log("G");

//    }

// Write code that takes a user's age and checks for "You're a minor" if the
// age is less than 18, and "You're an adult" otherwise.

// var age = 16 

// if (age>=18) {
//    console.log("you are a adult");
// }
// else{
//    console.log("You are a minor ");

// }


// Write code that determines if a given year is a leap year and logs the result.

// let year = 2032

// if ((year %  4 ===0 && year % 100 !== 0) || (year % 400 === 0   )) {
//    console.log(year + ' is  a leap year ');
// } 
// else{
//    console.log(year + 'is not a leap year');

// }


// Problem 2: Marriage Eligibility Check:
// Create a JavaScript program to determine if a person is eligible for marriage
// based on their gender and age. If the person is male, check if he is 21 years or
// older; if yes, he is eligible. If the person is female, check if she is 18 years or
// older; if yes, she is eligible. Print a message indicating whether the person is
// eligible for marriage or not.


// var gender  = "male";
// var age = 23

// if (gender === "male" ) {

//   if( age >= 21){
//  console.log('it is eligible for a marriage');
//   }
// else{
//    console.log('not eligible for a marriage');
// }

// }

// else if(gender === "female"){
// if(age>= 18){
//    console.log('it  is eligible for a marriage ');
// }
// else{
//    console.log('not eligible for a marriage');
// }

// }
// else{
//    console.log('invalid gender input');
// }


// Problem 3: Driving Eligibil
// Create a program to determine if a person is eligible to obtain a driver's license.
// If the person is 16 or older, check if they have passed the written test. If they
// have passed the written test, they are eligible for a driver's license; otherwise,
// they are not eligible 

// var age = 17
// var writtenTest = true;

// if (age>=16) {
//    if(writtenTest){
// console.log('they have passed the  for dirver license ');
//    }
//    else{
//       console.log("Not eligible for a driver's license (must pass the written test)");
//    }

// } else {
//    console.log('they have not passed');

// }



// Problem 4: Online Food Ordering:
// If the order total is $50 or more, the customer is eligible for free delivery.
// If the order total is less than $50, check the customer's loyalty status:
// If the customer is a loyalty member (yes/no), they are eligible for free
// delivery.
// If the customer is not a loyalty member, check the distance from the
// restaurant to the delivery address:
// If the distance is less than 5 miles, the customer is eligible for free
// delivery.
// If the distance is 5 miles or more, delivery is not free.

// let orderTotal = 45;
// let isLoyaltyMember = false;
// let distance = 3;

// if (orderTotal >= 50) {
//    console.log('delivary is free ');

// } else {
//    if (isLoyaltyMember) {
//       console.log("delivary is free");
//    }
//    else {
//       if (distance < 5) {
//          console.log('delivary is free');

//       }
//       else {
//          console.log('delivary is not free');

//       }
//    }
// }