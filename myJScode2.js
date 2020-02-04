const deepEqual = function(obj1, obj2) {
    //console.log(typeof(obj1),typeof(obj2));
    if (obj1 === obj2) return true;
    
    if (obj1 == null || obj2 == null || typeof(obj1) !== typeof(obj2) || obj1.length != obj2.length) return false;

    if (typeof(obj1) != 'object' || typeof(obj2) != 'object') return false;

    for (var key in obj1) {
        //console.log(key,obj1[key],obj2[key]);
        if ((!key in obj2) || !deepEqual(obj1[key],obj2[key])) 
            return false;
    }
    return true;
}

var obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, null));
console.log(deepEqual(obj, 1));
console.log(deepEqual(obj, 'bubochki'));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
