// Слайд 20. Занятие 4

// 1. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение:
// multiply(1,2,3) = 6 (1*2*3). Если нет ни одного аргумента, вернуть ноль: multiply() // 0

function multiply() {
    if (arguments.length !== 0) {
        let resultMultiply = 1;
        for (let i = 0; i < arguments.length; i++) {
            resultMultiply *= arguments[i];
        }
        return resultMultiply;
    } else {
        return 0;
    }
}

// 2. Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.

function reverseString(text) {
    let newText = text.split('').reverse().join('');
    return newText;
}

// 3. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку,
// где каждый символ разделен пробелом и заменен на юникод-значение символа:
// getCodeStringFromText(‘hello’) // “104 101 108 108 111”

function getCodeStringFromText(str) {
    let newStr = str.split('').map(char => char.charCodeAt(0)).join(' ');
    return newStr;
}

// 4. Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). 
// Генерирует рандомное число от 1-10 и сравнивает с переданным числом если они совпали то возвращает 
// “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. 
// Числа в строке указаны как пример вы подставляете реальные числа. 

function lotteryNumber(value) {
    let randomNumber = 1 + Math.random() * 9;
    randomNumber = Number(randomNumber.toFixed());
    if (value >= 1 && value <= 10){
        if (value === randomNumber){
            return 'Вы выиграли';
        } else {
            return 'Вы не угадали, ваше число' + ' ' + value + ', ' + 'а выпало число' + ' ' + randomNumber;
        }
    } else {
        return 'Введите число от 1 до 10!'
    }
}

// Слайд 21. Занятие 4

// 5.  Создать функцию, которая принимает число n и возвращает массив,
// заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]

function getArray(value) {
    let newArray = [];
    for (let i = 1; i <= value; i++){
        newArray.push(i);
    }
    return newArray;
}

// 6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива:
// doubleArray([1,2,3]) // [1,2,3,1,2,3]

function doubleArray(numberArray) {
    let newArray = [...numberArray];
    for (let i = 0; i < numberArray.length; i++){
        newArray.push(numberArray[i]);
    }
    return newArray;
}

//7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет
// из каждого массива первый элемент, а возвращает массив из оставшихся значений: 
// changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.

function changeCollection() {
    let newCollection = [...arguments];
    for (let i =0; i < arguments.length; i++){
         arguments[i].shift();
    }
    return newCollection;
}

//8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить
// и значение на которое хочу проверять. Проверять что все аргументы переданы.
// Возвращать новый массив с пользователями соответсвующие указанным параметрам.

// funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]

function funGetUsers(users, field, value) {
    let correctUsers = [];
    if (users !== undefined && field !== undefined && value !== undefined){
        for (let i =0; i < users.length; i++){
            if (users[i][field] && users[i][field] === value){
                correctUsers.push(users[i]);
            }
        }
    }
    return correctUsers;
}

//задание Piazza

// 1. Исходный массив [-2, 3, 4, -5, -6, 2, 4, -56]. Найдите количество отрицательных и положительных элементов

function countElements(numberArray) {
    let positiveElements = 0, negativeElements = 0, countZero = 0;
    for (let i = 0; i < numberArray.length; i++){
        if (numberArray[i] < 0){
            negativeElements ++;
        }else if (numberArray[i] === 0){
            countZero ++;
        }else {
            positiveElements ++;
        }
    }
    return 'Negative elements:' + negativeElements + '; ' + 'Positive elements:' + positiveElements + '; ' + 'Count zero:' + countZero + ';'
}

// 2. На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
// каждый элемент которого будет хранить информацию о числе и его четности:
// [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]

function informationNumber(numberArray) {
    let newArray = [];
    for (let i = 0; i < numberArray.length; i++){
        newArray.push({
            digit: numberArray[i],
            odd: !!(numberArray[i] % 2)
        })
    }
    return newArray;
}
