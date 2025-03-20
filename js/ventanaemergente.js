//ventana emergente destinos
const openModal = document.querySelector('.btn-destinos');
const modal = document.querySelector('.ventana');

openModal.addEventListener("click", () => {
    modal.classList.add('modal--show');
});
window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("baja", this.window.scrollY>50);
} )
window.addEventListener("scroll", function(){
    let nav = document.querySelector("nav");
    header.classList.toggle("navhover", this.window.scrollY>50);
} )

let burguer = document.querySelector(".burger");
let navLinks = document.querySelector(".nav-links");

burguer.addEventListener("click", () => {
    navLinks.classList.toggle("active");

});