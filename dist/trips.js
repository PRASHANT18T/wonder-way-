const menuBtn = document.getElementById("menu-btn");
const menuLinks = document.getElementById("menu-links");

menuBtn.addEventListener("click", () => {
  menuLinks.classList.toggle("hidden");
});





const bookNow = document.getElementById("bookNow");

bookNow.addEventListener("click", () => {
  window.location.href =  "booknow.html" ;
});
