// Arreglo que almacena los contactos
let contactos = [];

function agregarContacto() {
  let nombre   = document.getElementById("nombre").value.trim();
  let telefono = document.getElementById("telefono").value.trim();
  let correo   = document.getElementById("correo").value.trim();
  let mensaje  = document.getElementById("mensajeFormulario");

  // Validaciones
  let soloLetras    = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  let soloNumeros   = /^[0-9]{7,15}$/;
  let formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nombre === "" || telefono === "" || correo === "") {
    mensaje.innerText = "Todos los campos son obligatorios.";
    mensaje.className = "error";
    return;
  }

  if (!soloLetras.test(nombre)) {
    mensaje.innerText = "El nombre solo debe contener letras.";
    mensaje.className = "error";
    return;
  }

  if (!soloNumeros.test(telefono)) {
    mensaje.innerText = "El teléfono debe contener entre 7 y 15 dígitos.";
    mensaje.className = "error";
    return;
  }

  if (!formatoCorreo.test(correo)) {
    mensaje.innerText = "El correo no tiene un formato válido.";
    mensaje.className = "error";
    return;
  }

  // Crear contacto y agregarlo al arreglo
  let nuevoContacto = { nombre, telefono, correo };
  contactos.push(nuevoContacto);

  mensaje.innerText = "Contacto agregado correctamente.";
  mensaje.className = "exito";

  // Limpiar campos
  document.getElementById("nombre").value   = "";
  document.getElementById("telefono").value = "";
  document.getElementById("correo").value   = "";

  mostrarContactos();
}

function mostrarContactos() {
  // por implementar en siguiente rama
}

function eliminarContacto(index) {
  // por implementar en siguiente rama
}