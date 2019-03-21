//$(document).scroll(() => {
//	$('.navbar').toggleClass('scrolled', $(this).scrollTop() > $('.navbar').height())
//})
//

const nav = document.querySelector('.navbar');

window.addEventListener('scroll', (e) => {

	if (window.pageYOffset > 56) {

		nav.classList.add('scrolled')

	} else {

		nav.classList.remove('scrolled')
	}
})

const curDate = new Date();
const curYear = curDate.getFullYear();
const showYear = document.querySelector('#year');
showYear.textContent = curYear;

const navBtn = document.querySelector('.navbar-toggler');
const navLinks = document.querySelectorAll('.nav-link');

//console.log(navLinks) 
navLinks.forEach(navLink => {
	const lis = document.querySelectorAll('.nav-item');

	navLink.addEventListener('click', () => {

		document.querySelector('.navbar-collapse').classList.remove('show');

		if (navLink.parentElement.classList.contains('active') === false) {

			lis.forEach(li => {
				li.classList.remove('active')
			});
			navLink.parentElement.classList.add('active')

		}
	})
})


// AOS
AOS.init();
