const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

menuBtn.onclick = () => {
    nav.classList.toggle("active");
};

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

const reveals = document.querySelectorAll(".reveal");

function revealSections() {
    reveals.forEach(section => {

        const windowHeight = window.innerHeight;
        const top = section.getBoundingClientRect().top;

        if (top < windowHeight - 100) {
            section.classList.add("active");
        }

    });
}

window.addEventListener("scroll", revealSections);

revealSections();
