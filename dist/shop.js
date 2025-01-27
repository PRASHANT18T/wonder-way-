// JavaScript for slideshow functionality
const images = document.querySelectorAll('#slideshow img');
let currentIndex = 0;

setInterval(() => {
  images[currentIndex].classList.remove('opacity-100');
  images[currentIndex].classList.add('opacity-0');

  currentIndex = (currentIndex + 1) % images.length;

  images[currentIndex].classList.remove('opacity-0');
  images[currentIndex].classList.add('opacity-100');
}, 2000); // Change image every 3 seconds








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
  
  