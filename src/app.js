const texto = document.querySelector(".texto");
const encriptar = document.querySelector(".encriptar");
const desencriptar = document.querySelector(".desencriptar");
const resultado = document.querySelector(".resultado");
const mensaje = document.querySelector(".mensaje");
const descripcion = document.querySelector(".descripcion");
const muneco = document.querySelector(".muneco");
const respuesta = document.querySelector(".respuesta");
const copiar = document.createElement("input");

const vacio = () => {
  if (texto.value === "") {
    return true;
  } else {
    return false;
  }
};

const crearBoton = () => {
  copiar.type = "button";
  copiar.value = "Copiar";
  copiar.className = "copiar";
};

const cambiarLetra = (value) => {
  switch (value) {
    case "a":
      return "ai";
      break;
    case "e":
      return "enter";
      break;
    case "i":
      return "imes";
      break;
    case "o":
      return "ober";
      break;
    case "u":
      return "ufat";
      break;
  }
};

const encriptarTexto = () => {
  let men = texto.value;
  return men.replace(/[aeiou]/gi, cambiarLetra);
};

const cambioCaracter = (value) => {
  switch (value) {
    case "ai":
      return "a";
      break;
    case "enter":
      return "e";
      break;
    case "imes":
      return "i";
      break;
    case "ober":
      return "o";
      break;
    case "ufat":
      return "u";
      break;
  }
};

const desencriptarTexto = () => {
  let men = texto.value;
  return men
    .replaceAll("ai", cambioCaracter)
    .replaceAll("enter", cambioCaracter)
    .replaceAll("imes", cambioCaracter)
    .replaceAll("ober", cambioCaracter)
    .replaceAll("ufat", cambioCaracter);
};

encriptar.addEventListener("click", () => {
  if (vacio()) {
    mensaje.innerHTML = "Tiene que ingresar un texto para encriptar";
    descripcion.innerHTML = "";
    muneco.remove();
    copiar.remove();
  } else {
    respuesta.removeAttribute("hidden");
    respuesta.value = encriptarTexto();
    crearBoton();
    resultado.appendChild(copiar);
    mensaje.remove();
    texto.value = "";
    descripcion.remove();
    muneco.remove();
  }
});

desencriptar.addEventListener("click", () => {
  if (vacio()) {
    mensaje.innerHTML = "Tiene que ingresar un texto para desencriptar";
    descripcion.innerHTML = "";
    muneco.remove();
    copiar.remove();
  } else {
    respuesta.removeAttribute("hidden");
    respuesta.value = desencriptarTexto();
    crearBoton();
    resultado.appendChild(copiar);
    mensaje.remove();
    texto.value = "";
    descripcion.remove();
    muneco.remove();
  }
});

copiar.addEventListener("click", () => {
  respuesta.select();
  document.execCommand("copy");
});
