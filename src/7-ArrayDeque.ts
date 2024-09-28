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

    insert(index: number, element: T): void {
        if (index >= 0 && index <= this.arrayDeque.length) {
            this.arrayDeque.splice(index, 0, element);
        } else {
            throw new RangeError('Array Deque is empty!');
        }
    }
}