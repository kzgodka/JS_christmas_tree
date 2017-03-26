var size = prompt('podaj wysokosc')

function drawTree (size) {
	for (i=0; i<=size; i++) {
		var star = '';

		for (j=0; j<i*2-1; j++) {
			star += '*'; 
		}
		console.log(star);
	}
}

var draw = drawTree(size);
console.log(draw);