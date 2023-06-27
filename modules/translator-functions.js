import { englishChars, morseChars } from "./character-objects.js";

const englishToMorse = (english) => {
	const toRet = english
		.trim()
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
			if (char === "") {
				throw new Error("Please only enter one space between morse characters");
			} else if (char.length > 4) {
				throw new Error("Morse characters need spaces between them");
			} else if (!morseChars[char]) {
				throw new Error("Please enter a valid Morse character");
			}
			return morseChars[char];
		})
		.join("")
		.toLowerCase();
	return toRet;
};

export { englishToMorse, morseToEnglish };
