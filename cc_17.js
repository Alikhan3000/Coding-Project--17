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
console.log(`Customer Name: ${customer.name}`);
console.log(`Customer Email: ${customer.email}`);
console.log(`Total Amount Spent: $${customer.getTotalSpent()}`);

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


// Task 3: Create a VIPCustomer Class (extends Customer)

class VIPCustomer extends Customer{             //created a class that extends customer class
    constructor(name, email, vipLevel){
        super(name, email);                     //inherited customer class properties using super
        this.vipLevel = vipLevel;               //added additional property 
    }
getTotalSpent(){                                //overrided getTotal spent() using super  
    const vipTotal = super.getTotalSpent();
    const bonus = super.getTotalSpent() * 0.10; //applied 10% bonus for the vip customers
    return bonus +  vipTotal;
}
 
}

//created a test variable and assigned vip class
let VipCustomer1 = new VIPCustomer("Rithvik Smith", "rivsmth@uclc.edu", "Platinum");
VipCustomer1.addPurchase(5000);
VipCustomer1.addPurchase(450);
VipCustomer1.addPurchase(78.99);
//logged vip client's information and total spending including bonus
console.log(`VIP Customer Name: ${VipCustomer1.name}`)
console.log(`VIP Customer Email: ${VipCustomer1.email}`)
console.log(`VIP Level: ${VipCustomer1.vipLevel}`)
console.log(`Total Amount Spent: $${VipCustomer1.getTotalSpent().toFixed(2)}`)


// Task 4: Build a Client Report System

let VipCustomer2 = new VIPCustomer("Sergey Brin", "sergeybrin@uclc.edu", "Platinum");   //created 1 vip and 2 regular customers and assigneed values using addPurchase function 
VipCustomer2.addPurchase(100);
VipCustomer2.addPurchase(200);
VipCustomer2.addPurchase(500);

let customer2 = new Customer("Larry Page", "pagelarry@gmail.com");
customer2.addPurchase(45);
customer2.addPurchase(86);
customer2.addPurchase(300);

let customer3 = new Customer("Steve Ballmer", "ballmers@apple.icloud");
customer3.addPurchase(50);
customer3.addPurchase(480);
customer3.addPurchase(20);

const regularVipClients = [customer, customer2, customer3, VipCustomer1, VipCustomer2]; //created an array to store all the client data

const revenue = regularVipClients.reduce((sum, total) => sum + total.getTotalSpent(), 0);   //used reduce to calculate the total amount spent by all customers in the array

const HighSpendClients = regularVipClients.filter(c => c.getTotalSpent() > 500)         //used filter to only include customers with > $500 spending


const customerData = regularVipClients.map(c => {               //used map to create an array of customers' names and their total individual spending
    return {
        name: c.name,
        totalAmount: `$${c.getTotalSpent().toFixed(2)}`
    }
})

console.log(`Total Revenue: $${revenue.toFixed(2)}`)        //logged total revenue (all customers' total spending)

for (const client of HighSpendClients){                     //created a loop of high spending clients and printed their names and total spending
    console.log(`High-spending customer: ${client.name}, Spending: $${client.getTotalSpent().toFixed(2)}`)
} 

console.log("Customer summary:")                        //logged customer summary (each clients' name + their spending)
customerData.forEach(customerD =>{
    console.log(`${customerD.name}, ${customerD.totalAmount}`)
})