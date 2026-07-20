
const  hamburgerToggle = document.getElementById("hamburger-toggle");

const desktopDisplay = document.getElementById("desktop-display");

const aboutLink = document.getElementById("aboutLink");

const aboutContent = document.getElementById("about");

const projectsLink = document.getElementById("projectsLink");

const projectsContent = document.querySelector("#projects-gallery");

const contactLink = document.getElementById("contactLink");

const contactContent = document.querySelector("#contact");

// Hamburger Menyu Toggle Funksiyası 

hamburgerToggle.addEventListener("click" , () => {
    desktopDisplay.classList.toggle("active");
});


// Haqqında bölməsinə keçid üçün funksiya 

aboutLink.addEventListener("click" , () => {
    aboutContent.scrollIntoView({behavior: "smooth"});
});

// Proyektlər və Qalereya bölməsinə  a keçid üçün funksiya  

projectsLink.addEventListener("click" , () => {
    projectsContent.scrollIntoView({behavior: "smooth"});
});


// Əlaqə bölməsinə keçid üçün funksiya 

contactLink.addEventListener("click" , () => {
    contactContent.scrollIntoView({behavior: "smooth"});
});

