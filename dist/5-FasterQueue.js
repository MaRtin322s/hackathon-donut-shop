"use strict";
class FasterQueue {
    queue;
    constructor() {
        this.queue = [];
    }
    offer(element) {
        return this.queue.push(element);
    }
}
let fasterQueue = new FasterQueue();
console.log(fasterQueue.offer(1));
