window.onload = function() {
    const topImage = document.getElementById('top-image');
    const menu = document.getElementById('menu');
    let opacity = 1;
    let menuOpacity = 0;
    const fadeDuration = 1000;
    const fadeStep = 10;
    const finalOpacity = 0.2
    let loadOpacity = 1;

    // Removing Loading Screen

    const loading = document.getElementById('loading');
    const loadingText = document.getElementById('loading').getElementsByTagName('p')[0];

    setTimeout(function() {
        const fadeInterval = setInterval(function() {
            if (loadOpacity > 0) {
                loadOpacity -= (fadeStep / 500);
                loading.style.opacity = loadOpacity;
                loadingText.style.opacity = loadOpacity;
                loading.style.backgroundColor = `rgba(255, 255, 255, ${loadOpacity})`;
            } else {
                clearInterval(fadeInterval);
            };
        }, fadeStep);
    }, 1000);

    

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
    }, 1000);
}