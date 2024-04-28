"use strict";
class Stack {
    items;
    count;
    constructor() {
        this.items = [];
        this.count = 0;
    }
    push(item) {
        this.items.push(item);
        this.count++;
    }
    pop() {
        if (this.count === 0) {
            throw new Error('Stack is empty!');
        }
        this.count--;
        return this.items.pop();
    }
    peek() {
        if (this.count === 0) {
            throw new Error('Stack is empty!');
        }
        return this.items[this.count - 1];
    }
    size() {
        return this.count;
    }
    isEmpty() {
        return this.count === 0;
    }
    clear() {
        this.items = [];
        this.count = 0;
    }
}
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek()); // Output: 30
console.log(stack.size()); // Output: 3
console.log(stack.pop()); // Output: 30
console.log(stack.peek()); // Output: 20
console.log(stack.size()); // Output: 2
console.log(stack.isEmpty()); // Output: false
stack.clear();
console.log(stack.isEmpty()); // Output: true
