import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryMarkup = createImgGallery(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryMarkup);
function createImgGallery(galleryItems){
return galleryItems.map(({preview, original, description}) =>{
    return `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `;
}).join(``);

}
gallery.addEventListener("click", magnification);
function magnification(){

}
