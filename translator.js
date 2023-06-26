const englishChars = {
	A: ".-",
	B: "-...",
	C: "-.-.",
	D: "-..",
	E: ".",
	F: "..-.",
	G: "--.",
	H: "....",
	I: "..",
	J: ".---",
	K: "-.-",
	L: ".-..",
	M: "--",
	N: "-.",
	O: "---",
	P: ".--.",
	Q: "--.-",
	R: ".-.",
	S: "...",
	T: "-",
	U: "..-",
	V: "...-",
	W: ".--",
	X: "-..-",
	Y: "-.--",
	Z: "--..",
	" ": "/",
};

const morseChars = {
	".-": "A",
	"-...": "B",
	"-.-.": "C",
	"-..": "D",
	".": "E",
	"..-.": "F",
	"--.": "G",
	"....": "H",
	"..": "I",
	".---": "J",
	"-.-": "K",
	".-..": "L",
	"--": "M",
	"-.": "N",
	"---": "O",
	".--.": "P",
	"--.-": "Q",
	".-.": "R",
	"...": "S",
	"-": "T",
	"..-": "U",
	"...-": "V",
	".--": "W",
	"-..-": "X",
	"-.--": "Y",
	"--..": "Z",
	"/": " ",
};

const englishToMorse = (english) => {
	const toRet = english
		.toUpperCase()
		.split("")
		.map((char) => {
			if (!/^[a-z\s]+$/i.test(char)) {
				throw new Error(
					"Please enter only characters between A and Z and spaces"
				);
			}
			return englishChars[char] + " ";
		})
		.join("")
		.trim();
	return toRet;
};

const morseToEnglish = (morse) => {
	const toRet = morse
		.split(" ")
		.map((char) => {
			if (!morseChars[char]) {
				throw new Error("Please enter a valid Morse character");
			}
			return morseChars[char];
		})
		.join("")
		.toLowerCase();
	return toRet;
};

export { englishToMorse, morseToEnglish };
