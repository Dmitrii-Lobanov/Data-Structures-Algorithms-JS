// Write two functions that traverses a tree. One should use recursive, the other should just use a for loop.

// Tree node definition
class TreeNode {
  value: number;
  children: TreeNode[];

  constructor(value: number) {
    this.value = value;
    this.children = [];
  }
}

// Recursive solution
function traverseTreeRecursive(node: TreeNode): void {
  console.log(node.value); // Process the current node

  for (const child of node.children) {
    traverseTreeRecursive(child); // Recursively traverse each child
  }
}

// Iterative solution using a stack
function traverseTreeIterative(root: TreeNode): void {
  const stack: TreeNode[] = [root];

  while (stack.length > 0) {
    const node = stack.pop()!;
    console.log(node.value); // Process the current node

    // Add children to the stack in reverse order to maintain left-to-right traversal
    for (let i = node.children.length - 1; i >= 0; i--) {
      stack.push(node.children[i]);
    }
  }
}

// Example usage:
const root = new TreeNode(1);
const child1 = new TreeNode(2);
const child2 = new TreeNode(3);
const child3 = new TreeNode(4);
root.children.push(child1, child2);
child1.children.push(child3);

console.log("Recursive Traversal:");
traverseTreeRecursive(root); // Output: 1, 2, 4, 3

console.log("Iterative Traversal:");
traverseTreeIterative(root); // Output: 1, 2, 4, 3