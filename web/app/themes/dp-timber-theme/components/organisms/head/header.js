window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.open');
	const close = document.querySelector('.close');
	const body = document.getElementsByTagName('body');
	const header = document.getElementById('header');
	const hero = document.getElementsByClassName('hero')[0];

	setTimeout(() => {
		console.log("Header Class Rmoved")
		header.classList.remove("is-preload");
	}, 100);

	menu.addEventListener('click', (event) => {
		event.preventDefault()
		body[0].classList.add("is-menu-visible");
	});

	close.addEventListener('click', (event) => {
		event.preventDefault()
		body[0].classList.remove("is-menu-visible");
	});

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
