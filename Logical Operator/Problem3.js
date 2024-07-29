/* Problem 3
Online Shopping Discount: Build an online shopping website that discounts
orders. Customers are eligible for the discount if they purchase at least two
items (numItems >= 2) and the total order value exceeds 5000
(totalOrderValue > 5000). */

let numItems=2, totalOrderValue=5100     //change the value and check the result.
if (numItems>=2 && totalOrderValue>5000) {
    console.log("You're Eligible for discount");
} else {
    console.log("Sorry, you're not Eligible for discount. Please purchase atleast 2 items and that will make your total order value more than 5000 then, you're eligible for discount.");
}