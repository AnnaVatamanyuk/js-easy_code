//Слайд 7

//1.Создать объект, который описывает ширину и высоту прямоугольника, а также может посчитать площадь фигуры:
// const rectangle = {width:..., height:..., getSquare:...};

const rectangle = {
    width: 5,
    height: 2,
    getSquare: function () { return this.width * this.height;}
};

//2.Создать объект, у которого будет цена товара и его скидка, а также два метода: для получения цены
// и для расчета цены с учетом скидки:
// const price = {
//     price: 10,
//     discount: '15%',
// ... };

const price = {
     price: 10,
     discount: '15%',
     getPrice: function () { return this.price},
     getPriceWithDiscount: function () { return this.price - this.price * parseInt(this.discount) / 100;}
};

//Слайд 8.
// 3. Создать объект, у которого будет поле высота и метод “увеличить
// высоту на один”. Метод должен возвращать новую высоту:
// object.height = 10;

const increment = {
    height: 10,
    getNewHeight: function () { return ++this.height;}
};

// Слайд 9.
//4. Создать объект “вычислитель”, у которого есть числовое свойство
// “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
// Методы можно вызывать через точку, образуя цепочку методов:
// const numerator = {
//     value: 1,
//     double: function () {...},
//     plusOne: function () {...},
//     minusOne: function () {...},
// }

const numerator = {
    value: 2,
    double: function () {this.value *= 2; return this;},
    plusOne: function () { ++this.value; return this;},
    minusOne: function () { --this.value; return this;}
};

//Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
//
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств. Вызов:
// let calculator = new Calculator();
// calculator.read();
//
// console.log( "Sum=" + calculator.sum() );
// console.log( "Mul=" + calculator.mul() );


function Calculator() {
    this.read = function () {
        let value = prompt('Введите два числа, розделены пробелом:');
        this.values = value.split(' ');
        return this.values;
    };
    this.sum = function (){return Number(this.values[0]) + Number(this.values[1]);};
    this.mul = function (){return Number(this.values[0]) * Number(this.values[1]);};
}

let calculator = new Calculator();

console.log(calculator.read());
console.log(calculator.sum());
console.log(calculator.mul());
