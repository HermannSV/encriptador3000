const campoTexto = document.querySelector("#texto-encriptado");
const campoMensaje = document.querySelector("#campo-mensaje");

const matrizCode = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

function btnEncriptar() {
  const texto = encriptar(campoTexto.value);
  campoMensaje.value = texto;
}

function limpiarCaja() {
  document.getElementById('texto-encriptado').value = '';
  document.getElementById('campo-mensaje').value = '';
}

function encriptar(fraseEncriptada) {
  for (let i = 0; i < matrizCode.length; i++) {
    if (fraseEncriptada.includes(matrizCode[i][0])) {
      fraseEncriptada = fraseEncriptada.replaceAll(
        matrizCode[i][0],
        matrizCode[i][1]
      );
    }
  }
  return fraseEncriptada;
}

function btnDesencriptar() {
  const texto = desencriptar(campoTexto.value);
  campoMensaje.value = texto;
}

function desencriptar(fraseEncriptada) {
  for (let i = 0; i < matrizCode.length; i++) {
    if (fraseEncriptada.includes(matrizCode[i][1])) {
      fraseEncriptada = fraseEncriptada.replaceAll(
        matrizCode[i][1],
        matrizCode[i][0]
      );
    }
  }
  return fraseEncriptada;
}
