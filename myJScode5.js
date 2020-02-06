const Item = function(name,type,price) { 
    this.name = name;
    this.type = type;
    this.price = price;
}

const Client = function(firstname,lastname,amount) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.amount = amount;
}

const Hystory = function(time,nameClient,nameItem,typeItem,kolItem,sumItem) {
  this.time = time;
  this.nameClient = nameClient;
  this.nameItem = nameItem;
  this.typeItem = typeItem;
  this.kolItem = kolItem;
  this.sumItem = sumItem;
}

const Shop = function() {
  this.Items = [];
  this.Clients = [];
  this.Hystorys = [];
  
  this.addItems = (name, type, price) => {
    let item = new Item(name, type, price);
    this.Items.push(item);
  }

  this.delItems = (index) => {
    this.Items.splice(index,1);
  }

  this.addClients = (firstname, lastname, summa) => {
    let item = new Client(firstname, lastname, summa);
    this.Clients.push(item);
  }

  this.delClients = (index) => {
    this.Clients.splice(index,1);
  }

  this.ost = (idItem) => { //здесь упрощённо. Если бы нужна была глубокая проверка, то вставила бы функцию из 2-го задания )))
    let kol = 0;
    findstr = Object.values(this.Items[idItem]).join('');
    for (let i = 0; i < this.Items.length; i++) {
      if (Object.values(this.Items[i]).join('') === findstr) {
        kol++;
        this.delItems(i);
        i--;
      }
    }
  return kol;
  }

  //продажа товара клиенту
  this.sales = (data,idClient,idItem,kol) => {
    let price = this.Items[idItem].price;
    let nameClient = this.Clients[idClient].firstname+' '+this.Clients[idClient].lastname;
    let nameItem = this.Items[idItem].name;
    let typeItem = this.Items[idItem].type;    
    let ost = this.ost(idItem);
    if (kol > ost) {
      kol = ost;
      console.log('Запрос выше остатков. Выдаём сколько есть');
    }
    if (kol > 0) {
      let summa = kol * price;  
      let item = new Hystory(data,nameClient,nameItem,typeItem,kol,summa);
      this.Hystorys.push(item);
      this.Clients[idClient].amount += summa ;
    }
  }
}

let myShop = new Shop;

myShop.addItems('boots','choses',100);
myShop.addItems('boots','choses',100);
myShop.addItems('coat','clothes',200);
myShop.addItems('coat','clothes',300);
myShop.addItems('car','cars',2000);
myShop.addItems('fish','fishes',10);
myShop.addItems('meet','meets',10);
myShop.addItems('meet','meets',10);
myShop.addItems('meet','meets',10);
myShop.addItems('meet','meets',15);
myShop.addItems('meet','meets',15);

myShop.addClients('Jhon','Smith',0);
myShop.addClients('Mat','Mating',0);
myShop.addClients('Ivan','Ivanov',0);

myShop.sales('03-12-2019',1,4,2); //покупаем машину
myShop.sales('03-12-2019',1,6,3); //покупаем мясо в уже обновленном массиве Товаров

console.log(myShop);
