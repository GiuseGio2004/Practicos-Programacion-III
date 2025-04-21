const parrafos = document.querySelectorAll(".parrafo");
const btnResaltar = document.getElementById("btnResaltar");
const btnOcultar = document.getElementById("btnOcultar");

btnResaltar.addEventListener("click", () => {
    parrafos.forEach(p => p.classList.add("resaltado"));
});

btnOcultar.addEventListener("click", () => {
    parrafos.forEach(p => p.classList.toggle("oculto"));
});
