class SinglyLinkedList<E> {
    public list: E[];

    constructor() {
        this.list = [];
    }

    size(): number {
        return this.list.length;
    }

    isEmpty(): boolean {
        return this.list.length === 0 ? true : false;
    }
}