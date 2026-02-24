// Implementing a hash table in TypeScript

class HashTable<V> {
    private table: { [key: string]: [string, V][] };
    private size: number;
    private keySet: Set<string>;

    constructor(size: number) {
        this.table = {};
        this.size = size;
        this.keySet = new Set();
    }

    private hash(key: string): number {
        let hashValue = 0;
        for (let i = 0; i < key.length; i++) {
            hashValue += key.charCodeAt(i);
        }
        return hashValue % this.size;
    }

    set(key: string, value: V): void {
        const index = this.hash(key);

        if (!this.table[index]) {
            this.table[index] = [];
        }
        // Check for existing key and update value
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                this.table[index][i][1] = value;
                return;
            }
        }       
        this.table[index].push([key, value]);
        this.keySet.add(key);
    }

    get(key: string): V | undefined {
        const index = this.hash(key);
        if (!this.table[index]) {
            return undefined;
        }
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                return this.table[index][i][1];
            }
        }
        return undefined;
    } 

    delete(key: string): void {
        const index = this.hash(key);
        if (!this.table[index]) {
            return;
        } 
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                this.table[index].splice(i, 1);
                this.keySet.delete(key);
                return;
            }
        }
    }

    keys(): string[] {
        return Array.from(this.keySet);
    }

    values(): V[] {
        const valuesArray: V[] = [];
        for (let index in this.table) {
            for (let i = 0; i < this.table[index].length; i++) {
                valuesArray.push(this.table[index][i][1]);
            }
        }
        return valuesArray;
    }
}

// Example usage:
const hashTable = new HashTable<string | number>(10);
hashTable.set("name", "Alice");
hashTable.set("age", 30);
console.log(hashTable.get("name")); // Output: Alice
console.log(hashTable.get("age")); // Output: 30
hashTable.set("name", "Robert");
// hashTable.delete("name");
console.log(hashTable.get("name")); // Output: undefined
console.log(hashTable.keys()); // Output: ["age"]
console.log(hashTable.values()); // Output: [30]