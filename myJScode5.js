const Item = function(id,name,type,price) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.price = price;
}

const Client = function(id,firstname,lastname,amount) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.amount = amount;
}

const Shop = function() {
}

let choes = new Item(1,'choes',100);
let coat = new Item(2,'coat',200);
let car = new Item(3,'car',2000);