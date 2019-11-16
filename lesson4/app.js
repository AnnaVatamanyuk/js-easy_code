// Занятие 5. Слайд 7

//1. На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
// каждый элемент которого будет хранить информацию о числе и его четности:
// [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]

function infoArray(numberArray) {
    const newArray = numberArray.map((element) =>{
        return  {digit:element, odd: !!(element % 2)}
    });
    return newArray;
}

// 2. Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть false.

function isZeroElement(numberArray) {
    const resultStr = numberArray.every((element) =>{
        return element !== 0 ;
    });
    return resultStr;
}

//3. Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what']
// хотя бы одно слово длиной больше 3х букв. Если да - вернуть true

function isLenghtElement(strArray) {
    const resultTest = strArray.some((element) =>{
        return element.length > 3;
    });
    return resultTest;
}

// 4. Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке
// {буква: “a”, позиция_в_предложении: 1}:
//
// [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
// {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
// {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]

//Напишите функцию, которая из элементов массива соберет и вернёт
// строку, основываясь на index каждой буквы. Например:
// [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”

function gatherTheWord(lettersArray) {
    const isSortArray = lettersArray.sort((a, b) =>{
        return a.index - b.index;
    });
    const newStr = lettersArray.reduce((acc, element) =>{
       return acc + element.char;
    }, '');
    return newStr;
}

// Слайд 10

//1. Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы
// (размер массива определяется его длиной): [  [14, 45],  [1],  ['a', 'c', 'd']  ] → [ [1], [14, 45], ['a', 'c', 'd'] ]

function sortArrayByLenght(arraySort) {
    const newArray = arraySort.sort((a,b) =>{
        return a.length - b.length
    });
    return newArray;
}

//2. Есть массив объектов:
// [
//     {cpu: 'intel', info: {cores:2, сache: 3}},
//     {cpu: 'intel', info: {cores:4, сache: 4}},
//     {cpu: 'amd', info: {cores:1, сache: 1}},
//     {cpu: 'intel', info: {cores:3, сache: 2}},
//     {cpu: 'amd', info: {cores:4, сache: 2}}
// ]
//
// Отсортировать их по возрастающему количеству ядер (cores).

function sortArrayByCores(arr) {
    const newArr = arr.sort((a, b) =>{
        return a.info.cores - b.info.cores
    });
    return newArr;
}

// Слайд 11

//3. 3. Создать функцию, которая будет принимать массив продуктов и две цены.
// Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:
//
// let products = [
//     {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
//     {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
//     {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
//     {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
// ];

function priceProduct(product, minPrice, maxPrice) {
     product = product.sort((a, b) =>{
        return a.price - b.price
    });
    return product.filter((element) => {
        return element.price > minPrice && element.price < maxPrice ;
    })
}

// Слайд 5

//2. Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел
// (обязательно проверьте что передан массив) вторым аргументом callback (обязательно проверьте что передана функция)
// функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5).
// Callback  должен принимать один элемент массива, его индекс в массиве и весь массив.

function myEvery(arr, fn) {
    let res;
    if(Array.isArray(arr) && typeof fn === 'function'){
        for (let i=0; i < arr.length; i++){
            if (fn(arr[i])){
                res = true;
            }else {
                res = false;break
            }
        }
    } else {
        return 'Incorrect data';
    }
    return res;
}

function checkTheNumber(element) {
   return  element > 5 ;
}

// Слайд 4

//1. Создать две функции и дать им осмысленные названия:
// - первая функция принимает массив и колбэк (одна для всех вызовов)
// - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)
// 
// Первая функция возвращает строку “New value: ” и результат обработки:
// 
// firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
// firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
// firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
// “New value: Jhon is 45, Aaron is 20,”
// firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются

function  changeTheArray(arr, fn){
    return 'New value: ' + fn(arr);
}

function upperFirst(arr) {
    for (let i=0; i < arr.length; i++){
        if (!arr[i]){
            return arr;
        }
        arr[i]= arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    return arr.join('');
}

function multiplyByTen(element){
    let newElement = [];
    for (let i=0; i< element.length; i++){
        newElement[i] = element[i] * 10;
    }
    return newElement.join(', ');
}

function userAge(users){
    newUaersArray = [];
    for (let i=0; i< users.length; i++){
        newUaersArray[i] = users[i].name + ' is ' + users[i].age;
    }
    return newUaersArray.join(', ');
}

function inversion(arr){
    let  newArr = [];
    for (let i = 0; i < arr.length; i++){
     newArr.push(arr[i].split('').reverse().join(', '));
    }
    return newArr;
}
