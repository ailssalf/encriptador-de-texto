const textoEncriptador = document.querySelector(".texto__encriptador");
const mensajeEncriptador = document.querySelector(".mensaje__encriptador");

/* Variables:
Las "llaves" de encriptación que utilizaremos son las siguientes:
- La letra "a" es convertida para "ai"
- La letra "e" es convertida para "enter"
- La letra "i" es convertida para "imes"
- La letra "o" es convertida para "ober"
- La letra "u" es convertida para "ufat"
*/ 

const mensajeAnuncio = document.querySelector(".mensaje__anuncio");
const mensajeEncriptado = document.querySelector(".mensaje__de-encriptado");

function botonEncriptar() {
    const textoEncriptado = encriptar(textoEncriptador.value);
    mensajeEncriptador.value = textoEncriptado;
    textoEncriptador.value = "";
    mensajeAnuncio.style.display= "none";
    mensajeEncriptado.style.display= "flex";
}

function encriptar(stringEncriptacion) {
    let vocalesEncriptacion = [["e", "enter"], ["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptacion = stringEncriptacion.toLowerCase();

    for(let a = 0; a < vocalesEncriptacion.length; a++) {
        if (stringEncriptacion.includes(vocalesEncriptacion[a][0])) {
            stringEncriptacion = stringEncriptacion.replaceAll(vocalesEncriptacion[a][0], vocalesEncriptacion[a][1]);
        }
    }
    return stringEncriptacion;
}

function botonDesencriptar() {
    const textoEncriptado = desencriptar(textoEncriptador.value);
    mensajeEncriptador.value = textoEncriptado;
    textoEncriptador.value = "";
    mensajeAnuncio.style.display= "none";
    mensajeEncriptado.style.display= "flex";
}

function desencriptar(stringDesencriptacion) {
    let vocalesEncriptacion = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptacion = stringDesencriptacion.toLowerCase(); 

    for(let a = 0; a < vocalesEncriptacion.length; a++) {
        if (stringDesencriptacion.includes(vocalesEncriptacion[a][1])) {
            stringDesencriptacion = stringDesencriptacion.replaceAll(vocalesEncriptacion[a][1], vocalesEncriptacion[a][0]);
        }
    }
    return stringDesencriptacion;
}

function copiarMensaje() {
    const mensajeCopiado = mensajeEncriptador.value;
    navigator.clipboard.writeText(mensajeCopiado)
        .then(()=>{
            document.querySelector(".boton__copiar-mensaje").innerHTML="Copiado"
            setTimeout(()=>{
                document.querySelector(".boton__copiar-mensaje").innerHTML="Copiar"  
            },2000)
        })

}
