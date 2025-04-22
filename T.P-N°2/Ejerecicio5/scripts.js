edad = document.getElementById("edad")
errorNombre = document.getElementById("nombreError")
errorEmail = document.getElementById("emailError")
errorEdad = document.getElementById("edadError")
formulari0 = document.getElementById("formulario")
nombre = document.getElementById("nombre")
email = document.getElementById("email")


formulari0.addEventListener("submit", (e) => {
    e.preventDefault()
    //primer item
    verificar()

    //tercer item
    if (!esEmailValido(email.value)) {
        errorEmail.innerText = "El email no es válido";
    }
      
    // segundo item
    if (edad.value < 18){
        errorEdad.innerText = "Debes ser mayor de edad."
    }
   
});

function verificarNombre (nombre, errorNombre){
    if (nombre.value == ''){
        errorNombre.innerText = "El campo debe estar completo"
    }
    return errorNombre
}

function verificarEmail (email, errorEmail){
    if (email.value == ''){
        errorEmail.innerText = "El campo debe estar completo"
    }
    return errorEmail
}

function verificarEdad (edad, errorEdad){
    if (edad.value == ''){
        errorEdad.innerText = "El campo debe estar completo"
    }
    return errorEdad
}

function verificar (){
    verificarNombre(nombre, errorNombre)
    verificarEmail(email, errorEmail)
    verificarEdad(edad, errorEdad)
}

function esEmailValido(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  