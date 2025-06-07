window.addEventListener("load", () =>{
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");
});

// toggle nav
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () =>{
    hideSection(); 
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
});
function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function  toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}

// active section
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
        // activate overlay to prevent multiple clicks
        document.querySelector(".overlay").classList.add("active");
        navToggler.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
            toggleNavbar();
        }
        else{
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(() =>{
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
             // activate overlay to prevent multiple clicks --REMOVE
        document.querySelector(".overlay").classList.remove ("active");
        },500);
    }
});

// about tabs
const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) =>{
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
});
// portfolio items details popup
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("view-project-btn")){
        togglePortfolioPopup();
        // document.querySelector(".portfolio-popup").scrollTo(0,0);
        portfolioItemDetails(e.target.parentElement);
    }
});
function togglePortfolioPopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

//  hide popup when clicking outside of it
 document.addEventListener("click", (e) =>{
     if(e.target.classList.contains("pp-inner")){
         togglePortfolioPopup();
     }
 });

function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML = portfolioItem.querySelector(".portfolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}

// change page theme

// const themeToggle = document.getElementById("theme-toggle");
// const themeIcon = document.getElementById("theme-icon");

// themeToggle.addEventListener("click", function() {
//   document.documentElement.classList.toggle("dark-theme");

//   if (themeIcon.classList.contains("fa-sun")) {
//     themeIcon.classList.remove("fa-sun");
//     themeIcon.classList.add("fa-moon");
//   } else {
//     themeIcon.classList.remove("fa-moon");
//     themeIcon.classList.add("fa-sun");
//   }
// });


const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

const preferredTheme = localStorage.getItem('theme');

if (preferredTheme === 'dark') {
  document.documentElement.classList.add('dark-theme');
  themeIcon.classList.remove('fa-sun');
  themeIcon.classList.add('fa-moon');
} else if (preferredTheme === 'light') {
  document.documentElement.classList.remove('dark-theme');
  themeIcon.classList.remove('fa-moon');
  themeIcon.classList.add('fa-sun');
}

themeToggle.addEventListener('click', () => {
  if (document.documentElement.classList.contains('dark-theme')) {
    document.documentElement.classList.remove('dark-theme');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.classList.add('dark-theme');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    localStorage.setItem('theme', 'dark');
  }
});
// don't actuall submit the contact form
document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // You can add your code to send the form data to the server here
    
    // Reset the form
    this.reset();
});
//disable the social media links
document.getElementById("click-link").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default action
});
// Function to save the current page state
function savePageState() {
    const currentPage = window.location.hash;
    localStorage.setItem('lastPage', currentPage);
}

// Function to restore the user's last visited page
function restoreLastPage() {
    const lastPage = localStorage.getItem('lastPage');
    if (lastPage) {
        window.location.hash = lastPage;
    }
}

// Add event listeners to the navigation links to save the current page
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', savePageState);
});

// Restore the user's last visited page when the page loads
window.addEventListener('load', restoreLastPage);