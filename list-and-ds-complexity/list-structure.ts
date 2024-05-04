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

    get(index: number):T {
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
}