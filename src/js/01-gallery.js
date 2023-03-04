import { galleryItems } from './gallery-items.js';
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";


// Change code below this line
const galleryImages = document.querySelector('.gallery');
const galleryEm = galleryItems => {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}

"/>
 </a>
        </div>`;
    })
        .join("")
}

const addGalleryMarkup = galleryEm(galleryItems);
galleryImages.innerHTML = addGalleryMarkup;



let gallery = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
});



