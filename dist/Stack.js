"use strict";
class Stack {
    stack;
    constructor() {
        this.stack = [];
    }
    push(element) {
        this.stack.push(element);
        return this.stack.length;
    }
    pop() {
        if (this.stack.length > 0) {
            return this.stack.pop();
        }
        else {
            throw new RangeError('Stack is empty!');
        }
    }
    peek() {
        if (this.stack.length > 0) {
            return this.stack[this.stack.length - 1];
        }
        else {
            throw new RangeError('Stack is empty!');
        }
    }
}
let stack = new Stack();
stack.push('Pesho');
stack.push('Mariyka');
console.log(stack);
stack.pop();
console.log(stack);
stack.push('Gosho');
console.log(stack.peek());
