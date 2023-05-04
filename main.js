var resultado = document.getElementById("result");
var textarea = document.getElementById("txt");

var a = "ai",
  e = "enter",
  i = "imes",
  o = "ober",
  u = "ufat";

function encryptText() {
  let newtext = "";
  let texto = textarea.value;
  if (validateText(texto)) {
    for (let j = 0; j < texto.length; j++) {
      switch (texto[j]) {
        case "a":
          newtext += a;
          break;
        case "e":
          newtext += e;
          break;
        case "i":
          newtext += i;
          break;
        case "o":
          newtext += o;
          break;
        case "u":
          newtext += u;
          break;
        default:
          newtext += texto[j];
      }
    }
    resultado.textContent = newtext;
  }
}

function decryptText() {
  let newtext = "";
  let texto = textarea.value;
  if (validateText(texto)) {
    newtext = texto.replaceAll(a, "a");
    newtext = newtext.replaceAll(e, "e");
    newtext = newtext.replaceAll(i, "i");
    newtext = newtext.replaceAll(o, "o");
    newtext = newtext.replaceAll(u, "u");
    resultado.textContent = newtext;
    validText();
  }
}

function copyToClipboard() {
  let content = resultado.textContent;
  navigator.clipboard.writeText(content);
}

function paste(){
  navigator.clipboard
  .readText()
  .then((clipText) => (textarea.value = clipText));
}

function cleanAll() {
  textarea.value = "";
  cleanResult();
  textarea.style.boxShadow = "none";
}

function cleanResult() {
  let imagen = document.createElement("img");
  let parrafo = document.createElement("h3");
  let advertencia = document.createElement("p");
  imagen.src = "images/buscador.jpg";
  parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
  advertencia.textContent = "ⓘ Ingresa solo letras minúsculas, sin acentos, caracteres especiales, ni números!";
  resultado.textContent = "";
  resultado.appendChild(imagen);
  resultado.appendChild(parrafo);
  resultado.appendChild(advertencia);
}

function validateText(texto) {
  let textoValidado = /^[a-z\s]+$/.test(texto);
  if (textoValidado) {
    textarea.style.boxShadow = "0 0 0.6rem #c9d1f3";
  } else {
    textarea.style.boxShadow = "0 0 0.6rem #ff0000";
    cleanResult();
   alert(
      "Mensaje inválido, recuerda que solo puedes ingresar textos en minúscula... No ingreses mayúsculas, números, ni caracteres especiales!"
    );
  }
  return textoValidado;
}