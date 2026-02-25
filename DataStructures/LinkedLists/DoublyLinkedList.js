class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    insert(index, value) {
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }

        if (index >= this.length) {
            this.append(value);
            return this.printList();
        }

        const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.next = follower;
        newNode.prev = leader;
        follower.prev = newNode;
        this.length++;
        return this.printList();
    }

    remove(index) {
        if (index === 0) {
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            }
            this.length--;
            return this.printList();
        }

        if (index >= this.length) {
            index = this.length - 1;
        }

        const leader = this.traverseToIndex(index - 1);
        const nodeToRemove = leader.next;
        const follower = nodeToRemove.next;

        leader.next = follower;
        if (follower) {
            follower.prev = leader;
        } else {
            this.tail = leader; // Update tail if we removed the last node
        }
        this.length--;
        return this.printList();
    }
}

const myLinkedList = new DoublyLinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);

myLinkedList.prepend(1);

myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);

myLinkedList.remove(2);
myLinkedList.remove(20);

console.log(myLinkedList.printList());
console.log(myLinkedList);