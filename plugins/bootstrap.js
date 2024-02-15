import 'bootstrap/dist/js/bootstrap'
import 'boxicons/dist/boxicons.js'
import 'aos/dist/aos.css'
import AOS from "aos"


AOS.init({
    once: "true",
});

document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener("click", function (e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});
 
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 5000) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})











