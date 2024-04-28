class Stack<T> {
    private items: T[];
    private count: number;

    constructor() {
        this.items = [];
        this.count = 0;
    }
}