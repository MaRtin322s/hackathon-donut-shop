class ArrayDeque<T> {
    public arrayDeque: T[];

    constructor() {
        this.arrayDeque = [];
    }

    add(element: T): void {
        this.arrayDeque.push(element);
    }

    offer(element: T): void {
        this.arrayDeque.unshift(element);
    }

    addFirst(element: T): void {
        this.arrayDeque.unshift(element);
    }

    addLast(element: T): void {
        this.arrayDeque.push(element);
    }

    push(element: T): void {
        this.arrayDeque.push(element);
    }

    insert(index: number, element: T): void {
        if (index >= 0 && index <= this.arrayDeque.length) {
            this.arrayDeque.splice(index, 0, element);
        } else {
            throw new RangeError('Array Deque is empty!');
        }
    }

    set(index: number, element: T): T | undefined {
        if (index >= 0 && index < this.arrayDeque.length) {
            let previousElement = this.arrayDeque.at(index);
            this.arrayDeque[index] = element;
            return previousElement;
        } else {
            throw new RangeError('Index out of bounds exception!');
        }
    }

    peek(): { firstElement: T, lastElement: T } | null {
        if (this.arrayDeque.length === 0) {
            return null;
        } else {
            return {
                firstElement: this.arrayDeque[0],
                lastElement: this.arrayDeque[this.arrayDeque.length - 1]
            }
        }
    }

    poll(): T | undefined | null {
        if (this.arrayDeque.length === 0) {
            return null;
        } else {
            return this.arrayDeque.shift();
        }
    }

    pop(): T | undefined | null {
        if (this.arrayDeque.length === 0) {
            return null;
        } else {
            return this.arrayDeque.pop();
        }
    }

    getByIndex(index: number) {
        if (index >= 0 && index < this.arrayDeque.length) {
            let element = this.arrayDeque.at(index);
            return element;
        } else {
            throw new RangeError('Index out of bounds exception!');
        }
    }

    getByElement(element: T) {
        let foundElement = this.arrayDeque.find(x => x == element);

        if (foundElement) {
            return foundElement;
        } else {
            return null;
        }
    }

    removeByIndex(index: number): number {
        if (index >= 0 && index < this.arrayDeque.length) {
            this.arrayDeque.splice(index, 1);
            return index;
        } else {
            throw new RangeError('Index out of bounds exception!');
        }
    }

    remove(element: T) {
        let foundElement = this.arrayDeque.find(x => x == element);

        if (foundElement) {
            let index = this.arrayDeque.indexOf(foundElement);
            this.arrayDeque.splice(index, 1);
        } else {
            return null;
        }
    }

    removeFirst(): T | undefined {
        if (this.arrayDeque.length === 0) {
            throw new RangeError('Array Deque is empty!');
        } else {
            return this.arrayDeque.shift();
        }
    }

    removeLast(): T | undefined {
        if (this.arrayDeque.length === 0) {
            throw new RangeError('Array Deque is empty!');
        } else {
            return this.arrayDeque.pop();
        }
    }

    size(): number {
        return this.arrayDeque.length;
    }
}