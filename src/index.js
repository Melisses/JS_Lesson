import Item from './modules/items/items';
import Client from './modules/clients/clients';
import Sales from './modules/sales/sales';
import Shop from './modules/shop/shop';

let item01 = new Item('boots','choses',100),
item02 = new Item('boots','choses',100),
item03 = new Item('coat','clothes',200),
item04 = new Item('coat','clothes',300),
item05 = new Item('car','cars',2000),
item06 = new Item('fish','fishes',10),
item07 = new Item('meet','meets',10),
item08 = new Item('meet','meets',10),
item09 = new Item('meet','meets',10),
item10 = new Item('meet','meets',15),
item11 = new Item('meet','meets',15);

let client1 = new Client('Jhon','Smith'),
client2 = new Client('Mat','Mating'),
client3 = new Client('Ivan','Ivanov');

const myShop = new Shop();
myShop.addItems(item01);
myShop.addItems(item02);
myShop.addItems(item03);
myShop.addItems(item04);
myShop.addItems(item05);
myShop.addItems(item06);
myShop.addItems(item07);
myShop.addItems(item08);
myShop.addItems(item09);
myShop.addItems(item10);
myShop.addItems(item11);

myShop.addClients(client1);
myShop.addClients(client2);
myShop.addClients(client3);

console.log(myShop);