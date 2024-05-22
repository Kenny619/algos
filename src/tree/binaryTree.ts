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

type node<T> = {
	val: T;
	left: node<T>;
	right: node<T>;
};
class Node<T> {
	val: T;
	left: Node<T> | null;
	right: Node<T> | null;
	BFSresult: Array<T>;

	constructor(val: T) {
		this.val = val;
		this.left = null;
		this.right = null;
		this.BFSresult = [];
	}

	BFS() {
		if (this.val === null) {
			this.BFSresult = [];
		}

		const queue: node<T>[] = [];
		if (Object.hasOwn(node, "val")) queue.push(node);
		while (queue.length > 0) {
			const curNode = queue.shift() as node<T>;
			if (Object.hasOwn(curNode, "val")) BFSresult.push(curNode.val as T);
			if (Object.hasOwn(curNode, "left") && curNode.left !== null) queue.push(curNode.left);
			if (Object.hasOwn(curNode, "right") && curNode.right !== null) queue.push(curNode.right);
		}
	}
}

print();
{
	console.log(this);
}
}

const bTree = new Node(10);
bTree.left = new Node(4);
bTree.right = new Node(6);
bTree.left.left = new Node(1);
bTree.left.right = new Node(2);
bTree.right.left = new Node(3);
bTree.right.right = new Node(5);
bTree.left.left.left = new Node(9);

//function flattenBTree(tree: any[]): any[] {}
