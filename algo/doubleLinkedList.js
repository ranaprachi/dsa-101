// Double linked list
// Node : prev, next, value
// Double LL properties : head, tail, length
// Double LL methods : push, pop, shift, unshift, get, set, insert
// insert: O(1), delete: O(1), search: O(n), access: O(n)

class Node {
    constructor(value ){
        this.prev = null;
        this.next = null;
        this.value = value;
    }
}

class doubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push (val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        ++this.length;
        return this;
    }

    pop() {
        let popVal = null;
        if(!this.length) {
            return null;
        } else {
            popVal = this.tail.value;
            this.tail = this.tail.prev;
            if (this.tail) {
                this.tail.next = null;
            } else {
                this.head = null;
            }
        }
        --this.length;
        return popVal;
    }

    shift() {
        if (!this.head) {
            return null;
        } else {
            let popVal = this.head.value;
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = null;
            }
            --this.length;
            return popVal;
        }
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        ++this.length;
        return this;
    }

    get(index) {
        if (index > this.length || index < 1) {
            return null;
        }
        let currNode = null, count;
        if (index < this.length/2) {
            count = 1;
            currNode = this.head;
            while (count !== index) {
                currNode = currNode.next;
                ++count;
            }
        } else {
            count = this.length;
            currNode = this.tail;
            while (count !== index) {
                currNode = currNode.prev;
                --count;
            }
        }
        
        return currNode;
    }

    set (index, val) {
        let node = this.get(index);
        if (node) {
            node.value = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        let node = this.get(index);
        if (node) {
            const newNode = new Node(val);
            const prevNode = node.prev;
            prevNode.next = newNode;
            newNode.prev = prevNode;
            newNode.next = node;
            node.prev = newNode;
            ++this.length;
            return this;
        }
        return null;
    }

    print() {
        let llStr = '', currNode = this.head;
        for (let i=1;i<=this.length;i++) {
            if (currNode) {
                llStr = llStr + `<-${currNode.value}-> `;
                currNode = currNode.next;
            }
        }
        console.log('D LL :', llStr);
    }
}

const ll = new doubleLinkedList();
ll.push(10);
ll.push(9);
ll.push(1);
ll.push(2);
ll.print();
ll.pop();
ll.print();
ll.shift();
ll.print();
ll.unshift(999);
ll.print();
console.log('get 2', ll.get(2));
ll.print();
console.log('set 2', ll.set(2, 888));
ll.print();
ll.insert(2, 0);
ll.print();