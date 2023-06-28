import {
	englishToMorse,
	morseToEnglish,
} from "./modules/translator-functions.js";

const englishInput = document.querySelector("#englishInput");
const morseInput = document.querySelector("#morseInput");
const translateBtn = document.querySelector("#translateBtn");
const inputs = document.querySelectorAll(".translator-form__input");

translateBtn.addEventListener("click", (e) => {
	e.preventDefault();
	if (englishInput.value && morseInput.value) {
		englishInput.value = "";
		morseInput.value = "";
	} else if (englishInput.value) {
		try {
			morseInput.value = englishToMorse(englishInput.value);
		} catch (e) {
			morseInput.value = e;
		}
	} else if (morseInput.value) {
		try {
			englishInput.value = morseToEnglish(morseInput.value);
		} catch (e) {
			englishInput.value = e;
		}
	}
});

inputs.forEach((input) => {
	input.addEventListener("click", () => {
		if (input.classList.contains("english")) {
			morseInput.value = "";
			console.log("english");
		} else {
			englishInput.value = "";
		}
	});
	input.addEventListener("keydown", (e) => {
		if (e.key == "Enter") {
			e.preventDefault();
		}
	});
});
