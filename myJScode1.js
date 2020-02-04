const range = function(first, last, step = 1) {
    let arr = [];
    per = first;

    if ((step > 0 && last < first) || (step < 0 && first < last)) {
        first = last;
        last = per;
        console.log('Диапазоны для заданного шага неверны. Меняю местами');
    }

    for (let i = first; i !== (last + step); i += step) {
        arr.push(i);
    }
    return arr;
}

const sum = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        sum += arr[i];
    return sum;
}

console.log(sum(range(10,1)));
console.log(sum(range(10,1,-1)));
console.log(range(5,2,-1));