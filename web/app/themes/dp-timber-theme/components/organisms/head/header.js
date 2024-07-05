window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.open');
	const close = document.querySelector('.close');
	const body = document.getElementsByTagName('body');

	body[0].classList.add("is-preload");
	setTimeout(() => {
		body[0].classList.remove("is-preload");
	}, 200);

	menu.addEventListener('click', (event) => {
		event.preventDefault()
		body[0].classList.add("is-menu-visible");
	});
	close.addEventListener('click', (event) => {
		event.preventDefault()
		body[0].classList.remove("is-menu-visible");
	});

	const header = document.getElementById('header');
	const hero = document.getElementsByClassName('hero')[0];

	function checkScroll() {
		const heroRect = hero.getBoundingClientRect();
		const headerHeight = header.offsetHeight;

		if (heroRect.bottom < headerHeight + 10) {
			header.classList.remove('alt');
			header.classList.add('reveal');
		} else {
			header.classList.add('alt');
			header.classList.remove('reveal');
		}
	}

	checkScroll();
	window.addEventListener('scroll', checkScroll);
	window.addEventListener('resize', checkScroll);

});
