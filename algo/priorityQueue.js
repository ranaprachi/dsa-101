class PriorityQueue {
    constructor() {
        this.heap = [];
    }
    parentNodeIndex (index) {
        return Math.floor((index - 1)/2);
    }
    leftNodeIndex (index) {
        return 2 * index + 1;
    }
    rightNodeIndex (index) {
        return 2 * index + 2;
    }
    bubbleUp (index) {
        let parentIndex = this.parentNodeIndex(index);
        while (index > 0 && this.heap[parentIndex] > this.heap[index]) {
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
            parentIndex = this.parentNodeIndex(index);
        }
    }
    enqueue (val) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }
    bubbleDown(index) {
        let ifTrue = true;
        let currIndex = index;
        while(ifTrue) {
            let leftChild = this.leftNodeIndex(currIndex);
            let rightChild = this.rightNodeIndex(currIndex);
            let min = currIndex;

            if (leftChild < this.heap.length && this.heap[leftChild] < this.heap[min]) {
                min = leftChild;
            }
            if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[min]) {
                min = rightChild;
            }
            if (min === currIndex) {
                ifTrue = false;
            } else {
                [this.heap[min], this.heap[currIndex]] = [this.heap[currIndex], this.heap[min]];
                currIndex = min;
            }
        }
    }
    dequeue () {
        if (!this.heap.length) {
            console.log('enpty queue');
        }
        if (this.heap.length === 1) {
            return this.heap.shift();
        } 
        
        const val = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);

        return val;
    }
    peek () {
        if (!this.heap.length) {
            console.log('empty queue');
        }
        return this.heap[0];
    }
    print() {
        console.log('priority queue --->>', this.heap.toString());
    }
}


const pQ = new PriorityQueue();

pQ.enqueue(70);
pQ.enqueue(20);
pQ.print();
pQ.dequeue();
pQ.enqueue(10);
pQ.enqueue(40);
pQ.enqueue(50);
pQ.enqueue(30);
pQ.print();