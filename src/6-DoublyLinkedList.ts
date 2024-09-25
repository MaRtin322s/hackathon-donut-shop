class DoublyLinkedList<E> {
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
}