function toggleMobileNavigation() {
  const overlay = document.getElementById("overlay");
  const button = document.getElementById("mobile-navigation-hovering-button");

  const isOpen = overlay.style.width === "100%";

  if (isOpen) {
    overlay.style.width = "0%";
    overlay.style.opacity = "0%";
    button.style.border = "1px solid transparent";
    button.style.boxShadow = "0px 4px 8px 2px rgba(0, 0, 0, 0.2)";
  } else {
    overlay.style.width = "100%";
    overlay.style.opacity = "100%";
    button.style.border = "1px solid var(--primary-color-light)";
    button.style.boxShadow = "none";
  }
}

let elements;
let index;
function openGallery(element) {
  const img = element.querySelector('img');
  const src = img.getAttribute('src');

  elements = Array.from(element.parentNode.children)
  index = elements.indexOf(element);
  
  updateImage(elements, index);
}

function nextImage() {
  if(index >= elements.length - 1) return;
  index = index + 1
  updateImage();
}
function prevImage() {
  if(index <= 0) return;
  index = index - 1;
  updateImage();
}
function updateImage() {
  const image = elements[index].querySelector('img')
  const zoomedGallery = document.getElementById("zoomed-gallery");
  const zoomedImg = zoomedGallery.querySelector('img');
  const previous = document.getElementById("previous");
  const next = document.getElementById("next");

  zoomedImg.setAttribute('src', image.getAttribute('src'));
  zoomedGallery.style.width = "100%";
  zoomedGallery.style.opacity = "100%";
  zoomedImg.style.maxWidth = "70vw"
  zoomedImg.style.maxHeight = "70vh"
  zoomedImg.style.opacity = "100%";

  const title = document.getElementById("image-name");
  title.innerText = image.getAttribute('alt');

  next.disabled = index === elements.length - 1;
  previous.disabled = index === 0;
}

function closeGallery() {
  const zoomedGallery = document.getElementById("zoomed-gallery");
  const zoomedImg = zoomedGallery.querySelector('img');

  zoomedGallery.style.width = "0%";
  zoomedGallery.style.opacity = "0%";
  zoomedImg.style.maxWidth = "0%"
  zoomedImg.style.maxHeight = "0%"
  zoomedImg.style.opacity = "0%";
}