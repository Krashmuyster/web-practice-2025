import Swiper from 'swiper';

// Подключаем только нужные модули: стрелки, точки, автопрокрутка
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Регистрируем модули — без этого Navigation/Pagination не заработают
Swiper.use([Navigation, Pagination, Autoplay]);

// Ищем слайдер по уникальному классу .mySlider
const mySlider = document.querySelector('.mySlider');

// Проверка: есть ли элемент на странице? (чтобы не упало)
if (mySlider) {
  // Создаём новый слайдер
  new Swiper(mySlider, {
    slidesPerView: 1,       // Сколько слайдов видно (десктоп)
    spaceBetween: 30,       // Отступ между слайдами (px)
    loop: true,             // Зациклить: после последнего — снова первый
    navigation:{
      nextEl: '.feature-link'
    },

    // Адаптив: настройки под разные экраны
    breakpoints: {
      576: { slidesPerView: 1, spaceBetween: 5 },   // mobile (≤576px)
      768: { slidesPerView: 1, spaceBetween: 10 },  // tablet (≤768px)
      1024: { slidesPerView: 1, spaceBetween: 20 }  // desktop (≥1024px)
    }
  });
}
