// Prompt user for their age
let age = prompt("Enter your age:");

// Convert the input to a number
age = Number(age);
// Use nested if-else to categorize based on age
if (age < 4) {
    console.log("Toddler");
} else if (age >= 5 && age <= 12) {
    console.log("Child");
} else if (age >= 13 && age <= 19) {
    console.log("Teenager");
} else if (age >= 20 && age <= 35) {
    console.log("Young Adult");
} else if (age >= 36 && age <= 59) {
    console.log("Middle-Aged");
} else if (age > 60) {
    console.log("Senior");
} else {
    console.log("Invalid input, please enter a valid age.");
}