//находим все якорные ссылки (на будущее - вдруг будет больше одной
const anchorLinks = document.querySelectorAll('a[href^="#"]');

//добавлеяем плавную прокрутку
 anchorLinks.forEach(link => {
	 link.addEventListener('click', function (evt) {
		 evt.preventDefault();
		 const blockId = link.getAttribute('href');

		 document.querySelector(blockId).scrollIntoView({
			 behavior: 'smooth',
			 block: 'start'
		 });
	 });
 });

 //слайдер для галереи
const gallery = document.querySelector('.gallery')
const gallerySliderList = gallery.querySelector('.gallery__slider-list');
const gallerySliderTrack = gallery.querySelector('.gallery__slider-track');
const gallerySlides = gallery.querySelectorAll('.gallery__slide');
const gallerySliderButtons = gallery.querySelectorAll('.gallery__slider-dot');

const gallerySliderButtonPrev = gallerySliderButtons[0];
const gallerySliderButtonNext = gallerySliderButtons[1];

let slideWidth = gallerySlides[0].offsetWidth;
let slideIndex = 0;
let positionStart = 0;
let positionX1 = 0;
let positionX2 = 0;
let positionFinal = 0;
let positionCheck = slideWidth / 3;

 function getEvent() {
	 if (event.type.search('touch') !== -1) {
		 return event.touches[0]
	 } else return event;
 }

 function swipeStart() {
	 let event = getEvent();

	 positionStart = positionX1 = event.clientX;

	 document.addEventListener('touchmove', swipeAction);
	 document.addEventListener('touchend', swipeEnd);
	 document.addEventListener('mousemove', swipeAction);
	 document.addEventListener('mouseup', swipeEnd);
 }

 function swipeAction() {
	 let event = getEvent();
 }
