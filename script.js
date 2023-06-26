// // const hello = "hello";
// const arr1 = [1, 2, 2, 2, 5, 4, 4];

// // const combine = (username, history) => {
// // 	return { username, history };
// // };
// // console.log(combine(hello, arr1));

// const myFunction = (arr) => {
// 	let count = 0;

// 	for (let i = 0; i < arr.length; ++i) {
// 		let current = arr[i];
// 		if (current === arr[i + 1]) {
// 			++count;
// 		} else {
// 			count;
// 		}
// 	}
// 	return count;
// };

// console.log(myFunction(arr1));

// const coach = {};
// coach.name = "remi";
// coach.age = 23;
// coach.name = "calum";
// coach.age += 7;

// console.log(coach);

const input = { cat: "fish", dog: "beef", mouse: "cheese" };

const output = Object.entries(input).reduce((acc, entry) => {
	const [key, value] = entry;
	acc[value] = key;
	return acc;
}, {});

console.log(output);

const getBreeds = async () => {
	const response = await fetch("https://catfact.ninja/breeds");
	return await response.json();
};

console.log(getBreeds());
