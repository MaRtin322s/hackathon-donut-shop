class Stack<E> {
    public stack: E[];

    constructor() {
        this.stack = [];
    }

    push(element: E): number {
        this.stack.push(element);
        return this.stack.length;
    }

    pop(): E | undefined {
        if (this.stack.length > 0) {
            return this.stack.pop();
        } else {
            throw new RangeError('Stack is empty!');
        }
    }

    peek(): E | undefined {
        if (this.stack.length > 0) {
            return this.stack[this.stack.length - 1];
        } else {
            throw new RangeError('Stack is empty!');
        }
    }

    size(): number {
        return this.stack.length;
    }

    isEmpty(): boolean {
        return this.stack.length === 0 ? true : false;
    }
}