//Слайд 10

//1.Создайте функцию которая бы умела делать:
// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0

function minus(value1) {
    if (value1 === undefined){
        value1 = 0;
    }

    return function(value2) {
        if (value2 === undefined){
            value2 = 0;
        }
        return value1 - value2;
    };

}

//2. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
// function multiplyMaker ...
// const multiply = multiplyMaker(2);
// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)

function multiplyMaker(value1) {
    let rez = value1;
    return function foo(value2) {
        rez *= value2;
        console.log('res', rez);
    }
}
const multiply = multiplyMaker(2);

//3. 3. Реализовать модуль, который работает со строкой и имеет методы:
// a. установить строку
//      i. если передано пустое значение, то установить пустую строку
//      ii. если передано число, число привести к строке
// b. получить строку
// c. получить длину строки
// d. получить строку-перевертыш

let infoStr = (function () {

    let nameStr = '', lengthStr = 0, recursiveReverse = '';

     function setStr(str) {
        if (typeof str === 'number'){
            nameStr = str.toString();
        } else if(str !== '') {
            nameStr = str;
        } else {
            nameStr = '';
        }
    }

    function getStr() {
        return nameStr;
    }

    function getLength(){
        return lengthStr = nameStr.length;
    }

    function getRecursiveReverse(){
        return recursiveReverse = nameStr.split('').reverse().join('');
    }

    return {setStr : setStr,
        getStr : getStr,
        lengthStr : getLength,
        recursiveReverse : getRecursiveReverse
    };
}());

// 4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень.
// Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).

const calculator = (function () {
    //let sum, multiply, division, minus, degree;
    let value = [], sum = 0, multiply = 1, minus, division;

    function setNumbers(numbers){
        value = numbers;
    }

    function getNumber() {
        return value;
    }

    function sumTwoNumbers() {
        let str, strNumbers, countNumbers = 0;
        value.forEach(function (number, value) {
            str = number.toString();
            strNumbers = str.split('.');
            if (strNumbers[1].length > countNumbers){
                countNumbers = strNumbers[1].length;
            }
        });
        for (let i=0; i <value.length; i++){
            sum += value[i]*Math.pow(10, countNumbers);
        }
        sum = sum/Math.pow(10, countNumbers);
        return Number(sum.toFixed(2));
    }

    function multiplyTwoNumber() {
        for (let i=0; i <value.length; i++){
            multiply *= value[i];
        }
        return Number(multiply.toFixed(2));
    }

    function minusTwoNumber() {
        minus = value[0];
        for (let i=1; i <value.length; i++){
            minus -= value[i];
        }
        return Number(minus.toFixed(2));
    }

    function divisionTwoNumber() {
        division = value[0];
        for (let i=1; i <value.length; i++){
            division /= value[i];
        }
        return Number(division.toFixed(2));
    }
    return{
        setNumber: setNumbers,
        getNumber : getNumber,
        sum:sumTwoNumbers,
        multiply: multiplyTwoNumber,
        division: divisionTwoNumber,
        minus: minusTwoNumber
    }
})();
