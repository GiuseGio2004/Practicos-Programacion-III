const form = document.getElementById("formTarea");
const input = document.getElementById("inputTarea");
const lista = document.getElementById("listaTareas");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const texto = input.value.trim();
    if (texto === "") return;

    const li = document.createElement("li");
    li.textContent = texto;

    // Al hacer clic en el <li>, se marca como completado
    li.addEventListener("click", function () {
        li.classList.toggle("completado");
    });

    lista.appendChild(li);
    input.value = ""; // Limpiar el campo
});
