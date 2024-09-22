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
    peek() {
        if (this.queue.length === 0) {
            throw new RangeError('Queue is empty!');
        }
        else {
            return this.queue[0];
        }
    }
    size() {
        return this.queue.length;
    }
    isEmpty() {
        return this.queue.length === 0 ? true : false;
    }
}
