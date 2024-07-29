/* Problem 7
Login Authentication: program for a website login system. Users should be
authenticated if they enter the correct username and password. If the user
enters the wrong password (enteredPassword !== correctPassword),
display an error message. Use the logical NOT operator to perform this
check. */

let username='shubham', enteredPassword=123123, correctPassword=123123     //change the value and check the result.
if (enteredPassword !== correctPassword) {
    console.log("Error, you're not a valid user.");
} else {
    console.log("Welcome, you're now logged into system.");
}

