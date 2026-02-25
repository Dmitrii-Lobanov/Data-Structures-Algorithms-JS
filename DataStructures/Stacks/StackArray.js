class Stack {
    constructor() {
        this.data = [];
    }

    peek() {
        return this.data[this.data.length - 1];
    }

    push(value) {
        this.data.push(value);
        return this;
    }

    pop() {
        if (this.data.length === 0) {
            return null;
        }
        return this.data.pop();
    }

    

    isEmpty() {
        return this.data.length === 0;
    }
}

// Example usage:
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek()); // Output: 3
console.log(stack.pop());  // Output: 3
console.log(stack.peek()); // Output: 2
console.log(stack);
console.log(stack.isEmpty()); // Output: false
stack.pop();
stack.pop();
console.log(stack.isEmpty()); // Output: true