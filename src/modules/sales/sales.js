export default class Sales {
  constructor(time,nameClient,nameItem,typeItem,kolItem,sumItem) { //конструктор истории продаж
    this.time = time;
    this.nameClient = nameClient;
    this.nameItem = nameItem;
    this.typeItem = typeItem;
    this.kolItem = kolItem;
    this.sumItem = sumItem;
  }
}