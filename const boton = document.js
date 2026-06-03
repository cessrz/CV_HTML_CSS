// Seleccionamos la pantalla de carga y todos los enlaces del menú
const pantallaCarga = document.getElementById('pantalla-carga');
const enlaces = document.querySelectorAll('.enlace-menu');

enlaces.forEach(enlace => {
  enlace.addEventListener('click', (e) => {
    // 1. Detenemos temporalmente el salto inmediato a la sección
    e.preventDefault(); 
    
    // Guardamos la sección a la que quiere ir (ej: "#servicios")
    const destino = enlace.getAttribute('href');

    // 2. Mostramos la pantalla de carga quitando 'hidden'
    pantallaCarga.classList.remove('hidden');

    // 3. Simulamos la carga con un temporizador (2000 milisegundos = 2 segundos)
    setTimeout(() => {
      // Ocultamos la pantalla de carga de nuevo
      pantallaCarga.classList.add('hidden');
      
      // 4. Llevamos al usuario a la sección de forma suave (Smooth Scroll)
      document.querySelector(destino).scrollIntoView({
        behavior: 'smooth'
      });
    }, 2000); 
  });
});