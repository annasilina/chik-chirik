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
