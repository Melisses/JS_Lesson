import Item from './modules/items/items';
import Client from './modules/clients/clients';
//import Sales from './modules/sales/sales';
import Shop from './modules/shop/shop';

let myShop = new Shop;

let item01 = new Item(1,'boots','choses',100),
item02 = new Item(2,'boots','choses',100),
item03 = new Item(3,'coat','clothes',200),
item04 = new Item(4,'coat','clothes',300),
item05 = new Item(5,'car','cars',2000),
item06 = new Item(6,'fish','fishes',10),
item07 = new Item(7,'meet','meets',10),
item08 = new Item(8,'meet','meets',10),
item09 = new Item(9,'meet','meets',15),
item10 = new Item(10,'meet','meets',15),
item11 = new Item(11,'meet','meets',15);

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

let client01 = new Client(1,'Jhon','Smith'),
client02 = new Client(2,'Mat','Mating'),
client03 = new Client(3,'Ivan','Ivanov');

myShop.addClients(client01);
myShop.addClients(client02);
myShop.addClients(client03);
console.log(myShop); // первоначальный магазин

myShop.sales(client01,'meet',3);
myShop.sales(client01,'car',2);
console.log(myShop); //просле продаж

console.log(myShop.profit()); //наша прибыль
console.log(myShop.realSklad()); //наши остатки на складе
console.log('Остатки типов товаров на складе:',myShop.itemsSklad());
console.log('Продано типов товаров:',myShop.itemsSaled());
console.log('Куплено товаров клиентом:',client01.itemClient()); //можно посмотреть товары одного клиента
console.log(myShop.itemsClient()); //подсчитываем количество купленных товаров у клиентов