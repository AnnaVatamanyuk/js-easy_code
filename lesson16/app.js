//2. Напишите автокомплит. Это такой инпут, в который вы начинаете вводить текст, а он подсвечивает варианты.
// Пример автокомплита - гугл поиск
// У вас может быть автокомлит по животным/цветам/городам.

const COUNTRY = ['Україна', 'Франція', 'Іспанія', 'Швеція', 'Норвегія', 'Німеччина', 'Фінляндія', 'Польща', 'Італія', 'Велика Британія', 'Румунія', 'Білорусь', 'Казахстан', 'Греція', 'Болгарія', 'Ісландія', 'Угорщина', 'Португалія', 'Азербайджан', 'Австрія', 'Чехія', 'Сербія', 'Ірландія', 'Грузія', 'Литва', 'Латвія', 'Хорватія', 'Боснія і Герцеговина', 'Словаччина', 'Естонія', 'Данія', 'Нідерланди','Швейцарія', 'Молдова', 'Бельгія', 'Албанія', 'Північна Македонія', 'Туреччина', 'Словенія', 'Чорногорія', 'Косово', 'Кіпр', 'Люксембург', 'Андорра', 'Мальта', 'Ліхтенштейн', 'Сан-Марино', 'Монако', 'Ватикан'];
const input = document.querySelector('.print-country');
const container = document.querySelector('.container');
const btn = document.querySelector('.btn-search');

COUNTRY.sort(function (a, b) {
    return a.localeCompare(b)
});

const countyContainer = `<div class="country-container">
                            <ul class="country-list">
                            </ul>
                        </div>`;
container.insertAdjacentHTML('beforeend', countyContainer);
const list = document.querySelector('.country-list');
const countryList = document.querySelector('.country-container');


function renderList(){
    let filterCountries = COUNTRY;
    countryList.style.display = 'block';
    if (input.value !== ''){
        console.log(input.value);
        list.textContent = '';
         filterCountries = COUNTRY.filter(function(el) {
            return el.toLowerCase().indexOf(input.value.toLowerCase()) === 0;
        });
    }
        filterCountries.forEach((element) => {
            const li = `<li>${element}</li>`;
            list.insertAdjacentHTML('beforeend', li);
        });

    const elemUL = document.querySelectorAll('li');

    elemUL.forEach((el) => {

        el.onmouseover = function () {
            this.style.background = 'blue';
        };
        el.onmouseout = function (e) {
            this.style.background = 'none';
        };
        el.onclick = function () {
            input.value = this.textContent
        }
    })
}

input.addEventListener('click', renderList);
input.onblur = function(){
    setTimeout(function () {
        countryList.style.display = 'none';
    },300);
};
input.addEventListener('keyup', renderList);
btn.addEventListener('click', function () {
    input.value = '';
});




