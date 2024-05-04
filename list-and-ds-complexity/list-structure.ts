class ArrayList<T> {
    private items: T[];
    private count: number;

    constructor() {
        this.items = new Array(2);
        this.count = 0;
    }

    get Count(): number {
        return this.count;
    }

    get(index: number): T {
        if (index < 0 || index >= this.count) {
            throw new RangeError('Index out of range');
        }

        return this.items[this.count - 1 - index];
    }

    set(index: number, value: T) {
        if (index < 0 || index >= this.count) {
            throw new RangeError('Index out of range');
        }

        this.items[this.count - 1 - index] = value;
    }

    Add(item: T): void {
        if (this.count === this.items.length) {
            this.resize()
        }

        this.items[this.count++] = item;
    }

    RemoveAt(index: number): T {
        if (index < 0 || index >= this.count) {
            throw new RangeError('Index out of range');
        }

        const removedItem = this.get(index);
        this.shift(index);
        this.count--;

        if (this.count <= this.items.length / 4) {
            this.shrink();
        }

        return removedItem;
    }

    private resize(): void {
        const newItems = new Array(this.items.length * 2);
        for (let i = 0; i < this.items.length; i++) {
            newItems[i] = this.items[i];
        }
        this.items = newItems;
    }

    private shrink(): void {
        const newItems = new Array(this.items.length / 2);
        for (let i = 0; i < this.count; i++) {
            newItems[i] = this.items[i];
        }
        this.items = newItems;
    }
}