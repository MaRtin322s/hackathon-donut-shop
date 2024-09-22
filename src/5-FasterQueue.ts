class FasterQueue<E> {
    public queue: E[];

    constructor() {
        this.queue = [];
    }

    offer(element: E) {
        return this.queue.push(element);
    }

    poll(): E | undefined{
        if (this.queue.length === 0) {
            throw new RangeError('Queue is empty!');
        } else {
            return this.queue.shift();
        }
    }

    peek(): E | undefined {
        if (this.queue.length === 0) {
            throw new RangeError('Queue is empty!');
        } else {
            return this.queue[0];
        }
    }

    size(): number {
        return this.queue.length;
    }
}

let fasterQueue: FasterQueue<number> = new FasterQueue<number>();
console.log(fasterQueue.offer(1));
