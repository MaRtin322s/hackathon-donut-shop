"use strict";
class Queue {
    queue;
    constructor() {
        this.queue = [];
    }
    offer(element) {
        this.queue.push(element);
    }
}
let queue = new Queue();
queue.offer(1);
console.log(queue);
