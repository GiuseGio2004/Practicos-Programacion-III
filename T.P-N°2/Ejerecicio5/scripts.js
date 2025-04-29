document.getElementById("formulario").addEventListener("submit", (e) => {
    e.preventDefault();
    
    limpiarErrores();
    
    const nombreValido = validarNombre();
    const emailValido = validarEmail();
    const edadValida = validarEdad();
    
    if (nombreValido && emailValido && edadValida) {
        alert("Formulario enviado correctamente");
    }
});

function limpiarErrores() {
    // Limpiar todos los mensajes de error
    document.getElementById("nombreError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("edadError").textContent = "";
    
    // Quitar clases de error de todos los inputs
    document.getElementById("nombre").classList.remove("input-error");
    document.getElementById("email").classList.remove("input-error");
    document.getElementById("edad").classList.remove("input-error");
}

function validarNombre() {
    const nombre = document.getElementById("nombre").value.trim();
    const errorNombre = document.getElementById("nombreError");
    const regexSoloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    
    let valido = true;
    
    if (nombre === "") {
        errorNombre.textContent = "El nombre es obligatorio";
        document.getElementById("nombre").classList.add("input-error");
        valido = false;
    } else if (!regexSoloLetras.test(nombre)) {
        errorNombre.textContent = "Solo se permiten letras (no números)";
        document.getElementById("nombre").classList.add("input-error");
        valido = false;
    }
    return valido;
}

function validarEmail() {
    const email = document.getElementById("email").value.trim();
    const errorEmail = document.getElementById("emailError");
    
    let valido = true;
    
    if (email === "") {
        errorEmail.textContent = "El email es obligatorio";
        document.getElementById("email").classList.add("input-error");
        valido = false;
    } else if (!esEmailValido(email)) {
        errorEmail.textContent = "Formato de email inválido (ej: usuario@dominio.com)";
        document.getElementById("email").classList.add("input-error");
        valido = false;
    }
    
    return valido;
}

function validarEdad() {
    const edad = document.getElementById("edad").value;
    const errorEdad = document.getElementById("edadError");
    
    let valido = true;
    
    if (edad === "") {
        errorEdad.textContent = "La edad es obligatoria";
        document.getElementById("edad").classList.add("input-error");
        valido = false;
    } else if (edad < 0) {
        errorEdad.textContent = "La edad no puede ser negativa";
        document.getElementById("edad").classList.add("input-error");
        valido = false;
    }
    
    return valido;
}

function esEmailValido(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
