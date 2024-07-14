const swap = (arr, i, j) => {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    return arr;
}
 
 
const heapify = (arr, i) => {
    let minHeapArr = [...arr];
    let leftChild = 2 * i + 1;
    let rightChild = 2 * i + 2;
    let smallest = i;


    if (minHeapArr[leftChild] && minHeapArr[leftChild] < minHeapArr[smallest]) {
        smallest = leftChild;
    }


    if (minHeapArr[rightChild] && minHeapArr[rightChild] < minHeapArr[smallest]) {
        smallest = rightChild;
    }


    if (i !== smallest) {
        minHeapArr = swap(minHeapArr, i, smallest);
        minHeapArr = heapify(minHeapArr, smallest);
    }
    return minHeapArr;
}
 
const buildMinHeap = (arr) => {
    let minHeap = [...arr];
    let lastInternalNode = Math.floor((minHeap.length/2)) - 1;
    for (let i = lastInternalNode; i >= 0; i--) {
        minHeap = heapify(minHeap, i);
    }
    return minHeap;
}
 
const heapSort = (arr) => {

    let minHeap = buildMinHeap(arr);
    const sortedArr = [];
    while (minHeap.length) {
        let lastIndex = minHeap.length - 1;
        minHeap = swap(minHeap, 0, lastIndex);
        sortedArr.push(minHeap.pop());
        minHeap = heapify(minHeap, 0);
    }
    return sortedArr;
}
 
const sortedArr = heapSort([12,6,10,5,1,9]);
console.log(sortedArr)


