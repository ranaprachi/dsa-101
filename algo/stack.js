// STACK DS :
// stack node : value, next
// stack property : size, first node, last node
// stack methods : push, pop
// insert : O(1), delete : O(1), search : O(n), access : O(n)

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push (value) {
        if (!this.first) {
            let temp = new Node(value);
            this.first = temp;
            this.last = temp;
        } else {
            let temp = this.first;
            this.first = new Node(value);
            this.first.next = temp;
        }
        this.size++;
        return this.size;
    }
    pop () {
        if (!this.size) {
            return;
        }
        let val = null;
        if (this.first && this.first === this.last) {
            val = this.first.value;
            this.first = null;
            this.last = null;
        } else {
            let temp = this.first;
            this.first = temp.next;
            val = temp.value;
        }
        this.size--;
        return val;
    }
}

let stack = new Stack();
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack.push(4));
console.log(stack.push(10));

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.first);
console.log(stack.last);
console.log(stack.size);

// using array

class Stack {
    constructor() {
        this.items = [];
    }

    push(val) {
        this.items.push();
    }

    pop() {
        if (this.isEmpty()) {
            console.log('underflow');
            return;
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            console.log('empty stack');
            return;
        }
        return this.items[this.items.length-1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    getSize() {
        return this.items.length;
    }

    print() {
        console.log(this.items.toString());
    }
}