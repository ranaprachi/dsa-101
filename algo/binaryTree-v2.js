class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}
// with AVL
class BST {
    constructor() {
        this.root = null;
    }
    _insert(node, data) {
        if (!node) {
            return new Node(data);
        }
        if (node.data > data) {
            node.left = this._insert(node.left, data);
        } else {
            node.right = this._insert(node.right, data);
        }
        return node;
    }
    insert(data) {
        this.root = this._insert(this.root, data);
    }
    findSmallestNode(node) {
        while (node.left) {
            node = node.left;
        }
        return node;
    }
    _delete(node, data) {
        if (!node) {
            return null;
        }
        if (node.data > data) {
            node.left = this._delete(node.left, data);
        } else if (node.data < data) {
            node.right = this._delete(node.right, data);
        } else {
            if (!node.left) {
                node = node.right;
            }
            else if (!node.right) {
                node = node.left;
            }
            else {
                const smallestNode = this.findSmallestNode(node.right);
                node.data = smallestNode.data;
                node.right = this._delete(node.right, node.data);
            }
        }
        return node;
    }
    delete(data) {
        this.root = this._delete(this.root, data);
    }
    inOrderTraversal(node = this.root, result = []) {
        if (!node) return null;
        if (node.left) {
            this.inOrderTraversal(node.left, result);
        }
        result.push(node.data);
        if (node.right) {
            this.inOrderTraversal(node.right, result);
        }
        return result;
    }
    search(value, node = this.root) {
        let result = null;
        if (!node) return result;
        if (node.data === value) {
            return node;
        }
        else if (node.data > value) {
            result = this.search(value, node.left);
        } else {
            result = this.search(value, node.right);
        }
        return result;
    }
}

const myBST = new BST();
myBST.insert(10);
myBST.insert(5);
myBST.insert(15);
myBST.insert(8);
myBST.insert(3);
myBST.insert(20);
myBST.insert(12);
myBST.insert(11);
myBST.insert(13);
myBST.insert(14);
console.log('my BST :::', myBST.inOrderTraversal());
myBST.delete(10);
console.log('my BST :::', myBST.inOrderTraversal());
console.log('find 11', myBST.search(111));