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



const readButGodafoss = document.getElementById("readButGodafoss");

readButGodafoss.addEventListener("click", () => {
  window.location.href = "godafoss-waterfall.html";
});

const bookNowGodafoss = document.getElementById("bookNowGodafoss");

bookNowGodafoss.addEventListener("click", () => {
  window.location.href = "booknowwaterfall.html";
});







// Keyword-to-page mapping
const keywordToPage = {
  waterfall: "godafoss-waterfall.html", // Redirects to Godafoss Waterfall page
};

// Get input and button elements
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

// Search function
function handleSearch() {
  const query = searchInput.value.toLowerCase().trim();

  if (keywordToPage[query]) {
    // Redirect to the mapped page
    window.location.href = keywordToPage[query];
  } else {
    // Show an alert if the keyword doesn't match
    alert("No matching page found for your search. Try 'waterfall'!");
  }
}

// Add click event listener to the button
searchButton.addEventListener("click", handleSearch);

// Add Enter key listener to the input
searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    handleSearch();
  }
});
