// Mostrar el spinner
function showSpinner() {
    document.getElementById("spinner").style.display = "flex";
  }
  
  // Ocultar el spinner
  function hideSpinner() {
    document.getElementById("spinner").style.display = "none";
  }
  
  // Ejemplo de cómo utilizar el spinner
  // Muestra el spinner durante 3 segundos, luego lo oculta
  showSpinner();
  setTimeout(hideSpinner, 600);
  