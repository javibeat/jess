// Función para filtrar posts según la categoría
function filterPosts(category) {
    // Selecciona todos los posts
    var posts = document.getElementsByClassName('post-card');
    // Convierte la colección HTML a una matriz para su procesamiento
    Array.from(posts).forEach(function(post) {
        // Verifica si el post contiene la clase de categoría o si la categoría es 'all'
        if (post.classList.contains(category) || category === 'all') {
            post.style.display = 'block'; // Muestra el post
        } else {
            post.style.display = 'none'; // Oculta el post
        }
    });
}

document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const accordion = header.parentElement;

        if(accordion.classList.contains('active')) {
            accordion.classList.remove('active');
        } else {
            document.querySelectorAll('.accordion').forEach(acc => acc.classList.remove('active'));
            accordion.classList.add('active');
        }
    });
});


window.addEventListener('scroll', function() {
    var progress = document.querySelector('.scroll-progress');
    var containerRect = document.querySelector('.scroll-container').getBoundingClientRect();
    var containerTop = containerRect.top;
    var containerHeight = containerRect.height;
  
    // La línea roja solo aparecerá y se llenará cuando la sección esté en la vista
    if(containerTop < window.innerHeight && containerTop >= 0) {
      var percentage = (window.innerHeight - containerTop) / window.innerHeight;
      progress.style.height = `${percentage * 100}%`;
    } else if (containerTop < 0) {
      progress.style.height = '100%';
    } else {
      progress.style.height = '0%';
    }
  });
  
  document.addEventListener('DOMContentLoaded', (event) => {
    // Obtener el botón y el menú desplegable
    var dropbtn = document.querySelector('.dropbtn');
    var dropdown = document.querySelector('.dropdown');

    // Añadir evento click al botón
    dropbtn.addEventListener('click', function() {
        // Mostrar u ocultar el menú desplegable
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });

    // Cerrar el menú desplegable si se hace clic fuera de él
    window.addEventListener('click', function(e) {
        if (!dropbtn.contains(e.target)) {
            dropdown.style.display = 'none';
        }
    });
});
