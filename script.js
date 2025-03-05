function showPoem() {
    const poem = document.getElementById('poem');
    poem.style.display = 'block';
    poem.style.opacity = 0;
    let opacity = 0;

    // Fade in animation
    const fadeIn = setInterval(function() {
        if (opacity < 1) {
            opacity += 0.1;
            poem.style.opacity = opacity;
        } else {
            clearInterval(fadeIn);
        }
    }, 30); // Adjust the speed by changing the interval (30ms for smooth fade)

}

function closePoem() {
    const poem = document.getElementById('poem');
    poem.style.opacity = 1;
    
    // Fade out animation
    const fadeOut = setInterval(function() {
        if (poem.style.opacity > 0) {
            poem.style.opacity -= 0.1;
        } else {
            poem.style.display = 'none';
            clearInterval(fadeOut);
        }
    }, 30);
}
