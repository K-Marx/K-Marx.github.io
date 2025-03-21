// Wait for DOM content to load before applying animations
document.addEventListener("DOMContentLoaded", function () {

    // Parallax Effect for Background Image
    window.addEventListener("scroll", function () {
        let offset = window.pageYOffset; // Get scroll offset
        document.getElementById("home").style.backgroundPosition = "center " + (offset * 0.5) + "px"; // Parallax effect
    });

    // Fade-in and Slide-up effect for Home Content (heading, paragraph)
    let homeContent = document.querySelector('.home-content');
    let homeSection = document.getElementById('home');
    
    // Triggering the animation when the section is in the viewport
    window.addEventListener('scroll', function () {
        let position = homeSection.getBoundingClientRect();
        if (position.top >= 0 && position.bottom <= window.innerHeight) {
            homeContent.style.opacity = 1;
            homeContent.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            homeContent.style.transform = 'translateY(0)';
        }
    });

    // Hover animation for Logo (Shake Effect)
    let logo = document.getElementById('logo');
    logo.addEventListener('mouseenter', function () {
        logo.style.animation = 'shake 0.5s ease-in-out';
    });
    logo.addEventListener('animationend', function () {
        logo.style.animation = ''; // Reset after animation ends
    });

    // Shake animation (keyframes)
    let styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
        @keyframes shake {
            0% { transform: rotate(0deg); }
            25% { transform: rotate(10deg); }
            50% { transform: rotate(0deg); }
            75% { transform: rotate(-10deg); }
            100% { transform: rotate(0deg); }
        }
    `, styleSheet.cssRules.length);

});
