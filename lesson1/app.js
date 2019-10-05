// Занятие 1. Слайд 10

// 1. Получить первую и последнюю буквы строки

function firstAndLastLetters(str) {
  let firstLetter = str[0];
  let lastLetter = str[str.length - 1];
  return [firstLetter, lastLetter];
}

//2. Сделать первую и последнюю буквы в верхнем регистре

function uppercaseLetters(str){
  let result = str[0].toUpperCase();
  result += str.substr(1,str.length - 2);
  result += str[str.length - 1].toUpperCase();
  return result;
}

//3.Найти положение слова ‘string’ в строке

function findThePositionWords(str, char){
  let positionIndex = [];
  let searchElement = str.indexOf(char);
  while (searchElement !== -1){
    positionIndex.push(searchElement);
    searchElement = str.indexOf(char, searchElement + 1);
  }
  return positionIndex;
}

//4.Найти положение второго пробела

function secondSpace(str){
  let pos = 0;
  let positionSpace;
  for (let index = 0; index < str.length; index++){
    if((str[index] === ' ') && (pos < 2)){
      positionSpace = index;
      ++pos;
    }
  }
  return positionSpace;
}

//5. Получить строку с 5-го символа длиной 4 буквы

function fourLetterSubstring(str,  start, length){
  return str.substr(start, length);
}

//6.Получить строку с 5-го по 9-й символы

function substringWithStartAndEndIndex(str,  start, end){
  return str.slice(start, end);
}

//7. Получить новую строку из исходной путем удаления последних 6-и символов(то есть исходная строка без последних 6и символов)

function lastLettersDelete(str, countLetters){
  return str.substring(0, str.length - countLetters);
}

//8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст "2016"

function convertNumberTOString(number1, number2){
  return String(number1) + String(number2)
}

// Занятие 1. Слайд 13
//1. Получить число pi из Math и округлить его до 2-х знаков после точки

function roundOffTheNumber() {
  return +Math.PI.toFixed(2);
}

//2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51

function findMaxAndMinNumber(someArray){
  return [Math.min(...someArray), Math.max(...someArray)];
}


//3. Работа с Math.random:
// a. Получить случайное число и округлить его до двух цифр после запятой

function roundOffTheRandomNumber(roundNumber) {
  let value = Math.random();
  return +value.toFixed(roundNumber);
}

//3. Работа с Math.random:
//b.Получить случайное целое число от 0 до X. X - любое произвольное число.

function randomNumber(roundNumber) {
  let number = Math.random() * roundNumber;
  return number.toFixed();
}

//4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?

function sumTwoFloatNumber(number1,number2) {
  let sum = (number1*10 + number2*10)/10;
  return sum;
}

//5. Получить число из строки ‘100$’

function stringToNumber(price){
  return parseFloat(price);
}

//Занятие 2. Слайд 12

//Чему равно а, почему?

let a = 0 || 'string'; // ‘string’;  0 - false, ‘string’ - true (при условии 'или', если один аргумент true, другой false выбирается  true)
    a = 1 && 'string'; // 'string'; 1 - true, 'string' - true (при условии 'и', если два аргумента true выбирается последний )
    a = null || 25; // 25; null - false, 25 - true (при условии 'или', если один аргумент true, другой false выбирается  true)
    a = null && 25; // null; null - false, 25 - true (при условии 'и', если один аргумент true, другой false выбирается false )
    a = null || 0 || 35; //35; null - false, 0 - false, 25 - true (при условии 'или', если один аргумент true, другой false выбирается  true)
    a = null && 0 && 35; //null; (при условии 'и', если один аргумент true, другой false выбирается первый со значением false )

//Что отобразится в консоли. Почему?

let b = 12 + 14 + '12'; // строка'2612'; сума двох чисел + строка, в результате вийдеть строка
    b = 3 + 2 - '1'; // число 4; число - строка = число
    b = '3' + 2 - 1; // число 31;
    b = true + 2; // число 3, true = 1
    b = +'10' + 1; // число 11; +'10' = 10
    b = undefined + 2; //NaN; undefined - не определино
    b = null + 5; // число 5; null = 0
    b = true + undefined; //NaN; undefined - не определино

//Занятие 2. Слайд 16

//1.Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

function redefinition(char) {
  if (char === 'hidden'){
    char = 'visible';
  } else {
    char = 'hidden';
  }
  return char;
}

//2.Используя if, записать условие:
//  a.если переменная равна нулю, присвоить ей 1;
//  b.если меньше нуля - строку “less then zero”;
//  c.если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

function appropriation(value){
  if(value === 0){
    value = 1;
  } else if (value < 0){
    value = 'less then zero';
  } else {
    value *= 10;
  }
  return value;
}

//3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair'
// и свойство needRepair в объекте car изменить на true; иначе изменить на false.

let car = {
  name: 'Lexus',
  age:11,
  create: 2008,
  needRepair: false
};
const calculateCarTechService = (carObject) => {
  const { age } = carObject;
  const needRepair = age > 5;
  console.log(needRepair && "Need Repair");
  return { ...carObject, needRepair}
}
car = calculateCarTechService(car);
console.log(car);

//4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
// Написать условие если у item есть поле discount и там есть значение то в объекте item
// создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль,
// обратите внимание  что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет.
// иначе если поля discount нет то вывести просто поле price в консоль.

function priceItem(item){
  if (item.discount && item.discount !== ''){
    item.priceWithDiscount = parseFloat(item.price) - (parseFloat(item.discount) * parseFloat(item.price) / 100);
  } else {
    console.log(item.price);
  }
  return item;
}


//Занятие 2. Слайд 17

/*5.Дан следующий код:

 let product = {
     name: “Яблоко”,
     price: “10$”
 };

 let min = 10; // минимальная цена
 let max = 20; // максимальная цена

Написать условие если (цена товара больше или равна минимальной цене)
и (меньше или равна максимальной цене) то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.*/

function priceProduct(product, minPrice, maxPrice) {
  if ((parseFloat(product.price) >= parseFloat(minPrice)) && (parseFloat(product.price)<= parseFloat(maxPrice))) {
    console.log(product.name);
  } else {
    console.log('Товар не найден');
  }
  return product;
}
