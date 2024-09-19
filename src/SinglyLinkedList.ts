class SinglyLinkedList<E> {
    public list: E[];

    constructor() {
        this.list = [];
    }

    addFirst(element: E) {
        return this.list.unshift(element);
    }

    size(): number {
        return this.list.length;
    }

    isEmpty(): boolean {
        return this.list.length === 0 ? true : false;
    }
}