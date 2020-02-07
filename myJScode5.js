//Задача 5. Магазин.
const Item = function(name,type,price) { //конструктор товара
    this.name = name;
    this.type = type;
    this.price = price;
}

const Client = function(firstname,lastname,amount) { //конструктор клиента
    this.firstname = firstname;
    this.lastname = lastname;
    this.amount = amount;
}

const Hystory = function(time,nameClient,nameItem,typeItem,kolItem,sumItem) { //конструктор истории продаж
  this.time = time;
  this.nameClient = nameClient;
  this.nameItem = nameItem;
  this.typeItem = typeItem;
  this.kolItem = kolItem;
  this.sumItem = sumItem;
}

const Shop = function() { //функционал магазина
  this.Items = [];
  this.Clients = [];
  this.Hystorys = [];
  
  this.addItems = (name, type, price) => { //добавить товар
    let item = new Item(name, type, price);
    this.Items.push(item);
  }

  this.delItems = (index) => { //удалить товар
    this.Items.splice(index,1);
  }

  this.addClients = (firstname, lastname, summa) => { //добавить клиента
    let item = new Client(firstname, lastname, summa);
    this.Clients.push(item);
  }

  this.delClients = (index) => { //удалить клиента
    this.Clients.splice(index,1);
  }

  //Вычисление нужного количества для продажи и удаление товара из магазина
  //Здесь упрощённо. Если бы нужна была глубокая проверка, то вставила бы функцию из 2-го задания
  this.ost = (idItem,kol) => { 
    let count = 0;
    findstr = Object.values(this.Items[idItem]).join('');
    for (let i = 0; i < this.Items.length; i++) {
      if (Object.values(this.Items[i]).join('') === findstr) {
        if (count < kol) {
          count++;
          this.delItems(i);
          i--;
        } else return count;
      }
    }
  return count;
  }

  this.sales = (data,idClient,idItem,kol) => { //продажа товара клиенту
    let price = this.Items[idItem].price;
    let nameClient = this.Clients[idClient].firstname+' '+this.Clients[idClient].lastname;
    let nameItem = this.Items[idItem].name;
    let typeItem = this.Items[idItem].type;    
    let ost = this.ost(idItem,kol); //обращаемся к складу, чтобы определить доступное количество
    if (kol > ost) { //если на складе меньше, то продаём только то, что есть
      kol = ost;
      console.log('Запрос выше остатков. Выдаём сколько есть');
    }
    if (kol > 0) {
      let summa = kol * price;  
      let item = new Hystory(data,nameClient,nameItem,typeItem,kol,summa);
      this.Hystorys.push(item);
      this.Clients[idClient].amount += summa ; //увеличиваем сумму покупок у клиента
    }

    this.profit = () => { //вычисляем количество проданного и сумму прибыли
      let count = 0;
      let summa = 0;
      for (let i = 0; i < this.Hystorys.length; i++) {
          count += this.Hystorys[i].kolItem;
          summa += this.Hystorys[i].sumItem;
      }
    return 'Количество проданых товаров - '+count+' шт. на общую сумму - '+summa;
    }

    this.realSklad = () => { //считаем остатки после продаж
      let count = 0;
      for (let i = 0; i < this.Items.length; i++) {
          count++;
      }
    return 'Количество товаров на складе - '+count+' шт.';
    }

    this.itemsSklad = () => { //сбор данных о количестве типов товаров на складе
      let itogItems = {};
      let group = '';
      for (let i = 0; i < this.Items.length; i++) {
        group = this.Items[i].type;
        if (group in itogItems) {
          itogItems[group]++;
        } else {
          itogItems[group] = 1;
        }
      }
    return itogItems;
    }

    this.itemsSaled = () => { //сбор данных о количестве проданых типов товаров
    let itogItems = {};
      let group = '';
      for (let i = 0; i < this.Hystorys.length; i++) {
        group = this.Hystorys[i].typeItem;
        if (group in itogItems) {
          itogItems[group] += this.Hystorys[i].kolItem;
        } else {
          itogItems[group] = this.Hystorys[i].kolItem;
        }
      }
    return itogItems;
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
console.log(myShop); // первоначальный магазин

myShop.sales('03-12-2019',1,4,2); //покупаем машину
console.log(myShop); //продажа машины
myShop.sales('03-12-2019',1,6,2); //покупаем мясо в уже обновленном массиве Товаров
console.log(myShop); //продажа мяса

console.log(myShop.profit()); //наша прибыль
console.log(myShop.realSklad()); //наши остатки на складе
console.log('Остатки типов товаров на складе:',myShop.itemsSklad());
console.log('Продано типов товаров:',myShop.itemsSaled());
