// Obtener referencias al input, botón y lista
const input = document.getElementById('nuevoElemento');
const agregarBtn = document.getElementById('agregarBtn');
const lista = document.getElementById('lista');

// Evento click en el botón "Agregar"
agregarBtn.addEventListener('click', () => {
  const valor = input.value.trim(); // Eliminar espacios en blanco

  if (valor !== '') {
    // Crear un nuevo <li>
    const nuevoLi = document.createElement('li');
    nuevoLi.textContent = valor;

    // Crear el botón "Eliminar"
    const eliminarBtn = document.createElement('button');
    eliminarBtn.textContent = 'Eliminar';
    eliminarBtn.className = 'eliminar-btn';

    // Evento click para eliminar el <li>
    eliminarBtn.addEventListener('click', () => {
      lista.removeChild(nuevoLi);
    });

    // Agregar el botón al <li>
    nuevoLi.appendChild(eliminarBtn);

    // Agregar el <li> a la lista
    lista.appendChild(nuevoLi);

    // Limpiar el input
    input.value = '';
  }
});
