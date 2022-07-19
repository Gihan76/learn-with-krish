// node class
class Node {
	constructor(value, next, prev) {
		this.value = value;
		this.next = next;
		this.prev = prev;
	}
}
// linkedlist class
class LinkedList {
	constructor() {
		this.tail = null;
		this.head = null;
	}

	add(val) {
		const node = new Node(val, null, this.tail);

		if (this.tail) {

			this.tail.next = node;
		} else {
			this.head = node;
		}
		this.tail = node;
	}

	printList(head) {
		let cur = head;
		while (cur) {
			console.log(cur.value);
			cur = cur.next;
		}
	}

	reverse(node) {

		if (node === null || node.next === null) {
			return node;
		}

		let rest = this.reverse(node.next);
		node.next.next = node;

		node.next = null;

		return rest;
	}
}

// adding elements to the Linkedlist
let linkedlist = new LinkedList();

linkedlist.add('1');
linkedlist.add('2');
linkedlist.add('3');
linkedlist.add('4');
linkedlist.add('5');
linkedlist.add('6');
linkedlist.add('7');
linkedlist.add('8');
linkedlist.add('9');
linkedlist.add('10');

// printing reversed values
console.log(linkedlist.printList(linkedlist.reverse(linkedlist.head)));
