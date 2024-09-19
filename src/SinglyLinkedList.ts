class SinglyLinkedList<E> {
    public list: E[];

    constructor() {
        this.list = [];
    }

    addFirst(element: E) {
        return this.list.unshift(element);
    }

    addLast(element: E) {
        return this.list.push(element);
    }

    removeFirst(): E | undefined {
        if (this.list.length === 0) {
            throw new RangeError('List is empty!');
        } else {
            return this.list.shift();
        }
    }

    removeLast(): E | undefined {
        if (this.list.length === 0) {
            throw new RangeError('List is empty!');
        } else {
            return this.list.pop();
        }
    }

    size(): number {
        return this.list.length;
    }

    isEmpty(): boolean {
        return this.list.length === 0 ? true : false;
    }
}