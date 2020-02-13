import Sales from '../sales/sales';

export default class Shop { 
  constructor () {
    this.Items = [];
    this.Clients = [];
    this.Saless = [];
  }
  
  addItems(item) {
    this.Items.push(item);
  }

  delItems(idItem) {
    this.Items.forEach((item, i) => {
      if (item.id == idItem) this.Items.splice(i,1);
    })
  }

  addClients(item) {
    this.Clients.push(item);
  }

  delClients(idClient) {
    this.Clients.forEach((item, i) => {
      if (item.id == idClient) this.Clients.splice(i,1);
    })
  }

  sales(Client,nameItem,kol) {
    let forSales = this.Items.filter((item) => {
      return item.name == nameItem;
    });

    if (!forSales) return 'Товара '+idItem+' нет на складе';

    if (kol > forSales.length) {
      kol = forSales.length;
      console.log('Запрос '+nameItem+' выше остатков. Выдаём сколько есть');
    }

    let infoItem = forSales[0];
    forSales.splice(kol); //отсекаем конечные, которые поступили позже и продаём первые, принцив FIFO
    //console.log(forSales);

    let summa = 0
    forSales.forEach((item,i) => {
      summa += item.price; //потому что у товаров с одним наименованием может быть разная цена
      Client.addItems(forSales[i]);
      this.delItems(item.id);
    });
    this.Saless.push(new Sales(Client.firstname+' '+Client.lastname,infoItem.name,infoItem.type,kol,summa));
    Client.summa += summa;
  }

    profit() {
      let count = 0;
      let summa = 0;
      this.Saless.forEach((item) => {
          count += item.kolItem;
          summa += item.sumItem;
      })
    return 'Количество проданых товаров - '+count+' шт. на общую сумму - '+summa;
    }

    realSklad() {
    return 'Количество товаров на складе - '+this.Items.length+' шт.';
    }

    itemsSklad() {
      let result = {};
      this.Items.forEach(function(p) {result[p.type] = (result[p.type] || 0) + 1;});
    return result;
    }

    itemsSaled() {
      let result = {};
      this.Saless.forEach(function(p) {result[p.typeItem] = (result[p.typeItem] || 0) + p.sumItem;});
    return result;
    }

    itemsClient(){
      let result = {};
      this.Clients.forEach(p => result[p.firstname+' '+p.lastname] = p.Items.length);
    return result;
    }
}