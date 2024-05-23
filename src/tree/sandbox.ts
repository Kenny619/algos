// function generateRandomInts(variations: number): number[] {
// 	const output: number[] = [];

// 	while (output.length < variations) {
// 		const val = Math.ceil(Math.random() * variations);
// 		if (!output.includes(val)) output.push(val);
// 	}

// 	return output;
// }

function distribution(testRounds: number) {
	const output: { [Key: string]: { cnt: number; percentage: number } } = {
		true: { cnt: 0, percentage: 0 },
		false: { cnt: 0, percentage: 0 },
	};

	for (let j = 1; j <= testRounds; j++) {
		const val = Math.ceil(Math.random() * 10) % 2 === 0;
		output[String(val)].cnt++;
	}

	for (const n in output) {
		output[n].percentage = Number.parseFloat(((output[n].cnt / testRounds) * 100).toFixed(3));
	}

	console.log(output);
}

distribution(1000000000);
