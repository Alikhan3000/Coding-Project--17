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

//Task 2: Create a SalesRep Class

class SalesRep {                        //created a class with 2 properties (1 string, 1 array) 
    constructor (name, clients){
        this.name = name;
        this.clients = [];
    }

addClient(customer) {                   //created a function to add clients to the array 
    this.clients.push(customer);
}

getClientTotal(name) {                  //created a function that returns client's total spending by name
    for (let client of this.clients){   
        if (client.name === name){
            return client.getTotalSpent();
        }}
    
            return `Customer ${name} does not exits`    //returns an error if customer name is not found
}}

//created a test variable
let salesRepresentative1 = new SalesRep("Alikhan Nasyrbekov");
salesRepresentative1.addClient(customer);
//logged sales reps details, client database, and representative's clients' total spending 
console.log(`${salesRepresentative1.name} - Sales Representative`);
console.log(`${salesRepresentative1.name}'s Existing Client Database: ${salesRepresentative1.clients.map(c => c.name).toString()}`);
console.log(`${salesRepresentative1.name}'s total client spending: $${salesRepresentative1.getClientTotal("Grace Hopper")}`);