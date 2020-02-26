let clickMe = document.querySelector('.clickMe');

clickMe.addEventListener('click', function () {
    let imgHidden = document.querySelector('.slider__wrapper');
    let hiddenClass = 'hidden'

    if (!imgHidden.classList.contains(hiddenClass)) {
        imgHidden.classList.add(hiddenClass);
        clickMe.value = 'Нажмите, чтобы показать слайдер';
    } else { 
        imgHidden.classList.remove(hiddenClass);
        clickMe.value = 'Нажмите, чтобы спрятать слайдер';
    }
})

