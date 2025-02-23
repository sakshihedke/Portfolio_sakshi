console.log("Script loaded!");

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    const switcher = document.querySelector(".style-switcher");
    switcher.classList.toggle("open");
    console.log("Style switcher open:", switcher.classList.contains("open"));
});

window.addEventListener("scroll", () => {
    const switcher = document.querySelector(".style-switcher");
    if (switcher.classList.contains("open")) {
        switcher.classList.remove("open");
        console.log("Style switcher closed on scroll");
    }
});


const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    console.log("Switching to:", color); // Check if the function runs
    alternateStyles.forEach((style) => {
        console.log(style.getAttribute("title"), style.disabled); // Log current stylesheet status
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
            console.log("Enabled:", style.getAttribute("title"));
        } else {
            style.setAttribute("disabled", "true");
            console.log("Disabled:", style.getAttribute("title"));
        }
    });
}
// Theme light and dark mode
const dayNight=document.querySelector(".day-night");
dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark")
})
window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})
