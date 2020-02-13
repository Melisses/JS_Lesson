export default class Client {
  constructor(firstname,lastname,amount = 0) { //конструктор клиента
    this.firstname = firstname;
    this.lastname = lastname;
    this.amount = amount;
  }
}  