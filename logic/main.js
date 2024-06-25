// Toggle Visability
function toggleVisability(ele) {
  ele.classList.toggle("active");
}
// Toggle cart-container Visability
let cart = document.getElementById("cart");
let cartContainer = document.getElementById("cart-container");
cart.addEventListener("click", () => {
  toggleVisability(cartContainer);
});
// Toggle main-img & section Visability
let mainImg = document.getElementById("main-img");
let section = document.getElementById("section");
mainImg.addEventListener("click", () => {
  toggleVisability(section);
});
let sectionClose = document.getElementById("section-close");
sectionClose.addEventListener("click", () => {
  toggleVisability(section);
});
// Toggle menu Visability
let menuIcon = document.getElementById("menu-icon");
let aside = document.getElementById("aside");
menuIcon.addEventListener("click", () => {
  toggleVisability(aside);
});
let menuClose = document.getElementById("menu-close");
menuClose.addEventListener("click", () => {
  toggleVisability(aside);
});
// Change Main Img & Style Active Img
const thumbnails = document.querySelectorAll(".thumbnail");
const thumbnailsSection = document.querySelectorAll(".thumbnail-section");
function changeImage(src, ele) {
  mainImg.src = src;
  // Remove active class from all thumbnails
  thumbnails.forEach((thumb) => thumb.classList.remove("active-img"));
  // Add active class to clicked thumbnail
  ele.classList.add("active-img");
}
mainImgSection=document.getElementById("main-img-section");
function changeImageSection(src, ele) {
  mainImgSection.src = src;
  // Remove active class from all thumbnails
  thumbnailsSection.forEach((thumb) => thumb.classList.remove("active-img"));
  // Add active class to clicked thumbnail
  ele.classList.add("active-img");
}
// Change Quantity
let quantity = parseInt(document.getElementById('quantity').textContent),
globalCount;
function changeQuantity(change) {
  quantity += change;
  if (quantity < 1) quantity = 0;
  globalCount = quantity;
  document.getElementById('quantity').textContent = globalCount;
}
// Add To Cart
let addCart = document.getElementById("add-cart");
let empty = document.querySelector(".empty");
let countCart = document.querySelector(".count-cart");
let cartShopping = document.querySelector(".cart-shopping");
let cartCount = document.getElementById("countCart");
let total = document.querySelector(".total");
addCart.addEventListener("click", () => {
  if (globalCount > 0) {
    countCart.style.display='block';
  countCart.textContent = globalCount;
  total.textContent = `$${globalCount * 125}.00`;
  cartCount.textContent = globalCount;
  empty.style.display='none';
  cartShopping.style.display='block';
  addCart.textContent = "Added to cart";
  }
});
// Delete
function deleteItem() {
   countCart.style.display='none';
  cartShopping.style.display='none';
  empty.style.display='block';
  addCart.innerHTML = "<img src='./images/icon-cart.svg' alt='icon-cart' /> Add to cart";
// Checkout
let btn = document.querySelector(".checkout");
btn.addEventListener("click", () => {
deleteItem();
});
}
// Change Imgs with Previous & Next
const images = [
  './images/image-product-1.jpg',
  './images/image-product-2.jpg',
  './images/image-product-3.jpg',
  './images/image-product-4.jpg'
];
let currentIndex = 0;
function prevImage() {
  currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
  mainImg.src = images[currentIndex];
  updateThumbnails(thumbnails);
}
function nextImage() {
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
  mainImg.src = images[currentIndex];
  updateThumbnails(thumbnails);
}
function updateThumbnails(thumbnails) {
  thumbnails.forEach(thumb => thumb.classList.remove('active-img'));
  thumbnails[currentIndex].classList.add('active-img');
}
function prevImageSection() {
  currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
  mainImgSection.src = images[currentIndex];
  updateThumbnails(thumbnailsSection);
}
function nextImageSection() {
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
  mainImgSection.src = images[currentIndex];
  updateThumbnails(thumbnailsSection);
}