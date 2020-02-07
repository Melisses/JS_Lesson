//Задача 3. Обращаем вспять массив.
function reverseArray(arr) { //создание нового пересортированного массива. Простое решение.
    let arritg = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        arritg.push(arr[i]);
    }
    return arritg;
}

//пересортировка в том же массиве. Тут я придумала алгоритм прохода с концов к середине с заменой противоположных с начала и конца символов
function reverseArrayInPlace(arr) { 
    let j = arr.length - 1;
    for (let i = 0; i < j; i++) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j--;
    }
    return arr;
}

console.log(reverseArray(['A','B','C','D']));
arr = [1,2,3,4,5];
console.log(reverseArrayInPlace(arr));
