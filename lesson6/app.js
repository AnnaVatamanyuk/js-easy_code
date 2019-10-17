// Слайд 7.
//Зная структуру html, с помощью изученных методов получить (в консоль):
// Для навигации по DOM использовать методы, которые возвращают только элементы
// 1. head

const head = document.head;
console.log(head);

// 2. body

const body = document.body;
console.log(body);

// 3. все дочерние элементы body и вывести их в консоль.

const childrenElements = document.body.children;
console.log(childrenElements);

// 4. первый div и все его дочерние узлы

const firstDiv = document.querySelector('div');
console.log(firstDiv);

// а) вывести все дочерние узлы в консоль

console.log(firstDiv.children);

// б) вывести в консоль все дочерние узлы, кроме первого и последнего

for (let i = 1; i <firstDiv.children.length-1; i++){
    console.log(firstDiv.children[i]);
}

//1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:
//
// isParent(parent, child);
// isParent(document.body.children[0], document.querySelector('mark'));
// // true так как первый див является родительским элементом для mark
//
// isParent(document.querySelector('ul'), document.querySelector('mark'));
// // false так ul НЕ является родительским элементом для mark
// Функция принимает только DOM объекты.

function isParent(parent, child) {
    return parent.contains(child);
}
console.log(isParent(document.querySelector('ul'), document.querySelector('mark')));

// 2. Получить список всех ссылок, которые не находятся внутри списка ul

let link = Array.from(document.getElementsByTagName('a'));
let res = link.filter(tag => !tag.closest('ul'));

console.log(res);

// 3. Найти элемент, который находится перед и после списка ul

const ul = document.querySelector('ul');
console.log(ul.previousElementSibling, ul.nextElementSibling);

//У вас на странице есть три инпута, чекбокс(галочка) и кнопка "отправить" (итого: пять элементов).
// Ваша задача - написать валидацию. То есть, пользователь заполняет все поля, нажимает на кнопку "Отправить",
// а вы проверяете все ли поля заполнены корректно.
// Результат вывести в консоль (все хорошо/всё плохо).
//
// Список полей:
//
// Имя (больше 2-х символов и меньше - 40)
// Логин (должен быть заполнен/не пустой)
// Пароль (больше 8-ми символов, должна быть цифра, буква, большая буква)
// Галочка - "Прочитал условия" (должна быть включена)
// Если хоть одно из условий не совпадает, то форма не валидна.

const name = document.getElementById('name');
const login = document.getElementById('login');
const password = document.getElementById('password');
const checkbox = document.getElementById('checkbox');
const submit = document.getElementById('submit');

submit.addEventListener('click', function (event) {
    let res = 0;
    if(name.value.length <= 2 || name.value.length > 40){
        name.classList.add('invalid');
        name.classList.remove('valid');
        document.querySelector('span.error-name').classList.add('active');
    } else {
        name.classList.remove('invalid');
        document.querySelector('span.error-name').classList.remove('active');
        name.classList.add('valid');
        res++;
    }
    if (login.value.length == ''){
        login.classList.add('invalid');
        login.classList.remove('valid');
        document.querySelector('span.error-login').classList.add('active');
    }else {
        login.classList.remove('invalid');
        document.querySelector('span.error-login').classList.remove('active');
        login.classList.add('valid');
        res++;
    }
    if ( password.value.length > 8 && password.value.match(/[0-9]/) && password.value.match(/[a-z]/) && password.value.match(/[A-Z]/)){
        password.classList.remove('invalid');
        document.querySelector('span.error-password').classList.remove('active');
        password.classList.add('valid');
        res++;
    }else {
        password.classList.add('invalid');
        password.classList.remove('valid');
        document.querySelector('span.error-password').classList.add('active');
    }
    if (!checkbox.checked){
        document.querySelector('span.error-checkbox').classList.add('active');
    } else {
        document.querySelector('span.error-checkbox').classList.remove('active');
        res++
    }
    if (res === 4){
        console.log('все хорошо!')
    }else {
        console.log('все плохо!')
    }
});

//Tabs

const btn1 = document.getElementById('hotels');
const btn2 = document.getElementById('cars');
const btn3 = document.getElementById('flights');
const btnArray = document.querySelectorAll('button.btn-tab');

const tab1 = document.querySelector('div.hotels');
const tab2 = document.querySelector('div.cars');
const tab3 = document.querySelector('div.flights');

const tabsArray = document.querySelectorAll('.tab');

for (let i = 0; i < btnArray.length; i++ ){
    btnArray[i].addEventListener('click', function () {
        tabsArray.forEach((node) => {
            node.classList.remove('show');
        });
        tabsArray[i].classList.add('show');
    });
}

