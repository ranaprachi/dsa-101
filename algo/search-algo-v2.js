const binarySearch = (arr, ele, low = 0, high = arr.length - 1) => {
    if (low > high) return -1;

    const mid = Math.floor((low + high)/2);
    if (ele === arr[mid]) {
        return [arr[mid], mid];
    } else if (arr[mid] > ele) {
        high = mid - 1;
    } else {
        low = mid + 1;
    }
    return binarySearch(arr, ele, low, high);
}

console.log('--->>>> ', binarySearch([-10,-8,-5,-1,0,3,5,6,9,12,15,30], -8))