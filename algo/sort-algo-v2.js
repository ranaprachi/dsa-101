// time : O(n log(n)), space : O(1)
const heapSort = (arr) => {
    const heapify = (arr, index, heapSize = arr.length) => {
        let max = index;
        const leftChildIndex = 2 * index;
        const rightChildIndex = leftChildIndex + 1;
        
        if (heapSize > leftChildIndex && arr[max] < arr[leftChildIndex]) {
            max = leftChildIndex;
        }
        if (heapSize > rightChildIndex && arr[max] < arr[rightChildIndex]) {
            max = rightChildIndex;
        }
        if (max !== index) {
            [arr[max], arr[index]] = [arr[index], arr[max]];
            heapify(arr, max, heapSize);
        }
        return arr;
    }
    const lastInternalNode = Math.floor(arr.length/2 - 1);
    for(let i = lastInternalNode; i >= 0; i--) {
        arr = heapify(arr, i, arr.length);
    }
    // const result = [];
    // while (arr.length) {
    //     const min = arr[0];
    //     result.push(min);
    //     arr[0] = arr[arr.length - 1];
    //     arr.pop();
    //     arr = heapify(arr, 0);
    // }
    // return result;
    for (let i = arr.length - 1; i > 0; i--) {
        [arr[i], arr[0]] = [arr[0], arr[i]];
        heapify(arr, 0, i);
    }
    return arr;
}
// console.log('heapSort :::', heapSort([10,5,2,-12,-10,-15,0, 8, 4]));

//time : O(n log(n)), space : O(n)
const mergeSort = (arr) => {
    const divide = (arr) => {
        if (arr.length === 1) return arr;
        const mid = Math.floor(arr.length/2);
        const leftArr = divide(arr.slice(0, mid));
        const rightArr = divide(arr.slice(mid));
        return merge(leftArr, rightArr);
    }
    const merge = (arrA, arrB) => {
        let i = 0;
        let j = 0;
        let result = [];
        while (i < arrA.length && j < arrB.length) {
            if (arrA[i] < arrB[j]) {
                result.push(arrA[i]);
                i++;
            } else {
                result.push(arrB[j]);
                j++;
            }
        }
        return result.concat(arrA.slice(i)).concat(arrB.slice(j));
    }
    return divide(arr);
}
// console.log('----- merge sort ::::', mergeSort([10,5,2,-12,-10,-15,0, 8, 4]));

// time: O(n^2), space: O(1)
const selectionSort = (arr) => {
    for(let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !== i) {
            [arr[min], arr[i]] = [arr[i], arr[min]];
        }
    }
    return arr;
}
// console.log('----- selection sort ::::', selectionSort([10,5,2,-12,-10,-15,0, 8, 4]));

// time : O(n^2), space: O(1)
const bubbleSort = (arr) => {
    let swapped = false;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}
console.log('Bubble sort ::::', bubbleSort([10,5,2,-12,-10,-15,0, 8, 4]));