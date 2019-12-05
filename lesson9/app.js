// 1. Есть класс Planet
// function Planet(name) {
//     this.name = name;
//     this.getName = function () {
//         return 'Planet name is ' + this.name;
//     }
// }
// Создать наследника от Planet, который будет называться PlanetWithSatellite и будет
// принимать, кроме name, название спутника (satelliteName). Переопределите метод
// getName для PlanetWithSatellite так, чтобы он возвращал ту же самую строчку +
// дополнительный текст 'The satellite is' + satelliteName.
// Например:
// var earth = new PlanetWithSatellite('earth', 'moon');
// earth.getName(); // 'Planet name is earth. The satellite is moon’

class Planet {
    constructor(name){
        this.name = name;
    }
    getName(){
        return 'Planet name is ' + this.name;
    }
}

class PlanetWithSatellite extends Planet{
    constructor (name, satellite){
        super(name);
        this.satellite = satellite;
    }
    getName() {
        return super.getName() + '. The satellite is ' + this.satellite;
    }
}

let earth = new PlanetWithSatellite('earth', 'moon');

//2. Создайте класс “Здание” (пусть у него будет имя, количество этажей, метод “получить количество этажей” и метод
// “установить количество этажей”).
// Создайте наследников этого класса:
// классы “Жилой дом” и “Торговый центр”. Используйте функциональное наследование
//
// У жилого дома появится свойство “количество квартир на этаже”, а метод “получить количество этажей”
// должен вернуть объект вида {этажи: 5, всегоКвартир: 5 * количествоКвартир}
//
// У торгового центра появится свойство “количество магазинов на этаже”, а метод “получить количество этажей”
// должен вернуть объект вида {этажи: 3, всегоМагазинов: 3 * количествоМагазинов}
// От каждого класса создать экземпляр (дом, торговый центр)

function Building(name, countOfFloors) {
    this.name = name;
    this.floors = countOfFloors;
}

function House(name, countOfFloors, countOfFlats) {
   Building.call(this, name, countOfFloors);

    this.countOfFlats = countOfFlats;

    this.getFloors = function () {
      return {
          floors : this.floors,
          allFlats: this.floors * this.countOfFlats
      }
    }
}

function ShoppingCenter(name, countOfFloors, countOfShop){
   Building.call(this,name, countOfFloors);
    this.countOfShop = countOfShop;

    this.getFloors = function () {
        return {
            floors: this.floors,
            allShop: this.floors * this.countOfShop
        }
    }
}

let house = new House('Che', 5, 3);
let shoppingCenter = new ShoppingCenter('CV', 3, 8);

//3. Создать класс “Мебель” с базовыми свойствами “имя”, “цена” и методом “получить информацию”
// (метод должен вывести имя и цену). Метод должен быть объявлен с помощью прототипов (Func.prototype...).
// Создать два экземпляра класса “Мебель”: экземпляр “ОфиснаяМебель” и
// “Мебель для дома”. Придумайте им по одному свойству, которые будут характерны только для этих экземпляров
// (например, для офисной мебели - наличие компьютерного стола или шредера). Метод “получить информацию” должен
// учитывать и добавленное вами новое свойство.
// Задача на переопределение метода у экземпляров класса.

function Furniture(name, price) {
    this.name = name;
    this.price = price;
}
Furniture.prototype.getInfo = function () {
    return {
        name: this.name,
        price: this.price
    };
};

function HomeFurniture(name, price, kitchenFurniture) {
    Furniture.call(this, name, price);
    this.kitchenFurniture = kitchenFurniture;
}
HomeFurniture.prototype = Object.create(Furniture.prototype);
HomeFurniture.prototype.constructor = HomeFurniture;

HomeFurniture.prototype.getInfo = function () {
    let rez = Furniture.prototype.getInfo.call(this, name);
    rez.kitchenFurniture = this.kitchenFurniture;
    return rez;
};

function OfficeFurniture(name, price, officeFurniture) {
    Furniture.call(this, name, price);
    this.officeFurniture = officeFurniture;
}
OfficeFurniture.prototype = Object.create(Furniture.prototype);
OfficeFurniture.prototype.constructor = OfficeFurniture;

OfficeFurniture.prototype.getInfo = function () {
    let rez = Furniture.prototype.getInfo.call(this, name);
    rez.officeFurniture = this.officeFurniture;
    return rez;
};

let home = new HomeFurniture('SA',653,'kitchen');
let officeFurniture = new OfficeFurniture('OF', 8878, 'office');

//4. Создать класс “Пользователь” с базовыми свойствами “имя”, “дата регистрации” и методом “получить информацию”
// (метод должен вывести имя и дату регистрации). Метод должен быть объявлен с помощью прототипов (Func.prototype...)
// Создать два наследника класса “Пользователь”: класс “Админ” и класс “Гость”.
// У класса “Админ” должно быть дополнительное свойство “суперАдмин” (может быть
// true/false, должно быть скрытым). Свойства определяются в момент вызова
// конструктора.
// У класса “Гость” должно быть свойство “срокДействия” (validDate, например), содержащее дату (например,
// одну неделю от момента регистрации).
// У классов-наследников метод “получить информацию” должен так же содержать информацию о дополнительных свойствах
// (“суперАдмин” и “срокДействия”)

function Users(name, registrationDate) {
    this.name = name;
    this.registrationDate = registrationDate;
}

Users.prototype.getInfo = function () {
    return {
        name: this.name,
        registrationDate: this.registrationDate
    };
};

function Admin(name, registrationDate, superAdmin) {
    Users.call(this, name, registrationDate);
    let localSuperAdmin = superAdmin;

    this.setSuperAdmin = function(newSuperAdmin){
        localSuperAdmin = newSuperAdmin;
    };

    this.getSuperAdmin = function(){
        return localSuperAdmin;
    };

    this.getInfo = function () {
        let rez = Users.prototype.getInfo.call(this, name);
        rez.superAdmin = this.getSuperAdmin();
        return rez;
    };
}

Admin.prototype = Object.create(Users.prototype);
Admin.prototype.constructor = Admin;

function Guest(name, registrationDate, validity) {
    Users.call(this, name, registrationDate);
    let localValidity = validity;

    this.setValidity = function(newValidity){
        localValidity = newValidity;
    };

    this.getValidity = function(){
        return localValidity;
    };

    this.getInfo = function () {
        let rez = Users.prototype.getInfo.call(this, name);
        rez.validity = this.getValidity();
        return rez;
    };
}

Guest.prototype = Object.create(Users.prototype);
Guest.prototype.constructor = Guest;

let user = new Admin('SA','25.06.16', false);
let guest = new Guest('OF', '26.10.18', '26.10.19');
