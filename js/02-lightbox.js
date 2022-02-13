import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(`ul`);
const newLinkImgEl = galleryItems.map((item) => `<ul class="gallery"><a class="gallery__item" href="${item.original}">
<img class="gallery__image" src="${item.preview}" alt="${item.description}"/></a></ul>`).join("")
galleryEl.insertAdjacentHTML('beforeend', newLinkImgEl)

galleryEl.addEventListener('click', clickOnImg)

function clickOnImg(evt) {
    evt.preventDefault();
    const typeOfImg = evt.target.nodeName;
    if (typeOfImg !== `IMG`) {
        return;
    }
    console.dir(typeOfImg)
}

let gallery = new SimpleLightbox('.gallery a',
    {
    overlay:true,
    nav: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    });
        


// let gallery = new SimpleLightbox('.gallery a');
// gallery.on('show.simplelightbox', function () {
// 	// Do something…
// });

// gallery.on('error.simplelightbox', function (e) {
// 	console.log(e); // Some usefull information
// });




// 1. Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи. Используй готовый код из первого задания.
// 2. Подключение скрипта и стилей библиотеки используя CDN сервис cdnjs. Необходимо добавить ссылки на два файла: simple-lightbox.min.js и simple-lightbox.min.css.
// 3. Инициализация библиотеки после того как элементы галереи созданы и добавлены в ul.gallery. Для этого ознакомься с документацией SimpleLightbox - в первую очередь секции «Usage» и «Markup».
// 4. Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям из атрибута alt. Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.
