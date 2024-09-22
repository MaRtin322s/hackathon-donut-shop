class FasterQueue<E> {
    public queue: E[];

    constructor() {
        this.queue = [];
    }

    offer(element: E) {
        return this.queue.push(element);
    }
}

let fasterQueue: FasterQueue<number> = new FasterQueue<number>();
console.log(fasterQueue.offer(1));
