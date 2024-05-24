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

type node = {
	val: number | null;
	left: node | null;
	right: node | null;
};
class BTree {
	// val: number;
	// left: node | null;
	// right: node | null;
	// BFSresult: [];

	tree: node;

	constructor() {
		// this.val = val;
		// this.left = null;
		// this.right = null;
		// this.BFSresult = [];
		this.tree = { val: null, left: null, right: null };
	}

	generateTree(maxHeight: number) {
		if (maxHeight < 1) return this.tree;

		const existingVal: number[] = [];
		while (existingVal.length < 2 ** maxHeight - 1) {
			const val = Math.ceil(Math.random() * 10 * (1 + (2 ** maxHeight % 10)));
			if (!existingVal.includes(val)) existingVal.push(val);
		}

		this.tree.val = existingVal.pop() as number;
		if (maxHeight === 1) return this.tree;

		return makeTree(this.tree, maxHeight - 1);

		function makeTree(tree: node, maxHeight: number): node {
			if (maxHeight === 0) return tree;

			tree.left = { val: existingVal.pop() as number, left: null, right: null };
			makeTree(tree.left, maxHeight - 1);

			if (randomBool()) {
				tree.right = {
					val: existingVal.pop() as number,
					left: null,
					right: null,
				};
				makeTree(tree.right, maxHeight - 1);
			}
			return tree;
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

/*Phind suggestion
type Node = {
    val: number | null;
    left: Node | null;
    right: Node | null;
};

class BinaryTree {
    private tree: Node;

    constructor() {
        this.tree = { val: null, left: null, right: null };
    }

    generateTree(maxHeight: number): Node {
        if (maxHeight < 1) return this.tree;

        const uniqueValues = new Set<number>();
        while (uniqueValues.size < 2 ** maxHeight - 1) {
            const val = Math.floor(Math.random() * 100); // Simplified random value generation
            uniqueValues.add(val);
        }

        this.tree.val = Array.from(uniqueValues).pop();
        if (maxHeight === 1) return this.tree;

        return buildTree(this.tree, maxHeight - 1);

        function buildTree(node: Node, maxHeight: number): Node {
            if (maxHeight === 0) return node;

            node.left = { val: Array.from(uniqueValues).shift(), left: null, right: null };
            buildTree(node.left, maxHeight - 1);

            if (Math.random() > 0.5) { // Simplified conditional for demonstration
                node.right = { val: Array.from(uniqueValues).shift(), left: null, right: null };
                buildTree(node.right, maxHeight - 1);
            }
            return node;
        }
    }
}
This revision includes the use of a Set for efficient uniqueness checks, simplifies the random value generation, and extracts the tree-building logic into a separate function for better readability.

Shareable 
SUGGESTIONS
*/

function randomBool(): boolean {
	return Math.ceil(Math.random() * 10) % 2 === 0;
}

const bTree = new BTree();
bTree.generateTree(4);
bTree.print();

// const bTree = new Node(10);
// bTree.left = new Node(4);
// bTree.right = new Node(6);
// bTree.left.left = new Node(1);
// bTree.left.right = new Node(2);
// bTree.right.left = new Node(3);
// bTree.right.right = new Node(5);
// bTree.left.left.left = new Node(9);

//function flattenBTree(tree: any[]): any[] {}
