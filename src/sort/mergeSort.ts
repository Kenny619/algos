const arr = initArray(20);
split(arr);

/*
devide into 2 if possible
devide into 2 if possible
length one -> sort and return the result
sort the 2 returend result and return

*/
function inPlace(arr: number[]): number[] {
	const steps = Math.ceil(Math.log2(arr.length));
}

function swap(length: number, arr: number[]) {
	let leftP = 0;
	let rightP = leftP + length;

	while (rightP < arr.length - 1) {
		if (arr[leftP] <= arr[rightP] || rightP === arr.length - 1) {
			leftP = rightP;
			rightP = leftP + length;
		} else if (arr[leftP] >= arr[rightP]) {
		}
	}
}

function split(arr: number[]) {
	const splitAtIndex = Math.ceil(arr.length / 2);
	const left = arr.slice(0, splitAtIndex);
	const right = arr.slice(splitAtIndex);

	merge(split(left), split(right), merged);
}

function merge(left: number[], right: number[], merged: number[]) {
	let lp = 0; // left pointer
	let rp = 0; // right pointer

	while (lp < left.length && rp < right.length) {
		//if value of left is smaller than the value of right, or
		//right pointer is at the end of right
		if (left[lp] <= right[rp] || rp === right.length - 1) {
			merged.push(left[lp]);
			lp++;
		}

		//if the value of right is smaller than the value of left, or
		//left pointer is at the end of left
		else if (right[rp] <= left[lp] || lp === left.length - 1) {
			merged.push(right[rp]);
			rp++;
		}
	}

	merge();
}

function initArray(length: number): number[] {
	const arr = Array(length);
	for (let i = 0; i < length; i++) {
		arr[i] = Math.ceil(Math.random() * 100);
	}
	console.log(arr);
	return arr;
}

/*

1 9 6 2 3 4 8 7 
1 9 6 2 3 4 8 7 

1 9  6 2  3 4  8 7

1 9
6 2
3 4
8 7

1 9
2 6
3 4
7 8














*/
