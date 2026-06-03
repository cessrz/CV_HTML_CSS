const pantallaCarga = document.getElementById('pantalla-carga');

document.querySelectorAll('.enlace-menu').forEach(enlace => {
  enlace.addEventListener('click', (e) => {
    e.preventDefault(); 
    const destino = enlace.getAttribute('href');

    pantallaCarga.classList.remove('hidden');
    setTimeout(() => {
      
      // Asegurar scroll fluido
      document.querySelector(destino).scrollIntoView({
        behavior: 'smooth'
      });
    }, 500); 
    setTimeout(() => {
      pantallaCarga.classList.add('hidden');
      
      // Asegurar scroll fluido
      document.querySelector(destino).scrollIntoView({
        behavior: 'smooth'
      });
    }, 2000); 
    
  });
});