class ArrayDeque<T> {
    public arrayDeque: T[];

    constructor() {
        this.arrayDeque = [];
    }

    add(element: T): void {
        this.arrayDeque.push(element);
    }

    offer(element: T): void {
        this.arrayDeque.unshift(element);
    }

    addFirst(element: T): void {
        this.arrayDeque.unshift(element);
    }

    addLast(element: T): void {
        this.arrayDeque.push(element);
    }

    push(element: T): void {
        this.arrayDeque.push(element);
    }
}