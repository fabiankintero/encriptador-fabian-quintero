// Función para encriptar el texto
function encriptarTexto() {
    let texto = document.getElementById("texto-entrada").value;

    if (!validarTexto(texto)) return;

    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("texto-salida").value = textoEncriptado;

    mostrarResultado();
}

// Función para desencriptar el texto
function desencriptarTexto() {
    let texto = document.getElementById("texto-entrada").value;

    if (!validarTexto(texto)) return;

    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("texto-salida").value = textoDesencriptado;

    mostrarResultado();
}

// Limpiar las cajas de texto
function limpiarTexto() {
    document.getElementById("texto-entrada").value = "";
    document.getElementById("texto-salida").value = "";
}

// Validar el texto (solo letras minúsculas sin acentos ni caracteres especiales)
function validarTexto(texto) {
    if (!/^[a-z\s]*$/.test(texto) || texto.trim() === "") {
        document.getElementById("texto-salida").value = "";
        ocultarResultado();

        alert('No escribas en mayusculas, acentos, numero , ni caracteres');
        return false;
    }
    return true;
}

function mostrarResultado() {
    document.getElementById("btnCopiar").style.display = "block";
    document.getElementById("imagen").style.display = "none";
    document.getElementById("texto-informativo").style.display = "none";
    document.getElementById("texto-salida").style.display = "block";
    document.getElementById("salida-contenedor").style.border = "none";
}

function ocultarResultado() {
    document.getElementById("btnCopiar").style.display = "none";
    document.getElementById("imagen").style.display = "block";
    document.getElementById("texto-informativo").style.display = "block";
    document.getElementById("texto-salida").style.display = "none";
    document.getElementById("salida-contenedor").style.border = "1px solid #ccc";
}

// Función para copiar el texto
function copiarTexto() {
    let salidaTexto = document.getElementById("texto-salida");
    salidaTexto.select();
    document.execCommand('copy');

    alert('Copiado!');

    ocultarResultado();
    limpiarTexto();
}

function reiniciar() {
    document.getElementById('texto-entrada').value = '';
    document.getElementById('texto-salida').value = '';
    document.getElementById('texto-salida').style.display = 'none';
    document.getElementById('btnCopiar').style.display = 'none';
    document.getElementById('imagen').style.display = 'block';
    document.getElementById('texto-informativo').style.display = 'block';
}
