//Занятие 2. Объекты. Массивы. Слайд 8.

// 1. Создать объект с полем product, равным ‘iphone’
// 2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
// 3. Добавить поле details, которое будет содержать объект с полями model и color

const item = {
    product : 'iphone'
};
item.price = 1000;
item.currency = 'dollar';
item.details = {model : '', color : ''};

//Занятие 3. Switch case. Тернарный оператор. Циклы. Слайд 4

//1. Записать в виде switch case следующее условие:
// if (a === ‘block’) {
// 	console.log(‘block’)
// } else if (a === ‘none’) {
// 	console.log(‘none’)
// } else if (a === ‘inline’) {
// console.log(‘inline’)
// } else {
// 	console.log(‘other’)
// }
// Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.

const a = 'block';
switch (a) {
    case 'block' : console.log('block'); break;
    case  'none': console.log('none'); break;
    case 'inline' : console.log('inline');break;
    default : console.log('other');
}

// 2. Из задач по условному оператору if else выполнить задачи 1, 2 и 3 в виде тернарного оператора.

//2.1 Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let char = 'hidden';
char = char ==='hidden' ? 'visible' : 'hidden';

//2.2 записать условие:
//  если переменная равна нулю, присвоить ей 1;
// если меньше нуля - строку “less then zero”;
// если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

let value = 50;
value = value === 0 ? value = 1 : value < 0 ? value = 'less then zero' : value *= 10;

//2.3 Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair'
// и свойство needRepair в объекте car изменить на true; иначе изменить на false.

let car = {
    name: 'Lexus',
    age: 10,
    create: 2008,
    needRepair: false };

car.needRepair = car.age > 5 ?  !console.log('Need Repair') : false;

//Слайд 10.

//1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
// будут в верхнем регистре. Использовать for или while.

let str = 'i am in the easycode';
str = str.trim();
let newStr = str[0].toUpperCase();

for (let i = 1; i < str.length; i++){
    if (str[i] !== ' ' && str[i - 1] === ' '){
        newStr += str[i].toUpperCase();
    } else {
        newStr +=str[i];
    }
}

//2. Дана строка “tseb eht ma i”.
// Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).

const text = 'tseb eht ma i';
let newText = '';

for (let j = text.length-1; j >= 0; j--){
    newText += text[j];
}

//3. Факториал числа - произведение всех натуральных чисел от 1 до n
// включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.

const number = 10;
let factorial = 1;

for (let i = 1; i <= number; i++){
    factorial *= i;
}

//4. На основе строки “JavaScript is a pretty good language” сделать новую строку,
// где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

let string = 'JavaScript is a pretty good language”';
string = string.trim();
let newString = string[0].toUpperCase();

for (let i = 1; i < string.length; i++){
    if (string[i] === ' '){
        newString += string[i + 1].toUpperCase();
        i++;
    } else {
        newString += string[i];
    }
}

//5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль.
// Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let oddArray = [];

for (const element of numberArray){
    if (element % 2 !== 0){
        oddArray.push(element);
    }
}
console.log(oddArray);

//6. Дан объект:
// let list = {
//      name: ‘denis’,
//      work: ‘easycode’,
//      age: 29
// }
//
// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.

let list = {
    name : 'denis',
    work : 'easycode',
    age : 29
};

for (let key in list){
    if (typeof list[key] === 'string'){
        list[key] = list[key].toUpperCase();
    }
}
