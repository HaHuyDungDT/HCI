const lessonData = {
    1: {
        title: '1. Introduction to Python',
        slides: [
            '../img/py1.jpg',
            '../img/pi2.png',
            '../img/pi3.png'
        ]
    },
    2: {
        title: '2. Setting Up the Development Environment',
        slides: [
            '../img/py4.jpg',
            '../img/py5.jpg',
            '../img/py6.jpg'
        ]
    },
    3: {
        title: '3. Django Basic',
        slides: [
            '../img/py7.jpg',
            '../img/py8.jpg',
            '../img/py9.jpg'
        ]
    },
    4: {
        title: '4. Django Advanced Concepts',
        slides: [
            '../img/py10.jpg',
            '../img/py11.png',
            '../img/py12.png'
        ]
    },
    5: {
        title: '5. Pythonanywhere',
        slides: [
            '../img/py13.jpg',
            '../img/py14.png',
            '../img/py15.png'
        ]
    },
};

document.querySelectorAll('.lesson-link').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        const lessonId = e.target.getAttribute('data-lesson');
        const lesson = lessonData[lessonId];

        // Update title
        document.getElementById('lesson-title').textContent = lesson.title;

        // Update slides in the carousel
        const carouselContent = document.getElementById('carousel-content');
        carouselContent.innerHTML = ''; // Clear current slides

        lesson.slides.forEach((slide, index) => {
            const activeClass = index === 0 ? 'active' : '';
            const newSlide = `
                    <div class="carousel-item ${activeClass}">
                        <img src="${slide}" height="450px" class="d-block w-100" alt="Slide ${index + 1}">
                    </div>
                `;
            carouselContent.innerHTML += newSlide;
        });
    });
});