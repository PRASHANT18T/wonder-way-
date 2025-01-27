


  window.onload = function () {
    // Get cart data from localStorage
    const cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];

    // Check if there are products in the cart
    if (cartProducts.length > 0) {
      const cartDiv = document.getElementById('cart');
      cartProducts.forEach((product) => {
        // Create a div for each product
        const productDiv = document.createElement('div');
        productDiv.setAttribute('id', `cart-${product.id}`); // Set a unique id for the cart item
        productDiv.innerHTML = `
          ${product.content}
          <button class="remove-btn bg-red-500 text-white py-1 px-3 rounded mt-4 hover:bg-red-600 transition duration-300" onclick="removeFromCart('${product.id}')">
            Remove
          </button>
        `;
        cartDiv.appendChild(productDiv);
      });
    } else {
      document.getElementById('cart').innerHTML = '<p>Your cart is empty.</p>';
    }
  };

  // Function to remove a product from the cart
  function removeFromCart(productId) {
    // Get existing cart data
    let cartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];

    // Filter out the product with the specified ID
    cartProducts = cartProducts.filter((product) => product.id !== productId);

    // Update localStorage
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));

    // Remove the product from the DOM
    const productDiv = document.getElementById(`cart-${productId}`);
    if (productDiv) {
      productDiv.remove();
    }

    // Optional: Show a message if the cart is empty
    if (cartProducts.length === 0) {
      document.getElementById('cart').innerHTML = '<p>Your cart is empty.</p>';
    }

    alert('Product removed from cart!');
  }




