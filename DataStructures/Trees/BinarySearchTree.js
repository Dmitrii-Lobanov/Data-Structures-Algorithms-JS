class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;

        while (true) {
            if (value === current.value) return undefined; // No duplicates allowed

            if (value < current.value) {
                // Go left
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }

                current = current.left;
            } else {
                // Go right
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }

                current = current.right;
            }
        }
    }

    lookup(value) {
        if (!this.root) return false;

        let current = this.root;

        while (current) {
            if (value === current.value) return this;

            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return false;
    }

        remove(value) {
        if (!this.root) return false;

        let current = this.root;
        let parent = null;

        while (current) {
            if (value < current.value) {
                parent = current;
                current = current.left;
            } else if (value > current.value) {
                parent = current;
                current = current.right;
            } else {
                // Node to be deleted found

                // Case 1: No children
                if (!current.left && !current.right) {
                    if (!parent) {
                        this.root = null; // Tree had only one node
                    } else if (parent.left === current) {
                        parent.left = null;
                    } else {
                        parent.right = null;
                    }
                }
                // Case 2: One child
                else if (!current.left) {
                    if (!parent) {
                        this.root = current.right; // Node to delete is root
                    } else if (parent.left === current) {
                        parent.left = current.right;
                    } else {
                        parent.right = current.right;
                    }
                } else if (!current.right) {
                    if (!parent) {
                        this.root = current.left; // Node to delete is root
                    } else if (parent.left === current) {
                        parent.left = current.left;
                    } else {
                        parent.right = current.left;
                    }
                }
                // Case 3: Two children
                else {
                    let successorParent = current;
                    let successor = current.right;

                    while (successor.left) {
                        successorParent = successor;
                        successor = successor.left;
                    }

                    if (successorParent !== current) {
                        successorParent.left = successor.right;
                        successor.right = current.right;
                    }

                    successor.left = current.left;

                    if (!parent) {
                        this.root = successor; // Node to delete is root
                    } else if (parent.left === current) {
                        parent.left = successor;
                    } else {
                        parent.right = successor;
                    }
                }

                return true; // Node deleted
            }
        }
    
        return false; // Node not found
    }
}

function traverse(node) {
    if (!node) return null;

    return {
        value: node.value,
        left: traverse(node.left),
        right: traverse(node.right)
    };
}   

// Example usage:
const bst = new BinarySearchTree();
bst.insert(9);
bst.insert(4);
bst.insert(6);
bst.insert(20);
bst.insert(170);
bst.insert(15);
bst.insert(1);
console.log(bst.lookup(15)); // Output: true
console.log(bst.lookup(7));  // Output: false
console.log(JSON.stringify(traverse(bst.root), null, 2));

bst.remove(20);
console.log(JSON.stringify(traverse(bst.root), null, 2));