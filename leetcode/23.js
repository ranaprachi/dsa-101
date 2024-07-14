class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
var mergeKLists = function(lists) {

    const merge = (leftArr, rightArr) => {
        console.log('in merge', leftArr, rightArr);
        let result;
        let leftCurr = leftArr[0];
        let rightCurr = rightArr[0];
        let resultCurr = null;
        while (leftCurr && rightCurr) {
            let minVal;
            if (leftCurr.val < rightCurr.val) {
                minVal = leftCurr.val;
                leftCurr = leftCurr.next;
            } else {
                minVal = rightCurr.val;
                rightCurr = rightCurr.next;
            }
            let newNode = new ListNode(minVal);
            if (resultCurr) {
                resultCurr.next = newNode;
                resultCurr = resultCurr.next;
            } else {
                resultCurr = newNode;
                result = resultCurr;
            }
        }
        if (leftCurr) {
            if (resultCurr) {
                resultCurr.next = leftCurr;
            } else {
                resultCurr = leftCurr;
            }
        }
        if (rightCurr) {
            if (resultCurr) {
                resultCurr.next = rightCurr;
            } else {
                resultCurr = rightCurr;
            }
        }
        return result;
    };
    
    const divide = (arr) => {
        if (!arr) return null;
        if (arr.length === 1) return arr;
        let mid = Math.floor(arr.length / 2);
        let leftArr = arr.slice(0, mid);
        let rigthArr = arr.slice(mid);
        return merge(leftArr, rigthArr);
    };

    let valRes = divide(lists);
    console.log(valRes);
    return valRes;
};