document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('#menu-btn');
    const navbar = document.querySelector('.header .navbar');
    const cartItem = document.querySelector('.cart-items-container');
    const cartbtn = document.querySelector('#cart-btn');
    const searchForm = document.querySelector('.search-form');
    const searchbtn = document.querySelector('#search-btn'); // Select the search button

    // Toggle navbar visibility when menu button is clicked
    menuBtn.addEventListener('click', () => {
        navbar.classList.toggle('active');
    
        searchForm.classList.remove('active');
        cartItem.classList.remove('active');
        
    });

    // Toggle cart items container visibility when cart button is clicked
    cartbtn.addEventListener('click', () => {
        cartItem.classList.toggle('active');
        navbar.classList.remove('active');
        searchForm.classList.remove('active');
        
    });

    // Toggle search form visibility when search button is clicked
    searchbtn.addEventListener('click', () => {
        console.log('Search button clicked');
        searchForm.classList.toggle('active');
        navbar.classList.remove('active');
       
        cartItem.classList.remove('active');
    });
    window.onscroll = () =>{
        navbar.classList.remove('active');
        searchForm.classList.remove('active');
        cartItem.classList.remove('active');

    }
    
});
