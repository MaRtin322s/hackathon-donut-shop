"use strict";
class SinglyLinkedList {
    list;
    constructor() {
        this.list = [];
    }
    addFirst(element) {
        return this.list.unshift(element);
    }
    addLast(element) {
        return this.list.push(element);
    }
    removeFirst() {
        if (this.list.length === 0) {
            throw new RangeError('List is empty!');
        }
        else {
            return this.list.shift();
        }
    }
    removeLast() {
        if (this.list.length === 0) {
            throw new RangeError('List is empty!');
        }
        else {
            return this.list.pop();
        }
    }
    getFirst() {
        if (this.list.length === 0) {
            throw new RangeError('List is empty!');
        }
        else {
            return this.list.at(0);
        }
    }
    getLast() {
        if (this.list.length === 0) {
            throw new RangeError('List is empty!');
        }
        else {
            return this.list.at(-1);
        }
    }
    size() {
        return this.list.length;
    }
    isEmpty() {
        return this.list.length === 0 ? true : false;
    }
}
