window.addEventListener('load', function () {
	alert('Ласкаво просимо до Ores Market!')
})

function highlightTable() {
	const table = document.querySelector('table')
	table.style.backgroundColor = '#f0ffe0'
	table.style.border = '2px solid green'
}

function checkEmail(event) {
	const email = document.getElementById('email').value

	if (!email.includes('@')) {
		alert('Введіть правильний email!')
		event.preventDefault()
	} else {
		alert('Підписка успішна!')
	}
}

function easterEgg() {
	document.body.style.backgroundColor = '#222'
	document.body.style.color = '#fff'
}
