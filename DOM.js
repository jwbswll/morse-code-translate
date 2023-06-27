import {
	englishToMorse,
	morseToEnglish,
} from "./modules/translator-functions.js";

const englishInput = document.querySelector("#englishInput");
const morseInput = document.querySelector("#morseInput");
const translateBtn = document.querySelector("#translateBtn");
const output = document.querySelector("#output");

translateBtn.addEventListener("click", (e) => {
	e.preventDefault();
	output.innerText = "";
	if (englishInput.value && morseInput.value) {
		output.innerText = "Error: Can only translate one language at once";
	} else if (englishInput.value) {
		try {
			const outputValue = document.createTextNode(
				englishToMorse(englishInput.value)
			);
			output.appendChild(outputValue);
			englishInput.value = "";
		} catch (e) {
			const outputValue = document.createTextNode(e);
			output.appendChild(outputValue);
			englishInput.value = "";
		}
	} else if (morseInput.value) {
		try {
			const outputValue = document.createTextNode(
				morseToEnglish(morseInput.value)
			);
			output.appendChild(outputValue);
			morseInput.value = "";
		} catch (e) {
			const outputValue = document.createTextNode(e);
			output.appendChild(outputValue);
			morseInput.value = "";
		}
	}
});
