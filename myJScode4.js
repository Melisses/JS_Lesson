const Vector = function(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype = {
  plus: function(obj) {
    this.x += obj.x;
    this.y += obj.y;
  return this;
  },

  minus: function(obj) {
    this.x -= obj.x;
    this.y -= obj.y;
  return this;
  },

  get length() {
    return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
  }
}

console.log(new Vector(1, 2).plus(new Vector(3, 4)));
console.log(new Vector(1, 2).minus(new Vector(3, 4)));
console.log(new Vector(3, 4).length);
