const maxHeap = (arr) => {
    const maxHeapArr = [...arr]
    const createMaxHeap = (maxHeapArr, index) => {
        for (let i = index; i >= 0; i--) {
            let leftChild = 2 * i + 1;
            let rightChild = 2 * i + 2;
            let max = i;
            if (leftChild < maxHeapArr.length && maxHeapArr[max] < maxHeapArr[leftChild]) {
                max = leftChild;
            }
            if (rightChild < maxHeapArr.length && maxHeapArr[max] < maxHeapArr[rightChild]) {
                max = rightChild;
            }
            if (i !== max) {
                minHeapArr = swap(minHeapArr, i, max);
                createMaxHeap(maxHeapArr, max);
            }
        }
    }
    createMaxHeap(maxHeapArr, Math.floor(maxHeapArr.length/2) - 1);
    return maxHeapArr;
}

const minHeap = (arr) => {
    const minHeapArr = [...arr]
    const createMinHeap = (minHeapArr, index) => {
        for (let i = index; i >= 0; i--) {
            let leftChild = 2 * i + 1;
            let rightChild = 2 * i + 2;
            let min = i;
            if (leftChild < minHeapArr.length && minHeapArr[min] > minHeapArr[leftChild]) {
                min = leftChild;
            }
            if (rightChild < minHeapArr.length && minHeapArr[min] > minHeapArr[rightChild]) {
                min = rightChild;
            }
            if (i !== min) {
                minHeapArr = swap(minHeapArr, i, min);
                createMinHeap(minHeapArr, min);
            }
        }
    }
    createMinHeap(minHeapArr, Math.floor(minHeapArr.length/2) - 1);
    return minHeapArr;
}

console.log(minHeap([12,6,10,5,1,9]))
console.log(maxHeap([12,6,10,5,1,9]))