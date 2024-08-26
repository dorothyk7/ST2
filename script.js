// Hero Slider
const heroSlides = document.querySelectorAll('.hero .slide');
let currentHeroSlide = 0;

function showHeroSlide(n) {
    heroSlides.forEach(slide => slide.style.transform = `translateX(-${n * 100}%)`);
}

function nextHeroSlide() {
    currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
    showHeroSlide(currentHeroSlide);
}

setInterval(nextHeroSlide, 3000); // Change hero slide every 3 seconds


// Gallery Slider
const galleryItems = document.querySelectorAll('.gallery .gallery-item');
let currentGallerySlide = 0;

function showGallerySlide(n) {
    galleryItems.forEach(item => item.style.display = 'none');
    galleryItems[n].style.display = 'block';
}

function nextGallerySlide() {
    currentGallerySlide = (currentGallerySlide + 1) % galleryItems.length;
    showGallerySlide(currentGallerySlide);
}

setInterval(nextGallerySlide, 3000); // Change gallery slide every 3 seconds

// Initialize the first slide for both sliders
document.addEventListener('DOMContentLoaded', () => {
    showHeroSlide(currentHeroSlide);
    showGallerySlide(currentGallerySlide);
});
