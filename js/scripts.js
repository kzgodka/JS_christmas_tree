// file scripts.js

var name = prompt('Wpisz swoje imię');
//alert('Witaj, ' + name);
console.log('Witaj, ' + name);

/*new comment
with one...
two...
three lines */

var a = parseInt(prompt('Podaj długość podstawy')),
	h = parseInt(prompt('Podaj wysokość')),
	triangleArea = a*h/2;

if (isNaN(a) || isNaN(h)) {
	alert('Wprowadzono błędne dane. Wprowadź cyfry.')
} else {
	console.log('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea)
}


