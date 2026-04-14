// ================= SCROLL REVEAL =================
const elementos = document.querySelectorAll(".reveal");

const mostrarElementos = () => {
    elementos.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
};

window.addEventListener("scroll", mostrarElementos);

// Ejecutar al cargar (importante)
mostrarElementos();


// ================= SKILLS ANIMADAS =================
const barras = document.querySelectorAll(".progreso");
let animado = false;

const animarBarras = () => {
    if (animado) return; // evita que se repita

    barras.forEach(bar => {
        if (bar.classList.contains("html")) bar.style.width = "90%";
        if (bar.classList.contains("css")) bar.style.width = "80%";
        if (bar.classList.contains("js")) bar.style.width = "70%";
    });

    animado = true;
};

window.addEventListener("scroll", () => {
    const seccionSkills = document.querySelector(".skill");

    if (seccionSkills) {
        const top = seccionSkills.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            animarBarras();
        }
    }
});





if(bar.classList.contains("frontend")) bar.style.width="90%";
if(bar.classList.contains("backend")) bar.style.width="75%";
if(bar.classList.contains("db")) bar.style.width="70%";
if(bar.classList.contains("git")) bar.style.width="80%";
if(bar.classList.contains("otros")) bar.style.width="65%";