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

const bookNow = document.getElementById("bookNow");

bookNow.addEventListener("click", () => {
  window.location.href =  "booknow.html","_blank" ;
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







function addToCart() {
  // Get content of the 'gotocart' div
  const productContent = document.getElementById('gotocart').innerHTML;

  // Save it in localStorage (or sessionStorage)
  localStorage.setItem('cartProduct', productContent);

  // Optionally, you can alert user or show some message
  alert('Product added to cart!');
}



 const morecattrips = document.getElementById  ("morecattrips");

morecattrips.addEventListener("click", () => {
  window.location.href =  "tripscat.html" ;
});


const seebali = document.getElementById ("seebali");

seebali.addEventListener("click", () => {
  window.location.href = "seemorebali.html";
});



const ClimbingKit =document.getElementById ("ClimbingKit");

ClimbingKit.addEventListener("click", () => {
  window.location.href = "ClimbingKit.html" , "_blank";
});
 

const shopcat = document.getElementById("shopcat");

shopcat.addEventListener("click", () => {
  window.location.href = "shopcaat.html";
});






function addToCart(productId) {
  // Get the content of the specific product card using its id
  const productContent = document.getElementById(productId).innerHTML;

  // Retrieve existing cart data from localStorage or initialize empty array
  let cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];

  // Create an object with unique ID and content
  const product = { id: productId, content: productContent };

  // Add the product to the cart array
  cartProducts.push(product);

  // Save updated cart data back to localStorage
  localStorage.setItem('cartProducts', JSON.stringify(cartProducts));

  alert('Product added to cart!');
}