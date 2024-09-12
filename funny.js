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

addEventListener("scroll", (event) => {hideMenu()});


function hideMenu() {
    const menu = document.getElementById('menu')
    let menuOpacity = 0;
    const menuFadeStep = 10;

    var currentScroll = window.scrollY;

    // Identify if page has been scrolled more than 350px, if it has,
    // it will make the menu bar at the top of the screen's background
    // visible. By default, the menu background is transparent.
    if (currentScroll < 10) {
        setTimeout(function() {
            const fadeInterval = setInterval(function() {
                if (menuOpacity < 1) {
                    menuOpacity -= (menuFadeStep / 500);
                    menu.style.backgroundImage = `linear-gradient(rgba(255,255,255,${menuOpacity}), rgba(255,255,255,${menuOpacity - 50}))`;
                } else {
                    clearInterval(fadeInterval);
                };
            }, menuFadeStep);
        }, 0);
    } else if (currentScroll > 10) {
        let menuOpacity = 
        setTimeout(function() {
            const fadeInterval = setInterval(function() {
                if (menuOpacity > 1) {
                    menuOpacity += (menuFadeStep / 500);
                    menu.style.backgroundImage = `linear-gradient(rgba(255,255,255,${menuOpacity}) 80%, rgba(255,255,255,${menuOpacity - 50}))`;
                } else {
                    clearInterval(fadeInterval);
                };
            }, menuFadeStep);
        }, 0);
    }
}