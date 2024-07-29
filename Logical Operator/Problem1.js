/*  Problem 1
Voting Eligibility: Write a program that checks whether a person can vote.
To be eligible, a person must be at least 18 years old and a citizen of the
country */

let age=32, citizen="India"         //change the value and check the result.
if (age>=18 && citizen=="India") {
    console.log("You're Eligible");
} else {
    console.log("You're Not Eligible");
}