let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

let labelEstado = document.getElementById('password-strength-label');
let progressBarContainer = document.querySelector('.password-strength');
let containerProgress = document.getElementById('progress-bar');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar() {
    let numeroDigitado = parseInt(cantidad.value);

    if (numeroDigitado < 6) {
        alert("La cantidad de caracteres tiene que ser mayor a 5");
        resetPasswordFields();
        return;
    }

    let password = generarPassword(numeroDigitado);
    contrasena.value = password;

    // Evaluar fortaleza de la contraseña
    let strength = evaluarFortaleza(password);
    actualizarUI(strength);
}

// Función para generar la contraseña
function generarPassword(longitud) {
    let password = '';
    for (let i = 0; i < longitud; i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        password += caracterAleatorio;
    }
    return password;
}

// Función para evaluar la fortaleza de la contraseña
function evaluarFortaleza(password) {
    const longitud = password.length;
    const hasAlpha = isAlpha(password);
    const hasDigit = isDigit(password);
    const hasSpecial = isSpecialCharacter(password);

    if (longitud >= 6 && longitud <= 7) {
        if ((hasAlpha && !hasDigit && !hasSpecial) || (!hasAlpha && hasDigit && !hasSpecial)) {
            return 'weak';
        } else {
            return 'medium';
        }
    } else if (longitud >= 8 && longitud <= 9) {
        if ((hasAlpha && hasDigit && !hasSpecial) || (hasAlpha && hasSpecial && !hasDigit) || (hasDigit && hasSpecial && !hasAlpha)) {
            return 'medium';
        } else if (hasAlpha, hasDigit, hasSpecial) {
            return 'strong';
        } else {
            return 'weak';
        }
    } else if (longitud > 9) {
        if (hasAlpha && hasDigit && hasSpecial) {
            return 'strong';
        } else if ((hasAlpha && hasDigit && !hasSpecial) || (hasAlpha && hasSpecial && !hasDigit) || (hasDigit && hasSpecial && !hasAlpha)) {
            return 'medium';
        } else {
            return 'weak';
        }
    }
    return 'weak';  // Retorno por defecto si no cumple ninguna condición
}

// Función para actualizar la UI según la fortaleza
function actualizarUI(strength) {
    progressBarContainer.style.display = 'block';
    switch (strength) {
        case 'weak':
            labelEstado.textContent = "Contraseña Débil";
            containerProgress.className = 'weak';
            containerProgress.style.width = "33%";
            break;
        case 'medium':
            labelEstado.textContent = "Contraseña Media";
            containerProgress.className = 'medium';
            containerProgress.style.width = "66%";
            break;
        case 'strong':
            labelEstado.textContent = "Contraseña Fuerte";
            containerProgress.className = 'strong';
            containerProgress.style.width = "100%";
            break;
    }
}

// Función para reiniciar los campos en caso de error
function resetPasswordFields() {
    contrasena.value = "";
    labelEstado.textContent = "";
    progressBarContainer.style.display = 'none';
}

// Funciones auxiliares
function isAlpha(password) {
    return /[a-zA-Z]/.test(password);
}

function isDigit(password) {
    return /\d/.test(password);
}

function isSpecialCharacter(password) {
    return /[^a-zA-Z0-9]/.test(password);
}



/*function generar() {
    let numeroDigitado = parseInt(cantidad.value);

    
    if (numeroDigitado < 6) {
        alert("La cantidad de caracteres tiene que ser mayor a 5");
        contrasena.value = "";
        labelEstado.textContent = "";
    } else {
        let password = '';
        let hasAlpha = false;
        let hasDigit = false;
        let hasSpecial = false;

        for (let i = 0; i < numeroDigitado; i++) {
            let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
            password += caracterAleatorio;

            // Verificar el tipo de cada carácter
            if (isAlpha(caracterAleatorio)) hasAlpha = true;
            if (isDigit(caracterAleatorio)) hasDigit = true;
            if (isSpecialCharacter(caracterAleatorio)) hasSpecial = true;
        }
        contrasena.value = password;

        // Evaluar la fortaleza de la contraseña
        if (numeroDigitado >= 6 && numeroDigitado <= 7) {
            // Contraseña de entre 6 y 7 caracteres
            if ((hasAlpha && !hasDigit && !hasSpecial) || (!hasAlpha && hasDigit && !hasSpecial)) {
                labelEstado.textContent = "Contraseña Débil";
                progressBarContainer.style.display='block';
                containerProgress.className='weak';
                containerProgress.style.width = "33%";
                //labelEstado.className = 'weak';
            }
        } else if (numeroDigitado >= 8 && numeroDigitado < 10) {
            // Contraseña de entre 8 y 9 caracteres
            if ((hasSpecial && hasAlpha && !hasDigit) || (hasSpecial && hasDigit && !hasAlpha)) {
                labelEstado.textContent = "Contraseña Media";
                progressBarContainer.style.display='block';
                containerProgress.className='medium';
                containerProgress.style.width = "66%";
                //labelEstado.className = 'medium';
            }
        } else if (numeroDigitado > 9) {
            // Contraseña de más de 9 caracteres
            if (hasSpecial && hasAlpha && hasDigit) {
                labelEstado.textContent = "Contraseña Fuerte";
                progressBarContainer.style.display='block';
                containerProgress.className='strong';
                containerProgress.style.width="100%"
                //labelEstado.className = 'strong';
            }
        }
    }
}


function isAlpha(char) {
    return /[a-zA-Z]/.test(char);
  }
  
  function isDigit(char) {
    return /\d/.test(char);
  }

function isSpecialCharacter(char) {
    // Utiliza una expresión regular para verificar si el carácter no es una letra ni un número
    return /[^a-zA-Z0-9]/.test(char);
}
*/





