class CustomHttp {
    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.addEventListener('load', () => callback(xhr.responseText))
    }
}

const http = new CustomHttp();

http.get(`http://localhost:3000/invoices`, loadInvoices);
function loadInvoices(response) {
    const parsedList = JSON.parse(response);
    const invoicesInstance = new Invoices();
    parsedList.forEach((post) => {
        invoicesInstance.render(post);
    })
}

class Invoices {
    constructor() {
        this.wrapper = document.querySelector('tbody')
    }
    render(todo) {
        const html = `<tr>
                <td>${todo.date_created}</td>
                <td>${todo.number}</td>
                <td>${todo.date_supplied}</td>
                <td>${todo.comment}</td>
            </tr>`;
        this.wrapper.insertAdjacentHTML('beforeend', html);
    }
}

const addBtn = document.querySelector('.btn');
const creatForm = document.querySelector('.create');
const closeForm = document.querySelector('.close-form');

closeForm.addEventListener('click', function () {
    creatForm.style.display = 'none';
});

addBtn.addEventListener('click', function () {
    creatForm.style.display = 'block';
});

const saveBtn = document.querySelector('.save-btn');

saveBtn.addEventListener('click', function () {
    const inputNumber = document.querySelector('.number');
    const inputInvoiceDate = document.querySelector('[name="invoice-date"]');
    const inputSupplyDate = document.querySelector('[name="supply-date"]');
    const inputComment = document.querySelector('[name="comment"]');
    const tbody = document.querySelector('tbody');
    const form = document.querySelector('form');
    if (inputNumber.value === ''){
        alert('enter the correct number invoice');
    } else if (inputInvoiceDate.value === ''){
        alert('enter the correct invoice date');
    } else if (inputSupplyDate.value === ''){
        alert('enter the correct supply date');
    } else {
        let table = `<tr>
                <td>${inputInvoiceDate.value}</td>
                <td>${inputNumber.value}</td>
                <td>${inputSupplyDate.value}</td>
                <td>${inputComment.value}</td>
            </tr>`;
        tbody.insertAdjacentHTML('beforeend', table);
        creatForm.style.display = 'none';
        form.reset();
    }
});