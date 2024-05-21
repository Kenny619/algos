const arr = [2, 5, 6, 7, 8];
const left = arr.slice(0, Math.ceil(arr.length / 2));
const right = arr.slice(Math.ceil(arr.length / 2));

console.log(left, right);
