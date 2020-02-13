export default class Sales {
  constructor(nameClient,nameItem,typeItem,kolItem,sumItem, time = new Date()) { //конструктор истории продаж
    this.nameClient = nameClient;
    this.nameItem = nameItem;
    this.typeItem = typeItem;
    this.kolItem = kolItem;
    this.sumItem = sumItem;
    this.time = time;
  }
}