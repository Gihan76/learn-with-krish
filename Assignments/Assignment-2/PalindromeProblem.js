// Node class
class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

// LinkedList class
class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.len = 0;
	}
	add(val) {
		let newNode = new Node(val);

		if (!this.head) {
		
      this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.len++;
		return this;
	}
}

// creating object of LinkedList class.
let linkedlist = new LinkedList();

// adding each element of RACECAR string to the linkedlist.
linkedlist.add('R');
linkedlist.add('A');
linkedlist.add('C');
linkedlist.add('E');
linkedlist.add('C');
linkedlist.add('A');
linkedlist.add('R');

// checking if the added element is plaindrome or not.
function isPalindrome(linkedlist) {

	let cur = linkedlist.head;
	let map = new Map();
	let count = -1;

	while (cur) {
		count++;
		if (map.has(cur.val)) {
			map.set(cur.val, map.get(cur.val) + count);
		} else {
			map.set(cur.val, count);
		}
		cur = cur.next;
	};

	if (map.size === 1) { 
      return true;
  }
	if (linkedlist.len === 2 && map.size === 2) { 
      return false;
  }
	if (linkedlist.len === 3 && map.size === 3) {
      return false;
  }

	let iterator = map.values();
	let value = iterator.next().value;

	while (value >= 0) {
		if (!((count / (value % count) === 2 || value / count === 0.5) || value % count === 0)) {
        return false;
  }
		value = iterator.next().value;
	}
	return true;
}

// Calling the function
if (isPalindrome(linkedlist) === true) {
	console.log('Palindrome');
} else
	console.log('Not Palindrome');