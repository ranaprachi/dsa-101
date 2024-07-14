class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
 // use assignment strategy instead
class BinaryTree {
    constructor() {
        this.root = null;
    }
    _insert (node, newNode) {

    }
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        let currNode = this.root;
        let prevNode;
        while (currNode) {
            prevNode = currNode;
            if (value < currNode.val) {
                currNode = currNode.left;
            } else {
                currNode = currNode.right;
            }
        }
        if (prevNode.val > value) {
            prevNode.left = newNode;
        } else {
            prevNode.right = newNode;
        }
    }
    delete(value) {
        if (!value || !this.root) return null;
        let currNode = this.root;
        let parentNode;

        while (currNode) {
            parentNode = currNode;
            if (currNode.val === value) {
                break;
            }
            if (currNode.val < value) {
                currNode = currNode.right;
            } else {
                currNode = currNode.left;
            }
        }
        if (currNode && currNode.val === value) {
            if (!currNode.left && !currNode.right) {
                if (parentNode?.left?.val === value) {
                    parentNode.left = null;
                } else {
                    parentNode.right = null;
                }
            } else if (!currNode.left && !currNode.right) {
                if (!currNode.left) {
                    currNode = currNode.right;
                } else {
                    currNode = currNode.left;
                }
            } else {
                let smallestRightNode = currNode.right;
                let smallestRightParent;
                while (smallestRightNode && smallestRightNode.left) {
                    smallestRightParent = smallestRightNode;
                    smallestRightNode = smallestRightNode.left;
                }
                currNode = smallestRightNode;
                if(smallestRightParent) smallestRightParent.left = null;
            }
        }
        return null;
    }
    search(value) {
        if (!this.root || !value) return null;
        let currNode = this.root;
        while(currNode) {
            if (currNode.val === value) break;
            if (currNode.val < value) {
                currNode = currNode.right;
            } else {
                currNode = currNode.left;
            }
        }
        if (currNode && currNode.val === value) {
            return currNode;
        } else {
            return null;
        }
    }
    inOrderTraversal(node = this.root, result = []) {
        if (!node) return null;
        this.inOrderTraversal(node.left, result);
        result.push(node.val);
        this.inOrderTraversal(node.right, result);
        return result;
    }
    preOrderTraversal(node = this.root, result = []) {
        if (!node) return null;
        result.push(node.val);
        this.preOrderTraversal(node.left, result);
        this.preOrderTraversal(node.right, result);
        return result;
    }
    postOrderTraversal(node = this.root, result = []) {
        if (!node) return null;
        this.postOrderTraversal(node.left, result);
        this.postOrderTraversal(node.right, result);
        result.push(node.val);
        return result;
    }
}

const myBST = new BinaryTree();
myBST.insert(10);
myBST.insert(5);
myBST.insert(18);
myBST.insert(3);
myBST.insert(4);
myBST.insert(1);
myBST.insert(2);
myBST.insert(17);
myBST.insert(20);
myBST.insert(12);
myBST.insert(11);
myBST.insert(13);
myBST.search(17);
console.log('traversal in order', myBST.inOrderTraversal());
console.log('traversal pre order', myBST.preOrderTraversal());
console.log('traversal post order', myBST.postOrderTraversal());
myBST.delete(17);
console.log('traversal in order', myBST.inOrderTraversal());
