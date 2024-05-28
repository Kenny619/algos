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
		while (uniqueValues.size < 2 ** maxHeight) {
			//generate random numbers between 0 to 10**exp
			const val = Math.ceil(Math.random() * randomDigit);
			//only unique numbers will be added to the set
			if (!uniqueValues.has(val)) uniqueValues.add(val);
		}

		const vals = Array.from(uniqueValues);
		console.log(uniqueValues);
		console.log(vals);

		//initialize tree
		this.tree.val = vals.pop() as number;
		if (maxHeight === 1) return this.tree;

		return buildTree(this.tree, maxHeight - 1);

		function buildTree(node: Node, maxHeight: number): Node {
			if (maxHeight === 0) return node;

			node.left = { val: vals.pop() as number, left: null, right: null };
			buildTree(node.left, maxHeight - 1);

			//generate node.right 50% of the time
			if (Math.random() > 0.5) {
				node.right = { val: vals.pop() as number, left: null, right: null };
				buildTree(node.right, maxHeight - 1);
			}
			return node;
		}
	}

	getTreeHeight() {}

	DFS() {
		const vals: number[] = [];
		dfTraversal(this.tree);

		function dfTraversal(tree: Node) {
			if (tree.left) dfTraversal(tree.left);
			if (tree.right) dfTraversal(tree.right);

			vals.push(tree.val as number);
		}
		console.log(vals);
	}

	BFS() {
		const vals: number[] = [];
		const queue: Node[] = [];
		if (this.tree.val === null) {
			console.log([]);
			return;
		}
		queue.push(this.tree);
		while (queue.length) {
			const node = queue.shift() as Node;
			if (node.val) vals.push(node.val);

			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		console.log(vals);
	}

	print() {
		console.dir(this.tree, { depth: null });
	}
}

const bTree = new BTree();
bTree.generateTree(4);
bTree.print();
bTree.DFS();
bTree.BFS();
