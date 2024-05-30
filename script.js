// Disable scrolling
document.body.style.overflow = 'hidden';

// Disable right click
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
}, false);

// Disable touch scrolling for mobile
document.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, false);
