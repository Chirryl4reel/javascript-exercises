// Question 16
let character = "A";
if (character >= "A" && character <= "Z") {
  console.log("Uppercase letter");
} else if (character >= "a" && character <= "z") {
  console.log("Lowercase letter");
} else {
  console.log("Neither uppercase nor lowercase");
}
//Uppercase letter

// Question 17
let driverAge = 25;
let hasLicense = true;
if (driverAge >= 18 && hasLicense) {
  console.log("Can drive");
} else {
  console.log("Cannot drive");
}
//Can drive

// Question 18
let totalAmount = 1000;
let isMember = true;
let finalAmount;

if (isMember) {
  finalAmount = totalAmount * 0.8;
} else {
  finalAmount = totalAmount * 0.95;
}
console.log("Final amount:", finalAmount);
//Final amount: 800

// Question 19
let number = 15;
for (let i = 1; i <= number; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
//3
//6
//9
//12
//15

// Question 20
let hour = 14;
if (hour >= 5 && hour <= 11) {
  console.log("Good morning");
} else if (hour >= 12 && hour <= 17) {
  console.log("Good afternoon");
} else if (hour >= 18 && hour <= 21) {
  console.log("Good evening");
} else {
  console.log("Good night");
}
//Good afternoon