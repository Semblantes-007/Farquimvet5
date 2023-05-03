window.addEventListener('load', function () {
    const dfMessenger = document.querySelector('df-messenger');
  
    dfMessenger.addEventListener('df-list-element-clicked', function (event) {
      // Obtener la ruta del archivo HTML que se abrirá
      const filePath = event.detail?.element?.event?.parameters?.filePath;
  
      if (filePath) {
        // Abrir el archivo HTML en otra pestaña
        window.open(filePath, '_blank');
      }
    });
  });
  