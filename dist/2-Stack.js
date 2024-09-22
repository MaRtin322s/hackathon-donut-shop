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
    size() {
        return this.stack.length;
    }
    isEmpty() {
        return this.stack.length === 0 ? true : false;
    }
}
