// Логика переключения слайдов отзывов
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.review-slide');
    const prevBtns = document.querySelectorAll('.prev-btn');
    const nextBtns = document.querySelectorAll('.next-btn');
    const totalSlides = slides.length;
    let currentIndex = 0;

    showSlide(currentIndex);

    prevBtns.forEach(btn => btn.addEventListener('click', showPrevSlide));
    nextBtns.forEach(btn => btn.addEventListener('click', showNextSlide));

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = 'none';
            slide.classList.remove('active');
            if (i === index) {
                slide.style.display = 'block';
                slide.classList.add('active');
                const currentIndicator = slide.querySelector('#currentSlide');
                const totalIndicator = slide.querySelector('#totalSlides');
                if (currentIndicator) currentIndicator.textContent = index + 1;
                if (totalIndicator) totalIndicator.textContent = totalSlides;
            }
        });
    }

    function showPrevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        }
        showSlide(currentIndex);
    }

    function showNextSlide() {
        currentIndex++;
        if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }
        showSlide(currentIndex);
    }
});

// Логика отправки формы embedded-tariff-form
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('embedded-tariff-form');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const formData = new FormData(form);
            fetch('https://formcarry.com/s/W09WNPvSjBl', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json',
                },
            })
            .then(response => response.json())
            .then(data => {
                console.log('Ответ сервера:', data);
                if (data.success || data.status === 'success') {
                    alert('Форма успешно отправлена!');
                    form.reset();
                } else {
                    console.error('Ошибка Formcarry:', data);
                    alert('Ошибка при отправке формы. Проверьте данные.');
                }
            })
        });
    } else {
        console.error('Форма не найдена.');
    }
});

// Логика отправки формы custom-tariff-form
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('custom-tariff-form');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const formData = new FormData(form);
            fetch('https://formcarry.com/s/W09WNPvSjBl', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json',
                },
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Форма успешно отправлена!');
                    form.reset();
                } else {
                    console.error('Ошибка Formcarry:', data);
                    alert('Ошибка при отправке формы.');
                }
            })
            .catch(error => {
                console.error('Ошибка при подключении:', error);
                alert('Ошибка при подключении к серверу.');
            });
        });
    } else {
        console.error('Форма не найдена.');
    }
});

// Логика для всплывающего окна (popup)
document.addEventListener('DOMContentLoaded', function () {
    const openPopupBtn = document.getElementById('open-popup');
    const closePopupBtn = document.getElementById('close-popup');
    const popupOverlay = document.getElementById('popup-overlay');
    const popupContent = document.querySelector('.popup-content');
    const body = document.body;

    if (openPopupBtn && closePopupBtn && popupOverlay && popupContent) {
        openPopupBtn.addEventListener('click', () => {
            popupOverlay.style.display = 'block';
            popupContent.classList.remove('hide');
            popupContent.classList.add('show');
            body.classList.add('no-scroll');
        });

        closePopupBtn.addEventListener('click', () => {
            popupContent.classList.remove('show');
            popupContent.classList.add('hide');
            popupContent.addEventListener('animationend', () => {
                popupOverlay.style.display = 'none';
            }, { once: true });
            body.classList.remove('no-scroll');
        });

        window.addEventListener('click', (event) => {
            if (event.target === popupOverlay) {
                popupContent.classList.remove('show');
                popupContent.classList.add('hide');
                popupContent.addEventListener('animationend', () => {
                    popupOverlay.style.display = 'none';
                }, { once: true });
                body.classList.remove('no-scroll');
            }
        });
    }
});