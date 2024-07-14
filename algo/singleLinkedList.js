// Linked list
// Single linked list 
// node props : value, next
// single linked list props : size, head, tail
// single linked list methods : push(val), pop, shift, unshift, get, set, insert, remove, reverse 
// insert: O(1), delete: O(n), search: O(n), access: O(n)

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
             this.head = newNode;
             this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length = this.length+1;
        return this;
    }
    pop() {
        let node = null;
        if (!this.length) {
            return null;
        } 
        
        if (this.length === 1) {
            node = this.head;
            this.head = null;
            this.tail = this.head;
        } else {
            let currNode = this.head, prevNode = null;
            while (currNode.next) {
                prevNode = currNode;
                currNode = currNode.next;
            }
            node = this.tail;
            this.tail = prevNode;
            this.tail.next = null;
        }
        this.length = this.length-1;
        return node.value;
    }

    shift() {
        if (this.head) {
            const node = this.head;
            if (this.head === this.tail) {
                this.head = null;
                this.tail = this.head;
            } else {
                this.head = this.head.next;
            }
            this.length = this.length - 1;
            return node.value;
        }
        return null;
    }

    unshift(val) {
        if (this.head) {
            const node = new Node(val);
            node.next = this.head;
            this.head = node;
            this.length = this.length+1;
            return this;
        }
        return null;
    }

    get(index) {
        if (index > this.length) {
            return null;
        } 
        if (index === this.length) {
            return this.tail;
        }
        let count = 1;
        let currNode = this.head, prevNode = null;

        while (index >= count) {
            prevNode = currNode;
            currNode = currNode.next;
            ++count;
        }

        return prevNode;
    }

    set(index, val) {
        const node = this.get(index);
        if (node) {
            node.value = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        const node = this.get(index - 1);
        if (node) {
            const newNode = new Node(val);
            const prevNode = node.next;
            node.next = newNode;
            newNode.next = prevNode;
            ++this.length;
            return true;
        }
        return false;
    }

    remove(index) {
        if (index === 1) {
            return this.shift();
        }
        if (index === this.length) {
            return this.pop();
        }
        const node = this.get(index-1);
        if (node) {
            const reqNode = node.next;
            node.next = reqNode ? reqNode.next : null;
            --this.length;
            return reqNode;
        }
        return null;
    }

    reverse() {
        // if (!this.head) {
        //     return false;
        // }
        // let count = 1, nPrev = null, nCurr = null, currNode = this.head, newHead = null, newTail = null;
        // while (count <= this.length) {
        //     nCurr = {...currNode};
        //     if (!nPrev) {
        //         nCurr.next = null;
        //         newTail = nCurr;
        //     } else {
        //         nCurr.next = nPrev;
        //     }
        //     nCurr.next = nPrev ? nPrev : null;
        //     nPrev = nCurr;
        //     currNode = currNode.next;
        //     ++count;
        // }
        // newHead = nCurr;
        // this.head = newHead;
        // this.tail = newTail;

        // return this;

        let next, prev, node = this.head;
        for(let i = 1; i<=this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        let tmp = this.head;
        this.head = this.tail;
        this.tail = tmp;
        return this;
    }

    print() {
        let subStr = '';
        let count = 1, currNode = this.head, prevNode = null;
        while (this.length >= count) {
            prevNode = currNode;
            currNode = currNode.next;
            ++count;
            subStr = subStr + `${prevNode.value} ${currNode ? ' -> ' : ''}`;
        }
        console.log('Current linked list value :::', subStr);
    }
}

const sLL = new SingleLinkedList();
console.log(sLL.push(1));
console.log(sLL.print());
console.log(sLL.push(2));
console.log(sLL.print());
console.log(sLL.push(3));
console.log(sLL.print());
console.log(sLL.push(4));
console.log(sLL.print());
console.log('reverse :', sLL.reverse());
console.log(sLL.print());
