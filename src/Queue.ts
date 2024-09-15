class Queue<E> {
    public queue: E[];

    constructor() {
        this.queue = [];
    }

    offer(element: E) {
        this.queue.push(element);
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

let queue = new Queue<number>();
queue.offer(1);
console.log(queue);
console.log(queue.poll());
queue.offer(1);
queue.offer(2);
console.log(queue.peek());
