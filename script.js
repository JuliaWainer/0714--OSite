const menuLinks = document.querySelectorAll('.menu a [href^="#"]');

function scrollToSection(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute("href");
    const section = document.querySelector(id);
    console.log(section.offsetTop);
}

menuLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
});