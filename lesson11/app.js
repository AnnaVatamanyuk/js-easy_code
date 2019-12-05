// // Задание

// // Сделать запрос к альбомам, получить их список, вывести на экран (в левой колонке на странице)
// // При клике на альбом делать запрос к фотографиям (которые в относятся к текущему альбому),
// // получать их список, вывести на экран (в правой колонке)
// // Апи для запросов - https://jsonplaceholder.typicode.com/

class CustomHttp {
    get(url, callback){
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.addEventListener('load', () =>  callback(xhr.responseText));
    }
    post(url, album, callback){
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.send(album);
        xhr.addEventListener('click', () =>  callback(xhr.responseText));
    }
}

const  http = new CustomHttp();

http.get('https://jsonplaceholder.typicode.com/albums', (response) =>{
    const albumInstance =new Album();
    const parsedList = JSON.parse(response);
    parsedList.forEach((album) =>{
        albumInstance.renderAlbum(album);
    })
});

class Album {
    constructor(){
        this.divAlbum = document.querySelector('.album-list');
        this.divPhoto = document.querySelector('.photo')
    }
    handleClick(event){
        const postId = event.target.dataset.id;
        console.log(event.target.dataset.id);
        http.get('https://jsonplaceholder.typicode.com/photos?albumId=' + postId, (res) =>{
            const album =new Album();
            const parsedList = JSON.parse(res);
            parsedList.forEach((photo) =>{
                album.renderPhoto(photo);
            });
        });
    }

    renderAlbum(album){
        const html = `<label>
                        <input data-id='${album.id}' type="checkbox" ${album.completed === true ? "checked" : ""}/>
                        ${album.title}
                     </label>`;
        this.divAlbum.insertAdjacentHTML('beforeend', html);
        const input = document.querySelector(`input[data-id='${album.id}'`);
        input.addEventListener('click', this.handleClick);
    }

    renderPhoto(photo){
        const span = document.createElement('span');
        span.textContent = photo.title;
        this.divPhoto.append(span);
    }
}

