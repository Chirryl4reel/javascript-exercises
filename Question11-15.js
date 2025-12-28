// Question 11
let marks = 85;
let grade;

if (marks >= 90) {
  grade = "A";
} else if (marks >= 80) {
  grade = "B";
} else if (marks >= 70) {
  grade = "C";
} else if (marks >= 60) {
  grade = "D";
} else {
  grade = "F";
}
console.log("Grade:", grade);
//Grade: B

// Question 12
let length = 5;
let width = 10;
let area = length * width;
let perimeter = 2 * (length + width);
console.log("Area:", area);
console.log("Perimeter:", perimeter);
//Area: 50
//Perimeter: 30

// Question 13
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("A Leap year");
} else {
  console.log("Not a leap year");
}
//A Leap year

// Question 14
let checkNumber = 47;
if (checkNumber % 3 === 0 && checkNumber % 5 === 0) {
  console.log("Divisible by both 3 and 5");
} else if (checkNumber % 3 === 0) {
  console.log("Divisible by 3 only");
} else if (checkNumber % 5 === 0) {
  console.log("Divisible by 5 only");
} else {
  console.log("Not divisible by 3 or 5");
}
//Not divisible by 3 or 5

// Question 15
let subject1 = 78;
let subject2 = 85;
let subject3 = 92;
let average = (subject1 + subject2 + subject3) / 3;

if (average >= 90) {
  console.log("Excellent");
} else if (average >= 75) {
  console.log("Good");
} else if (average >= 60) {
  console.log("Average");
} else {
  console.log("Needs improvement");
}
//Good