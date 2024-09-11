window.onload = function() {
    const topImage = document.getElementById('top-image');
    let opacity = 1;
    const fadeDuration = 1000;
    const fadeStep = 10;
    const finalOpacity = 0.2

    setTimeout(function() {
        const fadeInterval = setInterval(function() {
            if (opacity > finalOpacity) {
                opacity -= (fadeStep / fadeDuration);
                topImage.style.opacity = opacity;
            } else {
                clearInterval(fadeInterval);
            }
        }, fadeStep);
    }, 2500);
}