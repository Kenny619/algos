class LinkedList {
	constructor(data) {
		this.node = { head: { data: data, next: null } };
		this.size = 1;
	}

	//push
	push(data) {
		if (this.size === 0) {
			this.node.head = { data: data, next: null };
			this.size++;
			return;
		}

		let current = this.node.head;
		while (current.next) current = current.next;
		current.next = { data: data, next: null };
		this.size++;
	}

	//pop
	pop() {
		if (this.size === 0) {
			console.log("No item in the list.");
			return;
		}
		if (this.size === 1) {
			const last = this.node.head.data;
			this.node.head = null;
			this.size--;
			return last;
		}

		let current = this.node.head;
		while (current.next.next) current = current.next;

		const last = current.next.data;
		current.next = null;
		this.size--;
		return last;
	}

	//shift
	shift() {
		if (this.size === 0) {
			console.log("No item in the list.");
			return;
		}
		if (this.size === 1) {
			const head = this.node.head.data;
			this.node.head = null;
			this.size--;
			return head.data;
		}
		const head = this.node.head;
		this.node.head = this.node.head.next;
		this.size--;
		return head.data;
	}

	//unshift
	unshift(data) {
		const next = this.node.head;
		this.node.head = { data: data, next: next };
		this.size++;
	}

	//insertAtIndex
	insertAtIndex(data, index) {
		if (index > this.size || index < 0) {
			console.log("index out of range.");
			return;
		}
		if (index === 0 || index === this.size) {
			this.unshift(data);
			return;
		}

		let current = this.node.head;
		let position = index;
		while (position !== 1) {
			current = current.next;
			position--;
		}
		const next = { ...current.next };
		current.next = { data: data, next: next };
		this.size++;
	}

	//print data in the nodes
	printData() {
		let current = this.node.head.next;
		while (current) {
			console.log(current.data);
			current = current.next;
		}
	}

	//print the number of data in the node
	printSize() {
		console.log(this.size);
	}

	//print the current state of the node
	printNode() {
		console.dir(this.node, { depth: null });
		console.log(`current size = ${this.size}`);
	}
	//clear
	clear() {
		this.node.head = null;
		this.size = 0;
	}
}

export default LinkedList;
