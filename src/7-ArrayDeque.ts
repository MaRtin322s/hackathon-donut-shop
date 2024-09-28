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

    peek(): { firstElement: T, lastElement: T} | null {
        if (this.arrayDeque.length === 0) {
            return null;
        } else {
            return {
                firstElement: this.arrayDeque[0],
                lastElement: this.arrayDeque[this.arrayDeque.length - 1]
            }
        }
    }
}