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
