/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
class MyPriorityQueue {
    constructor(arr = []) {
        this.heap = this.buildMaxHeap(arr, Math.floor(arr.length/2) - 1);
    }
    buildMaxHeap(arr) {
        let lastInternalNode = Math.floor(arr.length/2) - 1;
        let maxHeap = [...arr];
        for (let i = lastInternalNode; i >= 0; i--) {
            maxHeap = this.heapify(maxHeap, i);
        }
        return maxHeap;
    }
    heapify(arr, i) {
        let heapArr = [...arr];
        let left = 2 * i + 1;
        let right = left + 1;
        let max = i;

        if (left < heapArr.length && heapArr[left] > heapArr[max]) {
            max = left;
        }

        if (right < heapArr.length && heapArr[right] > heapArr[max]) {
            max = right;
        }

        if (max !== i) {
            [heapArr[max], heapArr[i]] = [heapArr[i], heapArr[max]];
            heapArr = this.heapify(heapArr, max);
        }
        return heapArr;
    }
    dequeue() {
        console.log('data ::', this.heap);
        if (!this.heap.length) {
            return null;
        }
        if (this.heap.length === 0) {
            return this.heap.pop();
        }
        let val = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heap = this.heapify(this.heap, 0);
        console.log('result ::', val);
        return val;
    }
    enqueue() {

    }
}
var findKthLargest = function(nums, k) {
    const arr = [...nums];

    let result = null;
    const priorityQueue = new MyPriorityQueue(arr);
    for (let i = 0; i < k; i++) {
        if (i === k - 1) {
            result = priorityQueue.dequeue();
            break;
        } else {
            priorityQueue.dequeue();
        }
    }
    return result;
};

console.log('---->>>>', findKthLargest([3,2,1,5,6,4], 2))