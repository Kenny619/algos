/*
root node goes to arr[0].
When current node is at index i then
left node goes into 2i+1
right node goes into 2i+2
e.g. 
rootnode at arr[0]
left node to the root node is at arr[1]
right node to the root node is at arr[2]

parent node of current node j can de found by 
floor((j-1)/2);
*/

type Node = {
	val: number | null;
	left: Node | null;
	right: Node | null;
};
class BTree {
	// BFSresult: [];

	tree: Node;

	constructor() {
		// this.BFSresult = [];
		this.tree = { val: null, left: null, right: null };
	}

	generateTree(maxHeight: number) {
		if (maxHeight < 1) return this.tree;

		// create a set of random numbers to be used as node values
		const uniqueValues = new Set<number>();
		//random number range would be 0 to 10**exp.
		//if max number of leaves are in 2 digits, range would be 0 to 100
		const randomDigit = 10 ** String(2 ** maxHeight - 1).length;

		//continue until the size reaches max number of leaves = 2** (maxheight -1)
		while (uniqueValues.size < 2 ** (maxHeight - 1)) {
			//generate random numbers between 0 to 10**exp
			const val = Math.floor(Math.random() * randomDigit);
			//only unique numbers will be added to the set
			uniqueValues.add(val);
			//			console.log(uniqueValues);
		}

		//initialize tree
		this.tree.val = Array.from(uniqueValues).pop() as number;
		if (maxHeight === 1) return this.tree;

		return buildTree(this.tree, maxHeight - 1);

		function buildTree(node: Node, maxHeight: number): Node {
			if (maxHeight === 0) return node;

			node.left = { val: Array.from(uniqueValues).pop() as number, left: null, right: null };
			buildTree(node.left, maxHeight - 1);

			//generate node.right 50% of the time
			if (Math.random() > 0.5) {
				node.right = { val: Array.from(uniqueValues).pop() as number, left: null, right: null };
				buildTree(node.right, maxHeight - 1);
			}
			return node;
		}
	}

	// BFS() {
	// 	if (this.val === null) {
	// 		this.BFSresult = [];
	// 	}

	// 	const queue: node<T>[] = [];
	// 	if (Object.hasOwn(node, "val")) queue.push(node);
	// 	while (queue.length > 0) {
	// 		const curNode = queue.shift() as node<T>;
	// 		if (Object.hasOwn(curNode, "val")) BFSresult.push(curNode.val as T);
	// 		if (Object.hasOwn(curNode, "left") && curNode.left !== null) queue.push(curNode.left);
	// 		if (Object.hasOwn(curNode, "right") && curNode.right !== null) queue.push(curNode.right);
	// 	}
	// }

	print() {
		console.dir(this.tree, { depth: null });
	}
}

const bTree = new BTree();
bTree.generateTree(4);
bTree.print();
