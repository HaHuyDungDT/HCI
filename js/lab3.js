const lessonData = {
    1: {
        title: '1. Introduction to Python',
        slides: [
            'py1.jpg',
            'pi2.png',
            'pi3.png'
        ]
    },
    2: {
        title: '2. Setting Up the Development Environment',
        slides: [
            'py4.jpg',
            'py5.jpg',
            'py6.jpg'
        ]
    },
    3: {
        title: '3. Django Basic',
        slides: [
            'py7.jpg',
            'py8.jpg',
            'py9.jpg'
        ]
    },
    4: {
        title: '4. Django Advanced Concepts',
        slides: [
            'py10.jpg',
            'py11.png',
            'py12.png'
        ]
    },
    5: {
        title: '5. Pythonanywhere',
        slides: [
            'py13.jpg',
            'py14.png',
            'py15.png'
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