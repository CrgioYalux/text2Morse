const ABC_Morse = {
	a: '.-',
	b: '-...',
	c: '-.-.',
	d: '-..',
	e: '.',
	f: '..-.',
	g: '--.',
	h: '....',
	i: '..',
	j: '.---',
	k: '-.-',
	l: '.-..',
	m: '--',
	n: '-.',
	o: '---',
	p: '.--.',
	q: '--.-',
	r: '.-.',
	s: '...',
	t: '-',
	u: '..-',
	v: '...-',
	w: '.--',
	x: '-..-',
	y: '-.--',
	z: '--..',
	0: '-----',
	1: '.----',
	2: '..---',
	3: '...--',
	4: '....-',
	5: '.....',
	6: '-....',
	7: '--...',
	8: '---..',
	9: '----.',
	'.': '.-.-.-',
	',': '-.-.--',
	'?': '..--..',
	'!': '--..--',
};

window.onload = function () {
	const MorseContainer = document.getElementById('MorseContainer');
	const TextContainer = document.getElementById('TextContainer');
	TextContainer.addEventListener('keyup', (event) => {
		MorseContainer.value = TextToMorse(event.target.value);
	});
	MorseContainer.addEventListener('keyup', (event) => {
		TextContainer.value = MorseToText(event.target.value);
	});
};

const TextToMorse = (text) => {
	const lowered = text.toLowerCase();
	const splitted = lowered.split('');
	let textInMorse = '';

	for (let i = 0; i < splitted.length; i++) {
		for (let key in ABC_Morse) {
			if (splitted[i] === key) {
				textInMorse += ABC_Morse[key] + ' ';
			} else if (splitted[i] === ' ') {
				textInMorse += '';
			}
		}
	}
	return textInMorse.trim();
};

const MorseToText = (morse) => {
	const splitted = morse.split(' ');
	let morseInText = '';

	for (let i = 0; i < splitted.length; i++) {
		for (var key in ABC_Morse) {
			if (splitted[i] === ABC_Morse[key]) {
				morseInText += key + '';
			} else if (splitted[i] === '') {
				morseInText += ' ';
			}
		}
	}
	return morseInText.trim();
};
