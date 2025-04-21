// Seleccionar el título por id y cambiar su texto
const titulo = document.getElementById('tituloPrincipal');
titulo.textContent = 'Título modificado por JavaScript';

// Seleccionar los párrafos por clase y cambiar su color
const parrafos = document.getElementsByClassName('parrafo');
for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].style.color = 'blue';
}

// Seleccionar todos los <li> con querySelectorAll y agregar texto
const elementosLista = document.querySelectorAll('#contenedor ul li');

for (let i = 0; i < elementosLista.length; i++) {
    elementosLista[i].textContent += ` (ítem ${i + 1})`;
}