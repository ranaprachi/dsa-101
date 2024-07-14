const linearSearch = (arr, item) => {
    return arr.find((a) => a === item);
}

const binarySearch = (arr, ele, left = 0, right = arr.length - 1) => {
    if (left > right) {
        console.log('returning null')
        return null;
    }
    const mid = Math.floor((right + left) / 2);
    
    if (arr[mid] === ele) {
        return mid;
    }
    if (arr[mid] < ele) {
        return binarySearch(arr, ele, mid + 1, right);
    }
    if (arr[mid] > ele) {
        return binarySearch(arr, ele, left, mid - 1);
    }
}

console.log('binary search ', binarySearch([10,23,34,43,54,68,76,89,98,105], 89));