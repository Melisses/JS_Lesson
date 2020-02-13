export default class Client {
  constructor(id,firstname,lastname,summa = 0) { 
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.summa = summa;
    this.Items = [];
  }

  addItems(item) {
    this.Items.push(item);
  }

  itemClient() {
    let result = {};
    this.Items.forEach(function(p) {result[p.type] = (result[p.type] || 0) + 1;});
  return result;
  }
}