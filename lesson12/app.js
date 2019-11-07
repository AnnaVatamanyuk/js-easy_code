//bbd1be85ed0648668f2eafd93e0d3fbf
//Домашнее задание
//1. Подключить поиск по введенному слову.
//  Новости должны обновляться после каждой введенной буквы.
//2. Добавить сортировку. Пример, как должно быть в запросе: sortBy=popularity


class Service {
    constructor () {
        this.key = 'afcd3139d5ef439e820e20ae5a36b08a';
        this.country = '';
        this.category = '';
        this.search = '';
        this.sort = '';
    }
    sendRequest({country = '', category = '' }) {
        if (country !== '') {
            this.country = country;
        }
        if (category !== '') {
            this.category = category;
        }

         return fetch(`https://newsapi.org/v2/top-headlines?country=${this.country}&category=${this.category}&apiKey=${this.key}`)
            .then((response) => { return response.json()})
            .catch((err) => { console.error('Моя ошибка - ', err) });
    }

    sendRequestSearch({search = '', sort = ''}){
        if(search !== ''){
            this.search = search;
        }

        if(sort !== ''){
            this.sort = sort;
        }

        return fetch(`https://newsapi.org/v2/everything?q=${encodeURIComponent(this.search)}&sortBy=${this.sort}&apiKey=${this.key}`)
            .then((response) => { return response.json()})
            .catch((err) => { console.error('Моя ошибка - ', err) });
    }
}

class UI {
    constructor () {
        this.service = new Service();
        this.layout = new LayoutNews();
    }
    init() {
        const country = document.querySelector('#country');
        const category = document.querySelector('#category');
        const search = document.querySelector('#search');
        const sort = document.querySelector('#sort');

        country.addEventListener('change', this.handleSelect.bind(this));
        category.addEventListener('change', this.handleSelect.bind(this));
        search.addEventListener('input', this.handleSearch.bind(this));
        sort.addEventListener('change', this.handleSearch.bind(this));
    }
    handleSelect(event) {
        const {id: selectName, value: selectValue} = event.target;
        this.service.sendRequest({[selectName]: selectValue})
            .then((response) => {
                this.layout.renderAll(response.articles);
            })
    }

    handleSearch(event){
       const {id: name, value: value} = event.target;
        this.service.sendRequestSearch({[name]:value})
            .then((response) => {
                this.layout.renderAll(response.articles)
        })
    }
}

class LayoutNews {
    constructor() {
        this.divRow = document.querySelector('#row');
    }
    renderAll(newsList) {
        this.divRow.innerHTML = '';

        newsList.forEach((news) => {
            const html = this.render(news);
            this.divRow.insertAdjacentHTML('beforeend', html);
        })
    }
    render (news) {
        return `<div class="col s12 m6">
                <div class="card"> 
                  <div class="card-image">
                     <img src="${news.urlToImage}"> 
                  </div>
                  <div class="card-content">
                     <span class="card-title">${news.title || ''}</span>
                     <p>${news.description || ''}</p> 
                  </div>
                  <div class="card-action">
                     <a href="${news.url}" target="_blank">Read more</a> 
                  </div> 
                </div>
            </div>`;
    }
}

const myUI = new UI();
myUI.init();
