// time = O(n^2), space - O(1)
const bubbleSort = (arr) => {
    let swaped = false;
    do {
        swaped = false;
        for(let i = 0; i < arr.length - 1; i++) {
            let j = i + 1;
            if (arr[j] < arr[i]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                swaped = true;
            }
        }
    } while (swaped);
    return arr;
}
// console.log(bubbleSort([10, 5, 2, 20, 7, 8]));

// time = O(n^2), space - O(1)
const selectionSort = (arr) => {
    let length = arr.length;
    let min = null, minIndex;
    for (let i = 0; i < length - 1; i++) {
        minIndex = i;
        min = arr[i];
        for (let j = i + 1; j < length; j++) {
            if (arr[j] < min) {
                min = arr[j];
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}
// console.log('selectionSort ::', selectionSort([10, 5, 2, 20, 7, 8]));

// time = O(n log(n)), space - O(n)
const merge = (leftArr, rigthArr) => {
    let leftIndex = 0;
    let rightIndex = 0;
    let sortedArr = [];

    while (leftIndex < leftArr.length && rightIndex < rigthArr.length) {
        if (leftArr[leftIndex] < rigthArr[rightIndex]) {
            sortedArr.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            sortedArr.push(rigthArr[rightIndex]);
            rightIndex++;
        }
    }
    return sortedArr.concat(leftArr.slice(leftIndex), rigthArr.slice(rightIndex));
}
const mergeSort = (arr) => {
    if (!arr) return null;
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const leftArr = mergeSort(arr.slice(0, mid));
    const rigthArr = mergeSort(arr.slice(mid));
    return merge(leftArr, rigthArr);
}
// console.log('merge sort ::::', mergeSort([10, 5, 2, 20, 7, 8]));

// time - O(n log(n)), space - O(1)
// const heapify = (arr, i) => {
//     let leftChild = 2 * i + 1;
//     let rightChild = 2 * i + 2;
//     let min = i;
//     if (leftChild < arr.length - 1 && arr[leftChild] < arr[min]) {
//         min = leftChild;
//     }
//     if (rightChild < arr.length - 1 && arr[rightChild] < arr[min]) {
//         min = rightChild;
//     }
//     if (i !== min) {
//         [arr[i], arr[min]] = [arr[min], arr[i]];
//         heapify(arr, min);
//     }
// }
// const heapSort = (arr) => {
//     let lastInternalNode = Math.floor(arr.length/2 - 1);
//     for (let i = lastInternalNode; i >= 0; i--) {
//         heapify(arr, i);
//     }
//     let sortedArr = [];
//     while (arr.length) {
//         let minElement = arr[0];
//         arr[0] = arr[arr.length - 1];
//         arr.pop();
//         sortedArr.push(minElement);
//         if(arr.length) heapify(arr, 0);
//     }
//     return sortedArr;
// }
// console.log('heap sort :::', heapSort([10, 5, 2, 20, 7, 8]));

// Function to build a max heap
function buildMaxHeap(arr) {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
}

// Function to heapify a subtree rooted at index i
function heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    // Check if left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // Check if right child is larger than largest so far
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // If largest is not root, swap and continue heapifying
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}
// Function to perform heapsort
function heapSort(arr) {
    // Build max heap
    buildMaxHeap(arr);

    // Extract elements from the heap one by one
    for (let i = arr.length - 1; i > 0; i--) {
        // Move the current root to the end of the array
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Call heapify on the reduced heap
        heapify(arr, i, 0);
    }

    return arr;
}
// Example usage:
const arr = [12, 11, 13, 5, 6, 7];
console.log("Original array:", arr);
console.log("Sorted array:", heapSort(arr));