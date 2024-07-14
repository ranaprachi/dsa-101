// Queue :
// single queue 
// node properties : value, next 
// queue properties : first, last, size
// queue methods : enqueue, dequeue
// insert : O(1), delete : O(1), search : O(n), access : O(n)

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyQueue {
    constructor() {
        this.first = node;
        this.last = node;
        this.size = 0;
    }

    enqueue(value) {
        const node = new Node(value);
        if(!this.first) {
            this.first = node;
            this.last = node;
            
        } else {
            this.last.next = node;
            this.last = node;
        }
        ++this.size;
        console.log('enqueue ::', value);
        this.print();
        return this.size;
    }

    dequeue() {
        if (!this.last) {
            return null;
        } else {
            const node = this.first;
            if (this.first === this.last) {
                this.first = null;
                this.last = null;
            } else {
                this.first = this.first.next;
            }
            --this.size;
            console.log('dequeue ::', node);
            this.print();
            return node.value;
        }
    }

    print() {
        let nextNode = this.first;
        while (nextNode) {
            console.log('-',nextNode.value,'-');
            nextNode = nextNode.next;
        }
    }
}

const qu = new SinglyQueue();

qu.enqueue(10);
qu.enqueue(8);
qu.enqueue(6);
qu.enqueue(4);
qu.enqueue(2);
qu.enqueue(0);
qu.dequeue();
qu.dequeue();
qu.dequeue();