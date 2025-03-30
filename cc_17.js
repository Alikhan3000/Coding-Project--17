// Task 1: Create a Customer Class

class Customer {                    //Created a Customer Class with 2 string properties and an array
    constructor (name, email){
    this.name = name;
    this.email = email;
    this.purchaseHistory = [];

    };

addPurchase(amount){                    //created a method that adds a purchase to the array using push
    this.purchaseHistory.push(amount)

}

getTotalSpent() {                       //created a method that returns total amount spent by combining all the values in the array into a single value using reduce
    return this.purchaseHistory.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

}}

//created a variable for the function 
let customer = new Customer("Grace Hopper", "gracehr@gmail.com")
customer.addPurchase(120);              //added some $140 for the total amount spent 
customer.addPurchase(20);      

//logged the functions' output and customer information 
console.log(`Customer name: ${customer.name}`);
console.log(`Customer email: ${customer.email}`);
console.log(`Total amount spent: $${customer.getTotalSpent()}`);

