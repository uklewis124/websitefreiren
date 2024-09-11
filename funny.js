window.onload = function() {
    const topImage = document.getElementById('top-image');
    const menu = document.getElementById('menu');
    let opacity = 1;
    let menuOpacity = 0;
    const fadeDuration = 1000;
    const fadeStep = 10;
    const finalOpacity = 0.2

    setTimeout(function() {
        const fadeInterval = setInterval(function() {
            if (opacity > finalOpacity) {
                opacity -= (fadeStep / fadeDuration);
                topImage.style.opacity = opacity;

                menuOpacity += (fadeStep / fadeDuration);
                menu.style.opacity = menuOpacity;
            } else {
                clearInterval(fadeInterval);
            }
        }, fadeStep);
    }, 2500);
}