function mostrarPoema(titulo, fecha, contenido) {
    var emergent = document.getElementById("emergent");
    var emergentContent = document.getElementById("emergent-content");
    
    // Llenar la ventana emergente con el contenido del poema y el botón de cerrar
    emergentContent.innerHTML = "<span class='close-button' onclick='CloseEmergent()'>&times;</span><h2>" + titulo + "</h2><p>" + fecha + "</p><p>" + contenido + "</p>";
    
    // Mostrar la ventana emergente
    emergent.style.display = "flex";
}

function CloseEmergent() {
    var emergent = document.getElementById("emergent");
    emergent.style.display = "none";
}

// Cerrar la ventana emergente al hacer clic fuera de ella
window.onclick = function(event) {
    var emergent = document.getElementById("emergent");
    if (event.target === emergent) {
        emergent.style.display = "none";
    }
}

