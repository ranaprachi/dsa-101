class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 1; // Height of the node (initialized to 1)
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    // Helper function to get the height of a node
    getHeight(node) {
        if (node === null) {
            return 0;
        }
        return node.height;
    }

    // Helper function to perform a right rotation
    rightRotate(y) {
        let x = y.left;
        let T2 = x.right;

        // Perform rotation
        x.right = y;
        y.left = T2;

        // Update heights
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

        // Return new root
        return x;
    }

    // Helper function to perform a left rotation
    leftRotate(x) {
        let y = x.right;
        let T2 = y.left;

        // Perform rotation
        y.left = x;
        x.right = T2;

        // Update heights
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

        // Return new root
        return y;
    }

    // Helper function to calculate balance factor of a node
    balanceFactor(node) {
        if (node === null) {
            return 0;
        }
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    // Helper function to insert a node into the AVL tree
    insertNode(root, data) {
        // If the tree is empty, create a new node and make it the root
        if (root === null) {
            return new TreeNode(data);
        }

        // If the data is less than the node's data, move to the left subtree
        if (data < root.data) {
            root.left = this.insertNode(root.left, data);
        }
        // If the data is greater than the node's data, move to the right subtree
        else if (data > root.data) {
            root.right = this.insertNode(root.right, data);
        }
        // Duplicate keys are not allowed in AVL tree
        else {
            return root;
        }

        // Update height of this ancestor node
        root.height = 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));

        // Get the balance factor of this ancestor node to check whether this node became unbalanced
        let balance = this.balanceFactor(root);

        // If this node becomes unbalanced, then there are four cases

        // Left Left Case
        if (balance > 1 && data < root.left.data) {
            return this.rightRotate(root);
        }

        // Right Right Case
        if (balance < -1 && data > root.right.data) {
            return this.leftRotate(root);
        }

        // Left Right Case
        if (balance > 1 && data > root.left.data) {
            root.left = this.leftRotate(root.left);
            return this.rightRotate(root);
        }

        // Right Left Case
        if (balance < -1 && data < root.right.data) {
            root.right = this.rightRotate(root.right);
            return this.leftRotate(root);
        }

        // Return the (unchanged) root node
        return root;
    }

    // Public method to insert a node into the AVL tree
    insert(data) {
        this.root = this.insertNode(this.root, data);
    }

    // Helper function to find the minimum value node in a subtree
    findMinNode(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
    }

    // Helper function to delete a node from the AVL tree
    deleteNode(root, data) {
        // If the tree is empty, return null
        if (root === null) {
            return null;
        }

        // If the data to be deleted is less than the node's data, move to the left subtree
        if (data < root.data) {
            root.left = this.deleteNode(root.left, data);
        }
        // If the data to be deleted is greater than the node's data, move to the right subtree
        else if (data > root.data) {
            root.right = this.deleteNode(root.right, data);
        }
        // If the node to be deleted is found
        else {
            // Node with only one child or no child
            if (root.left === null) {
                return root.right;
            } else if (root.right === null) {
                return root.left;
            }

            // Node with two children: get the inorder successor (smallest in the right subtree)
            let temp = this.findMinNode(root.right);

            // Copy the inorder successor's content to this node
            root.data = temp.data;

            // Delete the inorder successor
            root.right = this.deleteNode(root.right, temp.data);
        }

        // Update height of the current node
        root.height = 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));

        // Get the balance factor of this node
        let balance = this.balanceFactor(root);

        // If the node becomes unbalanced, then there are four cases

        // Left Left Case
        if (balance > 1 && this.balanceFactor(root.left) >= 0) {
            return this.rightRotate(root);
        }

        // Left Right Case
        if (balance > 1 && this.balanceFactor(root.left) < 0) {
            root.left = this.leftRotate(root.left);
            return this.rightRotate(root);
        }

        // Right Right Case
        if (balance < -1 && this.balanceFactor(root.right) <= 0) {
            return this.leftRotate(root);
        }

        // Right Left Case
        if (balance < -1 && this.balanceFactor(root.right) > 0) {
            root.right = this.rightRotate(root.right);
            return this.leftRotate(root);
        }

        // Return the (unchanged) root
        return root;
    }

    // Public method to delete a node from the AVL tree
    delete(data) {
        this.root = this.deleteNode(this.root, data);
    }

    preOrder(node, result) {
        if (!node) return null;
        result.push(node.data);
        this.preOrder(node.left, result);
        this.preOrder(node.right, result);
        return result;
    }
    print() {
        return (this.preOrder(this.root, []));
    }
}

// Example usage:
let avlTree = new AVLTree();
avlTree.insert(10);
console.log(avlTree.print());
avlTree.insert(5);
console.log(avlTree.print());
avlTree.insert(12);
console.log(avlTree.print());
avlTree.insert(2);
console.log(avlTree.print());
avlTree.insert(8);
console.log(avlTree.print());
avlTree.insert(3);

//console.log(avlTree);
console.log(avlTree.print());
