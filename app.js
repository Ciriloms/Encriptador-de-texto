// Función para validar el texto de entrada
function validarTexto(texto) {
    const soloMinusculas = /^[a-z\s]+$/;
    return soloMinusculas.test(texto);
}

function actualizarInterfaz(titulo, mensaje) {
    document.getElementById("titulo-mensaje").textContent = titulo;
    document.getElementById("parrafo").textContent = mensaje;
}

// Función para encriptar el texto
function encriptar() {
    let texto = document.getElementById("texto").value;

    if (validarTexto(texto)) {
        let textoCifrado = texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

        document.getElementById("texto").value = textoCifrado;
        actualizarInterfaz("Texto encriptado con éxito", "");
    } else {
        swal("Error!", "El texto solo puede contener letras minúsculas y sin acentos.", "warning");
    }
}

// Función para desencriptar el texto
function desencriptar() {
    let texto = document.getElementById("texto").value;

    if (validarTexto(texto)) {
        let textoCifrado = texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");

        document.getElementById("texto").value = textoCifrado;
        actualizarInterfaz("Texto desencriptado con éxito", "");
    } else {
        swal("Error!", "El texto solo puede contener letras minúsculas y sin acentos.", "warning");
    }
}

// Función para copiar el texto encriptado o desencriptado
function copiarTexto() {
    let texto = document.getElementById("texto").value;

    if (texto.length != 0) {
        navigator.clipboard.writeText(texto).then(() => {
            swal("¡Copiado!", "El texto ha sido copiado al portapapeles", "success");
        }).catch(err => {
            swal("Error!", "No se pudo copiar el texto", "error");
        });
    } else {
        swal("Error!", "No hay texto para copiar", "warning");
    }
}

// Función para alternar el tema
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    
    let themeToggle = document.getElementById("theme-toggle");
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? "☀️ Modo Claro" : "🌙 Modo Oscuro";
}
