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
}