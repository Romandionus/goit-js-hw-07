import { galleryItems } from './gallery-items.js';
// Change code below this line
// 1.Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

console.log(galleryItems);

const galleryEl = document.querySelector(`div`);
const newLinkImgEl = galleryItems.map((item) => `<a class="gallery__link" href="${item.original}" target="_self">
<img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/></a>`).join("")
galleryEl.insertAdjacentHTML(`beforebegin`, newLinkImgEl)

// 2.Реализация делегирования на div.gallery и получение url большого изображения.
