import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryLightBoxMarkup = createLightBoxImgGallery(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryLightBoxMarkup);
function createLightBoxImgGallery(){
    return galleryItems.map(({preview, original, description})=>{
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>
     `;
    
    }).join(``);
}
const galleryLightBox = new SimpleLightbox(`.gallery__link`, {
    captionsData: "alt",
    captionDelay: 250,
  });

  console.log(galleryLightBox);


 // Initially supposed that I needed it, but realized that this is already embedded in library events and options
  // gallery.addEventListener("click", lightBoxActivation);
// function lightBoxActivation(evt){
//  evt.preventDefault();
//  if (evt.target.nodeName !== "IMG") {
//     return;
//   }
// };  
// for some reason, this doesn't work as expected by documentation...
//   galleryLightBox.on(`show.simpleLightbox`, {
//     captionsData: "alt",
//     captionDelay: 250,
//   });