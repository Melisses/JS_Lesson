///////////////////hide slider////////////////////////
let clickMe = document.querySelector('.clickMe');

clickMe.addEventListener('click', function () {
    let areaHidden = document.querySelector('.slider-area');
    let hiddenClass = 'hidden'

    if (!areaHidden.classList.contains(hiddenClass)) {
        areaHidden.classList.add(hiddenClass);
        clickMe.value = 'Нажмите, чтобы показать слайдер';
    } else { 
        areaHidden.classList.remove(hiddenClass);
        clickMe.value = 'Нажмите, чтобы спрятать слайдер';
    }
})

////////////////////slider////////////////////////////
var multiItemSlider = (function () {
    return function (selector) {
      var
        mainElement = document.querySelector(selector), // основный элемент блока
        sliderWrapper = mainElement.querySelector('.slider__wrapper'), // обертка для .slider-item
        sliderItems = mainElement.querySelectorAll('.slider__img'), // элементы (.slider-item)
        sliderControls = mainElement.querySelectorAll('.slider__control'), // элементы управления
        sliderControlLeft = mainElement.querySelector('.slider__control_left'), // кнопка "LEFT"
        sliderControlRight = mainElement.querySelector('.slider__control_right'), // кнопка "RIGHT"
        wrapperWidth = parseFloat(getComputedStyle(sliderWrapper).width), // ширина обёртки
        itemWidth = parseFloat(getComputedStyle(sliderItems[0]).width), // ширина одного элемента    
        positionLeftItem = 0, // позиция левого активного элемента
        transformValue = 0, // значение транфсофрмации .slider_wrapper
        step = itemWidth / wrapperWidth * 100, // величина шага (для трансформации)
        items = []; // массив элементов
      // наполнение массива items
      sliderItems.forEach(function (item, index) {
        items.push({ item: item, position: index, transform: 0 });
      });

      var position = {
        getMin: 0,
        getMax: items.length - 1,
      }

      var transformItem = function (direction) {
        if (direction === 'right') {
          if ((positionLeftItem + wrapperWidth / itemWidth - 1) >= position.getMax) {
            return;
          }
          if (!sliderControlLeft.classList.contains('slider__control_show')) {
            sliderControlLeft.classList.add('slider__control_show');
          }
          if (sliderControlRight.classList.contains('slider__control_show') && (positionLeftItem + wrapperWidth / itemWidth) >= position.getMax) {
            sliderControlRight.classList.remove('slider__control_show');
          }
          positionLeftItem++;
          transformValue -= step;
        }
        if (direction === 'left') {
          if (positionLeftItem <= position.getMin) {
            return;
          }
          if (!sliderControlRight.classList.contains('slider__control_show')) {
            sliderControlRight.classList.add('slider__control_show');
          }
          if (sliderControlLeft.classList.contains('slider__control_show') && positionLeftItem - 1 <= position.getMin) {
            sliderControlLeft.classList.remove('slider__control_show');
          }
          positionLeftItem--;
          transformValue += step;
        }
        sliderWrapper.style.transform = 'translateX(' + transformValue + '%)';
      }

      // обработчик события click для кнопок "назад" и "вперед"
      var controlClick = function (e) {
        if (e.target.classList.contains('slider__control')) {
          e.preventDefault();
          var direction = e.target.classList.contains('slider__control_right') ? 'right' : 'left';
          transformItem(direction);
        }
      };

      var setUpListeners = function () {
        // добавление к кнопкам "назад" и "вперед" обрботчика controlClick для событя click
        sliderControls.forEach(function (item) {
          item.addEventListener('click', controlClick);
        });
      }

      // инициализация
      setUpListeners();

      return {
        right: function () { // метод right
          transformItem('right');
        },
        left: function () { // метод left
          transformItem('left');
        }
      }

    }
  }());

  var slider = multiItemSlider('.slider-area')

////////////////////////slow anchers///////////////////////
var goTopBtn = document.querySelector('.ancher_top');
window.addEventListener('scroll', trackScroll);
function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = 100; //document.documentElement.clientHeight;

    if (scrolled > coords) {
        goTopBtn.classList.add('ancher_top-show');
    } else {
        goTopBtn.classList.remove('ancher_top-show');
    }
}

document.querySelectorAll('a[href^="#"').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.querySelector('[data-ancher^="' + href + '"');

        //const topOffset = document.querySelector('.scrollto').offsetHeight;
        const topOffset = 0; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

////////////////////////new block///////////////////////
window.addEventListener('load', function() {
    let navs = document.querySelector('.nav')
    setTimeout(() => {
        navs.style.display='block';
    }, 2000);
});