const Vector = function(x, y) {
    this.x = x;
    this.y = y;

    this.plus = (obj) => {
        this.x += obj.x;
        this.y += obj.y;
    return {x: this.x, y: this.y};
    }

    this.minus = (obj) => {
        this.x -= obj.x;
        this.y -= obj.y;
    return {x: this.x, y: this.y};
    }

    Object.defineProperty(this, "length", {
        get: function() {
        return Math.sqrt(Math.pow(this.x,2) + Math.pow(this.y,2));
        }
    })    
}

console.log(new Vector(1, 2).plus(new Vector(3, 4)));
console.log(new Vector(1, 2).minus(new Vector(3, 4)));
console.log(new Vector(3, 4).length);
