//Добавить верстку на форму
//Добавить верстку на список книг
//Добавить возможность отображать картинку по url
//Пофиксить ошибку с добавлением книг на страницу
//Написать метод для добавления одной книги (сейчас добаляются все)

//1.* Добавить метод validate в класс Form.


const ARRAY_FIELDS = [
    {name: 'book_name', label: 'Название', validation: {minCountOfSymbol: 3, maxCountOfSymbol: 20, message: '(Введите название от 3 до 20 символов)'} },
    {name: 'price', label: 'Цена', validation:{minCountOfSymbol: 1, pattern: /\d/, message: '(Введите число)'}},
    {name: 'author', label: 'Автор', validation: {minCountOfSymbol: 3, maxCountOfSymbol: 20, pattern: /\D/, message: '(Введите строку от 3 до 20 символов)'}},
    {name: 'country', label: 'Страна'},
    {
        name: 'url',
        label: 'Картинка',
        type: 'file',
        validation: {pattern: /^http(?:s)|:/, message: '(Введите ссылку на изображение)'}
    },
    {
        name: 'rate',
        label: 'Рейтинг',
        choices: [0,1, 2, 3, 4, 5],
        type: 'select'

    },
    {   name: 'genre',
        label: 'Жанр',
        choices: ['','драма', 'комедия', 'трагедия','ужасы'],
        type: 'select'
    }
];

const books = [];

class Field {
    constructor({name, label}) {
        this.name = name;
        this.label = label;
    }
}

class InputField extends Field {
    render() {
        const html = `<label class="label"><span>${this.label}</span>
            <input name=${this.name} value="" />
        </label>`;
        return html
    }
}

class SelectField extends Field {
    constructor(field) {
        super(field);
        const {choices} = field;
        this.choices = choices;
    }
    render() {
        const html = `<label class="label"><span>${this.label}</span>
            <select name=${this.name}>
                ${this.choices.map(choice => `<option>${choice}</option>`)}
            </select>
        </label>`;
        return html
    }
}

class Form {
    constructor(selector) {
        this.selector = selector;
        this.init()
    }
    init() {
        const form = document.createElement('form');
        const bookBtn = document.querySelector('#book-btn');
        const bookForm = document.querySelector(this.selector);
        ARRAY_FIELDS.forEach((field) => {
            const inputName = field.type === 'select' ? new SelectField(field) : new InputField(field);
            const html = inputName.render();
            form.insertAdjacentHTML('beforeend', html);
        });

        const btn = document.createElement('button');
        btn.textContent = 'Добавить книгу';
        let self = this;
        btn.addEventListener('click', function (event) {
            const message = document.querySelectorAll('.error-message');
            for (let i=0; i< message.length; i++){
                message[i].remove();
            }
            let isValid = true;
            ARRAY_FIELDS.forEach((field) =>{
                const inputName = document.querySelector(`[name="${field.name}"]`);
                let errorMessage = '';
                if(field.validation){
                    for (let elementValidation in field.validation){
                        switch (elementValidation) {
                            case 'minCountOfSymbol':
                                if(inputName.value.length < field.validation[elementValidation]){
                                    errorMessage = field.validation.message;
                                }
                                break;
                            case 'maxCountOfSymbol':
                                if(inputName.value.length > field.validation[elementValidation]){
                                    errorMessage = field.validation.message;
                                }
                                break;
                            case 'pattern':
                                if(!inputName.value.match(field.validation[elementValidation])){
                                    errorMessage = field.validation.message;
                                }
                                break;
                            default:
                        }
                        if (errorMessage !== ''){
                            const span = `<span class="error-message">${errorMessage}</span>`;
                            inputName.insertAdjacentHTML('beforebegin', span);
                            isValid = false;
                            break;
                        }
                    }
                }

            });
            if (isValid){
                self.addBook();
            }
        });
        bookBtn.append(btn);
        bookForm.append(form);

        const btnDeleteBook = document.createElement('button');
        btnDeleteBook.textContent = 'Удалить книгу';
        btnDeleteBook.addEventListener('click', this.clearBook);
        bookBtn.append(btnDeleteBook);

        const btnClear = document.createElement('button');
        btnClear.textContent = 'Очистить список';
        btnClear.addEventListener('click', this.clearAll);
        bookBtn.append(btnClear);

        const sortByNameBook = document.createElement('button');
        sortByNameBook.textContent = 'Сортировать по названию книги';
        //sortByGenre.addEventListener('click');
        bookBtn.append(sortByNameBook);

        const selectSort = `<select class="sortByPrice">
                                <option>Сортировать: Oт дешевых к дорогим</option>
                                <option>Сортировать: Oт дорогих к дешевым</option>
                            </select>`;
        bookBtn.insertAdjacentHTML('beforeend', selectSort);

        for (let i=0; i<ARRAY_FIELDS.length; i++){
            if (ARRAY_FIELDS[i].name === 'rate') {
                const sortByRate = `<label class="label"><span>${ARRAY_FIELDS[i].label}</span>
                                        <select name=${ARRAY_FIELDS[i].name}>
                                            ${ARRAY_FIELDS[i].choices.map(choice => `<option>${choice}</option>`)}
                                        </select>
                                    </label>`;
                bookBtn.insertAdjacentHTML('beforeend', sortByRate);
            }
        }

        for (let i=0; i<ARRAY_FIELDS.length; i++){
            if (ARRAY_FIELDS[i].name === 'genre') {
                const sortByRate = `<label class="label"><span>${ARRAY_FIELDS[i].label}</span>
                                        <select name=${ARRAY_FIELDS[i].name}>
                                            ${ARRAY_FIELDS[i].choices.map(choice => `<option>${choice}</option>`)}
                                        </select>
                                    </label>`;
                bookBtn.insertAdjacentHTML('beforeend', sortByRate);
            }
        }
    }
    addBook(event) {
        const book = ARRAY_FIELDS.reduce((acc, {name}) => {
            const input = document.querySelector(`[name="${name}"]`).value;
            return {...acc, [name]: input}
        }, {});
        book.index = books.length + 1;
        books.push(book);
        console.log(books);
        listBooks.updateOneBook(book);
        const formRes = document.querySelector('form');
        formRes.reset();

    }
    clearBook(book){
        const deleteElement = document.querySelector('.book-print');
        deleteElement.remove();
    }
    clearAll(){
        const deleteAll = document.querySelectorAll('.book-print');
        for (let i=0; i<deleteAll.length; i++){
            deleteAll[i].remove();
        }
    }

}

class Book {
    constructor(book) {
        this.book = book;
    }
    render() {
        const {book_name, price, url, index} = this.book;
        const html = `<div class="book-print">${index}. ${book_name} (price: ${price}) <img src="${url}" style="width: 350px; display: block"></div>`;
        return html;
    }
}

class ListBooks{
    updateOneBook(book){
        const oneBookPrint = document.querySelector('#book-list');
        const oneBook = new Book(book);
        const print = oneBook.render();
        oneBookPrint.insertAdjacentHTML('beforeend', print);
    }

    updateListBooks() {
        const bookListPrint = document.querySelector('#book-list');
        books.forEach((book) => {
            const listBook = new Book(book);
            const html = listBook.render();
         bookListPrint.insertAdjacentHTML('beforeend', html);
        });
    }
}

const form = new Form('#book-form');
const listBooks = new ListBooks();


