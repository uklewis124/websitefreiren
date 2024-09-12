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
    var menuState = false;

    // Checking whether menu should be visible or invivisble
    if (currentScroll > 50) {
        menuState = true
    } else {
        menuState = false
    }
    // Identify if page has been scrolled more than 350px, if it has,
    // it will make the menu bar at the top of the screen's background
    // visible. By default, the menu background is transparent.
    if (menuState == false) { // if menu should be visible
        setTimeout(function() {
            const menuFadeInterval = setInterval(function() {
                if (menuOpacity > 0) {
                    menuOpacity -= (menuFadeStep / 500);
                    //loading.style.opacity = loadOpacity;
                    //loadingText.style.opacity = loadOpacity;
                    loading.style.backgroundImage = `linear-gradient(rgba(255, 255, 255, ${loadOpacity}), rgba(255,255,255, ${loadOpacity})`;
                } else {
                    clearInterval(menuFadeInterval);
                };
            }, fadeStep);
        }, 1000);
    } else { // menu should be invisible
        let menuOpacity = 
        setTimeout(function() {
            const fadeInterval = setTimeout(function() {
                //Function for fade goes here
            }, 2000)
        }, 0);
    }
}