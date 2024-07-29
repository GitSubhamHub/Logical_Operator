/* Problem 2
Discount Eligibility: Create a program for a store that offers a discount on a
purchase. To receive the discount, customers must have a valid
membership card (hasMembershipCard) and spend more than 2000 */

let customer="hasMembershipCard", spend=2100       //change the value and check the result.
if (customer=="hasMembershipCard" && spend>2000) {
    console.log("You're Eligible to take discount");
} else {
    console.log("Sorry, you're Not Eligible to take discount. Please purchase more than 2000 to take discount.");
} 