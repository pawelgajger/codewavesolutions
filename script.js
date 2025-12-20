window.addEventListener('scroll', function () {
	const elements = document.querySelectorAll('.scroll-animate')
	elements.forEach(element => {
		const position = element.getBoundingClientRect().top
		const screenPosition = window.innerHeight / 1.3

		if (position < screenPosition) {
			element.classList.add('active')
		}
	})
})

// Po załadowaniu strony dodajemy klasę 'appear' do elementów z klasą 'fade-in-element'
document.addEventListener('DOMContentLoaded', () => {
	const fadeElements = document.querySelectorAll('.fade-in-element')
	fadeElements.forEach(element => {
		element.classList.add('appear')
	})
})

document.addEventListener('DOMContentLoaded', () => {
	const menuItems = document.querySelectorAll('.navbar ul li')
	menuItems.forEach((item, index) => {
		item.style.animationDelay = `${index * 0.2}s` // Automatyczne opóźnienie dla każdego elementu
		item.classList.add('fade-in-element') // Dodaje animację fade-in
	})
})

// Wyłączenie kliknięcia prawym przyciskiem myszy
document.addEventListener('contextmenu', function (e) {
	e.preventDefault()
})

document.addEventListener('keydown', function (e) {
	// Blokowanie "Ctrl + C", "Ctrl + X", "Ctrl + U" i "Ctrl + S"
	if (e.ctrlKey && (e.key === 'c' || e.key === 'x' || e.key === 'u' || e.key === 's')) {
		e.preventDefault()
	}
})

document.querySelectorAll('img').forEach(img => {
	img.addEventListener('dragstart', function (e) {
		e.preventDefault()
	})
})

// Zmienna do przechowywania poprzedniej pozycji przewijania
let lastScrollTop = 0

function scrollAnimation() {
	const elements = document.querySelectorAll('.animate-on-scroll')
	const windowHeight = window.innerHeight
	const currentScrollTop = window.scrollY

	elements.forEach(element => {
		const elementTop = element.getBoundingClientRect().top

		// Sprawdzenie, czy element jest w widocznym obszarze
		if (elementTop < windowHeight - 100) {
			// Przewijanie w dół
			if (currentScrollTop > lastScrollTop) {
				element.classList.add('slide-left', 'visible')
				element.classList.remove('slide-right')
			}
			// Przewijanie w górę
			else {
				element.classList.add('slide-right', 'visible')
				element.classList.remove('slide-left')
			}
		} else {
			// Resetowanie klas, gdy element jest poza widokiem
			element.classList.remove('visible', 'slide-left', 'slide-right')
		}
	})

	// Zaktualizowanie poprzedniej pozycji przewijania
	lastScrollTop = currentScrollTop
}

// Wywołanie animacji przy przewijaniu
window.addEventListener('scroll', scrollAnimation)

// Wywołanie animacji po załadowaniu strony
document.addEventListener('DOMContentLoaded', scrollAnimation)

document.addEventListener('DOMContentLoaded', () => {
	const gallery = document.querySelector('.gallery')
	const leftBtn = document.querySelector('.left-btn')
	const rightBtn = document.querySelector('.right-btn')

	let currentIndex = 0 // Indeks pierwszego widocznego zdjęcia
	const totalImages = gallery.children.length // Liczba wszystkich zdjęć
	const visibleImages = Math.floor(gallery.parentElement.offsetWidth / gallery.children[0].offsetWidth) // Liczba widocznych zdjęć
	const imageWidth = gallery.children[0].offsetWidth + parseInt(getComputedStyle(gallery.children[0]).marginRight) * 2

	leftBtn.addEventListener('click', () => {
		if (currentIndex > 0) {
			currentIndex--
			gallery.style.transform = `translateX(-${currentIndex * imageWidth}px)`
		}
	})

	rightBtn.addEventListener('click', () => {
		if (currentIndex < totalImages - visibleImages) {
			currentIndex++
			gallery.style.transform = `translateX(-${currentIndex * imageWidth}px)`
		}
	})
})
