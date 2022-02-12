import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
const galleryEl = document.querySelector(`div`);
const newLinkImgEl = galleryItems.map((item) => `<a class="gallery__link" href="${item.original}">
<img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/></a>`).join("")
galleryEl.insertAdjacentHTML('beforeend', newLinkImgEl)

galleryEl.addEventListener('click', clickOnImg)

function clickOnImg(evt) {
    evt.preventDefault();
    const typeOfImg = evt.target.nodeName;
    if (typeOfImg !== `IMG`) {
        return;
    }
    const instance = basicLightbox.create(`
        <img src="${evt.target.dataset.source}">
`)
    instance.show()
    console.dir(typeOfImg)
}

// 1. Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// 2. Реализация делегирования на div.gallery и получение url большого изображения.
// 3. Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// скрипт css подключен в html перед локальными файлами стилей, скрипт js перед локальным js
// 4. Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// подключено и отображено в функции сlickOnImg
// 5. Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.
