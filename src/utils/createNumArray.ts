export default function createNumArray(length: number): number[] {
	/*
    len<10 = 1-10 Math.ceil(Math.random() * 10)
    len<100 = 1-100 

    */
	const output: number[] = [];
	while (output.length !== length) {
		const int = Math.ceil(Math.random() * length);
		if (!output.includes(int)) output.push(int);
	}

	return output;
}
