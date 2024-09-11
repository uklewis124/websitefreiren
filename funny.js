function intro_banner() {
    var current_transparency = 1;
    var running = true;
    var banner = document.getElementById("banner");
        
    function decreaseOpacity() {
        banner.style.opacity = current_transparency;
        current_transparency -= 0.02;

        if (current_transparency >= 1) {
            running = false;
        } else {
            setTimeout(decreaseOpacity, 1000);
        }
    }

    decreaseOpacity();
}

document.addEventListener("DOMContentLoaded", function(event){
    intro_banner();
});
