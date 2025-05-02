// -----------------------------
// Modal: Handle Size Chart Pop-Up
// -----------------------------
const modal = document.querySelector('.modal');
const sizeChartBtn = document.querySelector('.size-chart-btn');
const closeModal = document.querySelector('.modal .close');

// Open the modal when size chart button is clicked
sizeChartBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// Close modal when the close icon is clicked
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside of the content area
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// -----------------------------
// Size Selection Buttons
// -----------------------------
const sizeButtons = document.querySelectorAll('.size-btn');

sizeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove 'active' from all buttons
    sizeButtons.forEach(b => b.classList.remove('active'));
    // Add 'active' to the clicked button
    btn.classList.add('active');
  });
});

// -----------------------------
// Quantity Selector (+ / - buttons)
// -----------------------------
const minusBtn = document.querySelector('.quantity-selector .minus');
const plusBtn = document.querySelector('.quantity-selector .plus');
const quantityInput = document.querySelector('.quantity-selector input');

// Decrease quantity (min: 1)
minusBtn.addEventListener('click', () => {
  let current = parseInt(quantityInput.value);
  if (current > 1) quantityInput.value = current - 1;
});

// Increase quantity
plusBtn.addEventListener('click', () => {
  let current = parseInt(quantityInput.value);
  quantityInput.value = current + 1;
});

// -----------------------------
// Scrollable Recommendation Cards with Arrows
// -----------------------------
const scrollContainer = document.getElementById('scroll-container');
const leftArrow = document.querySelector('.scroll-arrow.left');
const rightArrow = document.querySelector('.scroll-arrow.right');

// Update arrow visibility based on scroll position
function updateArrows() {
  const scrollLeft = scrollContainer.scrollLeft;
  const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

  leftArrow.style.display = scrollLeft <= 0 ? 'none' : 'block';
  rightArrow.style.display = scrollLeft >= maxScrollLeft - 1 ? 'none' : 'block';
}

// Scroll left
leftArrow.addEventListener('click', () => {
  scrollContainer.scrollBy({ left: -200, behavior: 'smooth' });
});

// Scroll right
rightArrow.addEventListener('click', () => {
  scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
});

// Update arrows on scroll and page load
scrollContainer.addEventListener('scroll', updateArrows);
window.addEventListener('load', updateArrows);

// -----------------------------
// Heart Icon (Favorite Toggle)
// -----------------------------
document.querySelectorAll('.heart').forEach(heart => {
  heart.addEventListener('click', () => {
    heart.classList.toggle('active');
  });
});

// -----------------------------
// Product Image Interaction (Click Animation)
// -----------------------------
const tshirtImg = document.querySelector('.product-image img');

// Add temporary animation class on click
tshirtImg.addEventListener('click', () => {
  tshirtImg.classList.add('clicked');
  setTimeout(() => {
    tshirtImg.classList.remove('clicked');
  }, 300);
});

const menuToggle = document.getElementById("menu-toggle");
const sideMenu = document.getElementById("side-menu");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", () => {
  sideMenu.classList.add("active");
  overlay.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.classList.remove("active");
  overlay.style.display = "none";
});

overlay.addEventListener("click", () => {
  sideMenu.classList.remove("active");
  overlay.style.display = "none";
});
