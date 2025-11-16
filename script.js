// Comparison slider functionality
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.comparison-slider');
    const handle = document.querySelector('.slider-handle');
    const afterImage = document.querySelector('.after-image');
    let isDragging = false;

    function updateSlider(clientX) {
        const rect = slider.getBoundingClientRect();
        let position = ((clientX - rect.left) / rect.width) * 100;
        position = Math.max(0, Math.min(100, position));
        afterImage.style.width = position + '%';
        handle.style.left = position + '%';
    }

    // Mouse events
    slider.addEventListener('mousedown', function(e) {
        isDragging = true;
        updateSlider(e.clientX);
    });

    document.addEventListener('mousemove', function(e) {
        if (isDragging) updateSlider(e.clientX);
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
    });

    // Touch events
    slider.addEventListener('touchstart', function(e) {
        isDragging = true;
        updateSlider(e.touches[0].clientX);
        e.preventDefault();
    });

    document.addEventListener('touchmove', function(e) {
        if (isDragging) {
            updateSlider(e.touches[0].clientX);
            e.preventDefault();
        }
    });

    document.addEventListener('touchend', function() {
        isDragging = false;
    });

    // Thumbnail click handler
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            // Здесь будет логика смены основного изображения
        });
    });

    // Form submission
    const form = document.querySelector('.booking-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Заявка отправлена! Мы свяжемся с вами в течение 15 минут.');
        form.reset();
    });
});