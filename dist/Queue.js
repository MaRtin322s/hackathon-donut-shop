"use strict";
class Queue {
    queue;
    constructor() {
        this.queue = [];
    }
    offer(element) {
        this.queue.push(element);
    }
    poll() {
        if (this.queue.length === 0) {
            throw new RangeError('Queue is empty!');
        }
        else {
            return this.queue.shift();
        }
    }
}
let queue = new Queue();
queue.offer(1);
console.log(queue);
console.log(queue.poll());
