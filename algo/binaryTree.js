// Trees
// - non linear DS 
// - Tree have one root Node 
// - Only valid connection between nodes in a Tree is from parent to child. 
    // Connection between siblings or from child to parent are not allowed in trees (these types of connections form graphs, a different type of data structure).
// - Ex :  DOM modal, file system in OS
// - Most commonly used trees are : Binary Trees & Heaps

// BINARY SEARCH TREE (BSTs)
// - In BST, values are ordered so that each node that descends to the left side of its parent must have a value less than its parent, 
    // and each node that descends to the right side of its parent must have a value bigger than its parent.
// - BST great for searching, as on every level of the tree we can identify if required value is greater or less than the parent node, 
    // and from that comparison progressively discard roughly half of the data until we reach our value.

// BST node : left, right, value
// BST props : root
// BST methods : insert, find, contains
// insert: O(1), delete: O(1), access: O(log(n))


class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.rigth = null;
    }
}

class binarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let currNode = this.root, isValAdded = false;
        while (!isValAdded) {
            if (currNode.value === value) return null;
            else if (currNode.value > value) {
                if (!currNode.left) {
                    currNode.left = newNode;
                    isValAdded = true;
                    return this;
                }
                currNode = currNode.left;
            } else {
                if (!currNode.rigth) {
                    currNode.rigth = newNode;
                    isValAdded = true;
                    return this;
                }
                currNode = currNode.rigth;
            }
        }
    }

    find(value) {
        if (!this.root) {
            return null;
        }
        let currNode = this.root, isFound = false;
        while(!isFound) {
            if (currNode.value === value){
                return currNode;
            }
            else if (currNode.value > value) {
                if (!currNode.left) return null;
                currNode = currNode.left;
            }
            else {
                if (!currNode.rigth) return null;
                currNode = currNode.rigth;
            }
        }
    }

    contains(value) {
        const node = this.find(value);
        if (node) {
            return true;
        } 
        return false;
    }
}

const bst = new binarySearchTree();
console.log('insert :', bst.insert(10));
console.log('insert :', bst.insert(9));
console.log('insert :', bst.insert(-10));
console.log('insert :', bst.insert(100));
console.log('insert :', bst.insert(101));
console.log('insert :', bst.insert(5));
console.log('insert :', bst.insert(20));
console.log('find :', bst.find(99));
console.log('find :', bst.find(10));
console.log('find :', bst.find(20));
console.log('constains :', bst.contains(5));