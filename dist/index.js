const menuBtn = document.getElementById("menu-btn");
const menuLinks = document.getElementById("menu-links");

menuBtn.addEventListener("click", () => {
  menuLinks.classList.toggle("hidden");
});


const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const carousel = document.getElementById("carousel");
let currentIndex = 0;

const items = carousel.getElementsByClassName("carousel-item");

const showItem = (index) => {
  const totalItems = items.length;
  if (index >= totalItems) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalItems - 1;
  } else {
    currentIndex = index;
  }

  for (let i = 0; i < totalItems; i++) {
    items[i].style.display = i === currentIndex ? "block" : "none";
  }
};

prevBtn.addEventListener("click", () => {
  showItem(currentIndex - 1);
});

nextBtn.addEventListener("click", () => {
  showItem(currentIndex + 1);
});

// Initialize carousel by showing the first item
showItem(currentIndex);






