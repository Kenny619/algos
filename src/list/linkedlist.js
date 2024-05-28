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
		if (this.size === 0) {
			this.head = { data: data, next: null };
			this.head = { data: data, next: null };
			return;
		}
		const next = this.node.head;
		this.node.head = { data: data, next: next };
		this.size++;
	}

	//push to index
	pushToIndex(data, index) {
		if (index > this.size + 1 || index < 0) {
			console.log(`ERROR: index out of range.  index needs to be between 1 and ${this.size + 1}`);
			return;
		}

		if (index === this.size) {
			this.push(data);
			return;
		}

		let current = this.node.head;
		for (let i = 1; i < index; i++) current = current.next;
		const next = { ...current };
		current.data = data;
		current.next = next;

		this.size++;
	}

	popAtIndex(index) {
		if (index > this.size || index < 0) {
			console.log(`ERROR: index out of range.  index needs to be between 1 and ${this.size}`);
			return;
		}

		if (index === 1) {
			this.shift();
			return;
		}
		if (index === this.size) {
			this.pop();
			return;
		}

		let current = this.node.head;
		for (let i = 1; i < index - 1; i++) current = current.next;
		const pop = current.next.data;
		current.next = current.next.next;
		this.size--;
		return pop;
	}

	//replace data at index
	replaceAtIndex(data, index) {
		if (index > this.size || index < 0) {
			console.log(`ERROR: index out of range.  index needs to be between 1 and ${this.size}`);
			return;
		}

		let current = this.node.head;
		for (let i = 1; i < index; i++) current = current.next;
		current.data = data;
	}

	//Change all the values contained in the list
	replaceAll(before, after) {}

	//insert another list at index
	insert(list, index) {}

	//get all the values in the list
	getValues() {}

	sortAsc() {}

	sortDesc() {}

	//print data in the nodes
	printData() {
		let current = this.node.head;
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

//export default LinkedList;

const ll = new LinkedList(10);
ll.push(20);
ll.push(30);
ll.push(35);
ll.unshift(5);
ll.pop();
ll.shift();
ll.pushToIndex(15, 2);
ll.pushToIndex(5, 1);
ll.pushToIndex(40, 5);
ll.popAtIndex(3);
ll.popAtIndex(1);
ll.replace(1, 1);
ll.replace(4, 4);
ll.replace(2, 2);
ll.replace(3, 3);
ll.printNode();
ll.printData();
