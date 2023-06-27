import { englishToMorse } from "./modules/translator-functions.js";
import { morseToEnglish } from "./modules/translator-functions.js";

const invalidAlphaError = new Error(
	"Please enter only characters between A and Z and spaces"
);
const invalidMorseError = new Error("Please enter a valid Morse character");

describe("Test cases for English to Morse Code function", () => {
	test("should add a space between morse codes", () => {
		expect(englishToMorse("abc")).toBe(".- -... -.-.");
	});
	test("should translate a valid English character to its morse counterpart", () => {
		expect(englishToMorse("A")).toBe(".-");
		expect(englishToMorse("Jack")).toBe(".--- .- -.-. -.-");
	});
	test("should translate a space to /", () => {
		expect(englishToMorse(" ")).toBe("/");
		expect(englishToMorse("Jack Boswell")).toBe(
			".--- .- -.-. -.- / -... --- ... .-- . .-.. .-.."
		);
		expect(
			englishToMorse("Come help me turn the snare up one more level")
		).toBe(
			"-.-. --- -- . / .... . .-.. .--. / -- . / - ..- .-. -. / - .... . / ... -. .- .-. . / ..- .--. / --- -. . / -- --- .-. . / .-.. . ...- . .-.."
		);
	});
	test("should translate case insensitive", () => {
		expect(englishToMorse("B")).toBe("-...");
		expect(englishToMorse("b")).toBe("-...");
	});
	test("should throw an error when argument is not a valid character", () => {
		expect(() => {
			englishToMorse("1");
		}).toThrow(invalidAlphaError);
		expect(() => {
			englishToMorse(",");
		}).toThrow(invalidAlphaError);
	});
});

describe("Test case for Morse to English translation", () => {
	test("should remove spaces between morse characters", () => {
		expect(morseToEnglish(".- -... -.-.")).toBe("abc");
	});
	test("should translate a valid Morse character to English counterpart", () => {
		expect(morseToEnglish(".-")).toBe("a");
		expect(morseToEnglish(".--- .- -.-. -.-")).toBe("jack");
	});
	test('should translate "/" to a space', () => {
		expect(morseToEnglish("/")).toBe(" ");
		expect(
			morseToEnglish(".--- .- -.-. -.- / -... --- ... .-- . .-.. .-..")
		).toBe("jack boswell");
		expect(
			morseToEnglish(
				".. / .--- ..- ... - / .... .. - / .- / - .-. .. -.-. -.- ... .... --- -"
			)
		).toBe("i just hit a trickshot");
	});
	test("should throw an error when argument is not a valid character", () => {
		expect(() => {
			morseToEnglish("a");
		}).toThrow(invalidMorseError);
		expect(() => {
			morseToEnglish(",");
		}).toThrow(invalidMorseError);
		expect(() => {
			morseToEnglish("a b c d e f ,");
		}).toThrow(invalidMorseError);
	});
});
