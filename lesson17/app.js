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
addBtn.addEventListener('click', function () {
    const creatForm = document.querySelector('.finish');
    creatForm.style.display = 'block';
});