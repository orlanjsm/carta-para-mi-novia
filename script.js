document.getElementById("openLetterBtn").addEventListener("click", function() {
    let letter = document.getElementById("letter");
    let letterInside = document.querySelector(".letter-inside");
    let image = document.querySelector(".decorative-heart"); // Seleccionamos la imagen
    let topText = document.getElementById("topText"); // Seleccionamos el texto "Para la más hermosa"

    // Hacemos visible la carta al principio
    letterInside.style.opacity = 1;
    letterInside.style.transform = "translateY(0)";  // La carta sale suavemente del sobre

    // Animación de apertura del sobre
    letter.style.transform = "scale(1)";  // La carta se despliega

    // Ocultamos la imagen
    image.style.display = "none"; // Esto oculta la imagen

    // Ocultamos el texto "Para la más hermosa"
    topText.style.display = "none"; // Esto oculta el texto

    // Ocultamos el botón después de hacer clic
    this.style.display = "none"; 
});
