// Referencias a los elementos a modificar
    const toggleModeImg = document.getElementById('toggleMode');
    const logo = document.getElementById('logo');
    const flechaIzq = document.getElementById('flechaIzq');
    const flechaDer = document.getElementById('flechaDer');
    const hamburguesa = document.querySelector('.hamburguesa');
    
    // Función para actualizar las imágenes y estilos según el modo
    function actualizarModo(darkModeActivo) {
      if (darkModeActivo) {
        document.body.classList.add('modo-oscuro');
        toggleModeImg.src = './pag/modo_claro.svg';
        toggleModeImg.alt = 'Activar modo claro';
        logo.src = './pag/logo_64_f_n.svg';
        logo.alt = 'Logotipo modo oscuro';
        flechaIzq.src = './pag/boton_modo_n.svg';
        flechaIzq.alt = 'Portafolio de diseño gráfico (modo oscuro)';
        flechaDer.src = './pag/boton_r.svg';
        flechaDer.alt = 'Portafolio de diseño web (modo oscuro)';
        hamburguesa.style.color = "#ffffff";
      } else {
        document.body.classList.remove('modo-oscuro');
        toggleModeImg.src = './pag/modo_oscuro.svg';
        toggleModeImg.alt = 'Activar modo oscuro';
        logo.src = './pag/logo_64_f_b.svg';
        logo.alt = 'Logotipo';
        flechaIzq.src = './pag/boton_n.svg';
        flechaIzq.alt = 'Portafolio de diseño gráfico';
        flechaDer.src = './pag/boton_r.svg';
        flechaDer.alt = 'Portafolio de diseño web';
        hamburguesa.style.color = "#000000";
      }
    }
    
    // Comprobar el estado guardado en localStorage y actualizar en consecuencia
    const modoOscuroGuardado = localStorage.getItem('modoOscuro') === 'true';
    actualizarModo(modoOscuroGuardado);
    
    // Escuchar el clic en la imagen toggleMode
    toggleModeImg.addEventListener('click', () => {
      const modoOscuroActivo = document.body.classList.toggle('modo-oscuro');
      actualizarModo(modoOscuroActivo);
      localStorage.setItem('modoOscuro', modoOscuroActivo);
    });

     // Mostrar el pop-up al hacer clic en la hamburguesa
    hamburguesa.addEventListener('click', () => {
      popup.style.display = 'flex';
    });
    
    // Cerrar el pop-up al hacer clic en el botón de cierre
    popupClose.addEventListener('click', () => {
      popup.style.display = 'none';
    });
    
    // Cerrar el pop-up si se hace clic fuera del contenido
    window.addEventListener('click', (e) => {
      if (e.target === popup) {
        popup.style.display = 'none';
      }
    });
