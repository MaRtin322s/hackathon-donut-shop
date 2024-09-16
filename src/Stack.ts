class Stack<E> {
    public stack: E[];

    constructor() {
        this.stack = [];
    }

    push(element: E): number {
        this.stack.push(element);
        return this.stack.length;
    }

    
}

