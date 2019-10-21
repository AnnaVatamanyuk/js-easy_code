//Слайд 6

//1. Найти параграф и получить его текстовое содержимое (только текст!)

let textP = document.querySelector('div article p');
console.log(textP.textContent);

//2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта)
// о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).

function informationNode(nameTag) {
    return {
        type: nameTag.nodeType,
        name: nameTag.nodeName,
        countChildren: nameTag.childElementCount
    };
}

console.log(informationNode(document.querySelector('ul')));

//3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]

const textLink = document.querySelector('ul');
let arrayLinks = [];

for (let i=0; i <textLink.childElementCount; i++){
    arrayLinks.push(textLink.children[i].textContent);
}

console.log(arrayLinks);

//4.В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:
// -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-

let p = document.querySelector('p');
let mark = document.querySelector('mark');

p.firstChild.data = '-text-';
mark.previousSibling.data = '-text-';
p.lastChild.data = '-text-';
console.log(p);

//Слайд 11

//1.Найти в коде список ul и добавить класс “list”

let ulList = document.querySelector('ul');
ulList.classList.add('list');

//2.Найти в коде ссылку, находящуюся после списка ul, и добавить id=link

let ul = document.getElementsByTagName('ul')[0];
let a = document.getElementsByTagName('a');

for (let i = 0; i < a.length; i++) {
    if (a[i].compareDocumentPosition(ul) === 2) {
        a[i].id = 'link';
    }
}

//3. На li через один (начиная с самого первого) установить класс “item”

let li = document.getElementsByTagName('li');
for (let i = 0; i < li.length; i++){
    if (i % 2 === 0){
        li[i].classList.add('item');
    }
}

//4.На все ссылки в примере установить класс “custom-link”

let aLink = document.getElementsByTagName('a');
for (let i =0; i < aLink.length; i++){
    aLink[i].classList.add('custom-link');
}

//Слайд 17

//1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
// <ul>
// <li><a href="#">Link1</a></li>
// ...
// <li class=”new-item”>item 5</li>
// <li class=”new-item”>item 6</li>
// </ul>
// Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.

let ulParent = document.querySelector('ul');
let newLi = [];

for (let i = 0;i < 4; i++){
    newLi[i] = document.createElement('li');
    newLi[i].classList.add('new-item');
    ulParent.appendChild(newLi[i]);
    newLi[i].textContent = 'item ' + ul.childElementCount;
}

// Слайд 18

// 2. В каждую ссылку, которая находятся внутри списка ul  добавить по тегу strong (в каждую ссылку один - strong).

let arrayTagA = document.querySelectorAll('li a');
let newStrong;

for (let i = 0; i < arrayTagA.length; i++){
    newStrong = document.createElement('strong');
    arrayTagA[i].appendChild(newStrong);
}

//3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами).
// В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement.

let bodyTag = document.querySelector('body');
let img = document.createElement('img');

img.setAttribute('alt', 'Bg_image' );
img.setAttribute('src', 'img/bg_img.jpg' );
bodyTag.prepend(img);

//4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green

let textMark = document.querySelector('mark');
textMark.classList.add('green');
textMark.insertAdjacentText("beforeend", ' green');

//5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)

let elementUl = document.querySelector('ul');
let arrayLi = document.querySelectorAll('li');

for (let i = 1; i < elementUl.childElementCount; i++){
    arrayLi[0].insertAdjacentElement("beforebegin", arrayLi[elementUl.childElementCount-i]);
}

//Слайд 19

//6. Дан массив пользователей, его можно скопировать отсюда из первой задачи, создать таблицу вида:

//Условия:
// - В конце таблицы обязательно последняя tr должна содержать total balance всех пользователей из таблицы
//   при этом он должен быть всегда выровнен по правому краю.
// - Количество пользователей может быть любым.
// - Таблица и все ее содержимое должно создаваться через js, в разметке у вас может быть только контейнер какой то.
// - В коде у вас должна быть переменная которая будет содержать в виде объекта список полей и заголовков th которые будут
//   выводиться в таблице. Что то типа { name: ‘Name’, email: ‘Email’... } соответственно ключ объекта это ваше поле
//   которое вы хотите вывести из объекта пользователя а значение это заголовок th.

const map = {"_id": '#', "name": 'Name', 'email': 'Email', "balance": 'Balance', 'company': 'Company'};
const users = [
    {
        "_id": "5d220b10e8265cc978e2586b",
        "isActive": true,
        "balance": 2853.33,
        "age": 20,
        "name": "Buckner Osborne",
        "gender": "male",
        "company": "EMPIRICA",
        "email": "bucknerosborne@empirica.com",
        "phone": "+1 (850) 411-2997",
        "registered": "2018-08-13T04:28:45 -03:00",
        "nestedField": { total: 300 }
    },
    {
        "_id": "5d220b10144ef972f6c2b332",
        "isActive": true,
        "balance": 1464.63,
        "age": 38,
        "name": "Rosalie Smith",
        "gender": "female",
        "company": "KATAKANA",
        "email": "rosaliesmith@katakana.com",
        "phone": "+1 (943) 463-2496",
        "registered": "2016-12-09T05:15:34 -02:00",
        "nestedField": { total: 400 }
    },
    {
        "_id": "5d220b1083a0494655cdecf6",
        "isActive": false,
        "balance": 2823.39,
        "age": 40,
        "name": "Estrada Davenport",
        "gender": "male",
        "company": "EBIDCO",
        "email": "estradadavenport@ebidco.com",
        "phone": "+1 (890) 461-2088",
        "registered": "2016-03-04T03:36:38 -02:00",
        "nestedField": { total: 200 }
    }
];

function sumBalance() {
    let totalBalance = 0;
    for (let i = 0; i < users.length; i++) {
        totalBalance += users[i].balance;
    }
    return totalBalance;
}

function creatTable() {
    const script = document.querySelector('script');
    let tr ;

    let table =`<table  cellspacing="0">
        <tr style="border-bottom:1px solid rgba(200,200,200,0.54);">`;
    for(let column in map) {
        table += `<th style="border-bottom: 1px solid rgba(200,200,200,0.54); border-top:1px solid rgba(200,200,200,0.54) ">${map[column]}</th>`
    }
        table += `</tr>
    </table>`;
    script.insertAdjacentHTML("beforebegin", table);

    let tableElement = document.querySelector('table');

    for ( let i = 0; i < users.length; i++){
        tr = `<tr>`;
        for(let column in map) {
            if (column === '_id') {
                tr += `<td style="width: 20px; height: 30px; border-bottom: 1px solid rgba(200,200,200,0.54);">${i + 1}</td>`;
            } else {
                tr += `<td style="width: 350px;height: 30px; border-bottom: 1px solid rgba(200,200,200,0.54);">${users[i][column]}</td>`;
            }
        }
        tr += `</tr>`;
        tableElement.insertAdjacentHTML("beforeend", tr);
    }

    let balanceTable = `<tr>`;
    for(let column in map){
        if (column === 'balance'){
        balanceTable += `<td style="width: max-content; height: 30px"> Total balance: <strong>${sumBalance()}</strong></td>`
        } else {
            balanceTable += `<td></td>`
        }
    }

     balanceTable += `</tr>`;
    tableElement.insertAdjacentHTML("beforeend", balanceTable);
}

creatTable();



