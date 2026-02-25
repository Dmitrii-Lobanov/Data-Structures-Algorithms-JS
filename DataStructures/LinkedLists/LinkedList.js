class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
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
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
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
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
    }

    remove(index) {
        if (index === 0) {
            this.head = this.head.next;
            this.length--;
            return this.printList();
        }

        if (index >= this.length) {
            return this.printList();
        }

        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList();
    }

    reverse() {
        if (!this.head.next) {
            return this.head;
        }
        
        let first = this.head;
        this.tail = this.head;
        let second = first.next;

        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }

        this.head.next = null;
        this.head = first;
        return this.printList();
    }
}

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);

myLinkedList.prepend(1);

myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);

myLinkedList.remove(2);
myLinkedList.remove(20);

console.log(myLinkedList.printList());
console.log(myLinkedList);

myLinkedList.reverse();
console.log(myLinkedList.printList());