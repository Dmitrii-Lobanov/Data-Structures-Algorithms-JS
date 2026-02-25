class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first.value;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.length++;
        return this;
    }

    dequeue() {
        if (!this.first) {
            return null;
        }

        if (this.first === this.last) {
            this.last = null;
        }
        
        const holdingPointer = this.first;
        this.first = this.first.next;
        this.length--;
        return holdingPointer.value;
    }

    isEmpty() {
        return this.length === 0;
    }
}

// Example usage:
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.peek()); // Output: 1
console.log(queue.dequeue());  // Output: 1
console.log(queue.peek()); // Output: 2
console.log(queue);
console.log(queue.isEmpty()); // Output: false
queue.dequeue();
queue.dequeue();
console.log(queue.isEmpty()); // Output: true