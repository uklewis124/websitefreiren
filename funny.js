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
    menuOpacity = 0;
    const menuFadeDuration = 5000;
    const menuFadeStep = 500;

    currentScroll = window.scrollY;
    let menuState = false;

    // Checking whether menu should be visible or invivisble
    if (currentScroll > 50) {
        // Set menu to 1 opacity
        console.log(`Scroll Detected | Scroll = ${currentScroll} | menuOpacity = ${menuOpacity}`)
        menu.style.backgroundColor = 'transparent';
        setTimeout(function(){
            console.log(`Timeout Ran | Scroll = ${currentScroll} | menuOpacity = ${menuOpacity}`)
            const fadeInterval2 = setInterval(function(){
                console.log(`Interval Ran | Scroll = ${currentScroll} | menuOpacity = ${menuOpacity}`)
                if (menuOpacity < 1) {
                    menuOpacity += 0.05;
                    menu.style.backgroundImage = `linear-gradient(rgba(255,255,255,${menuOpacity}), rgba(255,255,255,${menuOpacity - 0.5}))`
                }
                else {
                    clearInterval(fadeInterval2)
                }
            }, menuFadeStep); // execute function every fademilistep secconds
        }, 0); //Delay of whole fade
    } else {
        // Set menu to 0 opacity
        console.log(`Scroll Detected | Scroll = ${currentScroll} | menuOpacity = ${menuOpacity}`)
        menu.style.backgroundColor = 'transparent';
        setTimeout(function(){
            console.log(`Timeout Ran | Scroll = ${currentScroll} | menuOpacity = ${menuOpacity}`)
            const fadeInterval3 = setInterval(function(){
                console.log(`Interval Ran | Scroll = ${currentScroll} | menuOpacity = ${menuOpacity}`)
                if (menuOpacity > 0) {
                    menuOpacity -= 0.05;
                    menu.style.backgroundImage = `linear-gradient(rgba(255,255,255,${menuOpacity}), rgba(255,255,255,${menuOpacity - 0.5}))`
                }
                else {
                    clearInterval(fadeInterval3)
                }
            }, menuFadeStep); // execute function every fademilistep secconds
        }, 0); //Delay of whole fade
    }
    // Identify if page has been scrolled more than 350px, if it has,
    // it will make the menu bar at the top of the screen's background
    // visible. By default, the menu background is transparent.
}