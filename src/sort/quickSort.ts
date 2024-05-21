import createNumArray from "../utils/createNumArray";
console.time();
const data = createNumArray(5000);
const result = quicksort(data);
console.log(result);
console.timeEnd();

function quicksort(data: number[]): number[] {
	const pivot = data[data.length - 1];
	let j = 0;
	let i = j - 1;
	while (j < data.length - 1) {
		if (data[j] < pivot) {
			i++;
			swap(data, i, j);
		}
		j++;
	}
	i++;
	swap(data, i, j);

	//--- sorting subarrays
	const left = data.slice(0, i);
	const center = data[i];
	const right = data.slice(i + 1);

	const rLeft = left.length > 1 ? quicksort(left) : left;
	const rRight = right.length > 1 ? quicksort(right) : right;
	return [...rLeft, center, ...rRight];
}

function swap(arr: number[], i: number, j: number): void {
	const tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
}
