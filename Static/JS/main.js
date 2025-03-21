// main.js
document.addEventListener("DOMContentLoaded", () => {
    const socialIcons = document.querySelectorAll('.home-sci a');

    // Add a simple animation on hover (scale effect)
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.2)';
            icon.style.transition = 'transform 0.3s ease';
        });
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'scale(1)';
        });
    });
});
