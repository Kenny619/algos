import createNumArray from "../utils/createNumArray";
console.time();
const data = createNumArray(5000);
const result = mergeSort(data);
console.log(result);
console.timeEnd();

function mergeSort(arr: number[]): number[] {
	if (arr.length === 1) {
		return arr;
	}

	const arrLeft = arr.slice(0, Math.ceil(arr.length / 2));
	const arrRight = arr.slice(Math.ceil(arr.length / 2));

	const left = mergeSort(arrLeft);
	const right = mergeSort(arrRight);

	return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
	const merged: number[] = [];
	let l = 0;
	let r = 0; //while (!(l === left.length && r === right.length)) {
	while (l + r < left.length + right.length) {
		if (l === left.length) {
			merged.push(right[r]);
			r++;
		} else if (r === right.length) {
			merged.push(left[l]);
			l++;
		} else if (left[l] <= right[r]) {
			merged.push(left[l]);
			l++;
		} else if (right[r] <= left[l]) {
			merged.push(right[r]);
			r++;
		}
	}
	return merged;
}
