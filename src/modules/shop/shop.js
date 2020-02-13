export default class Shop {
  constructor(){
    this.Items = [];
    this.Clients = [];
    this.Hystorys = [];
  }

  addItems(item) { //добавить товар
    this.Items.push(item);
  }

  addClients(firstname, lastname, summa) { //добавить клиента
    this.Clients.push(item);
  }
}