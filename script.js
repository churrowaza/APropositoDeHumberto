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

var images = [
    "AGNES.jpeg",
    "AYQUEMELLO.jpeg",
"INTERIOR.jpeg",
"ITOOKTHEBLAME.jpeg",
"MEMORYLANE.jpeg",
"MIPIACI.jpeg",
"NOPAINNOGAIN.jpeg",
"PIZZATURNO.jpeg",
"TEATRO.jpeg"
    // Agregar más imágenes
];

var currentImageIndex = 0;
var imageSlider = document.getElementById("image-slider");


function cambiarImagen() {
    imageSlider.style.backgroundImage = "url('" + images[currentImageIndex] + "')";
    currentImageIndex = (currentImageIndex + 1) % images.length;
}
