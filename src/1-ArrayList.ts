class ArrayList<E> {
    public arrayList: E[];

    constructor() {
        this.arrayList = [];
    }

    add(element: E): boolean {
        if (element) {
            this.arrayList[this.arrayList.length] = element;
            return true;
        } else {
            return false;
        }
    }

    addByIndex(index: number, element: E): boolean {
        if (index >= 0 && index <= this.arrayList.length) {
            this.arrayList.splice(index, 0, element);
            return true;
        } else {
            return false;
        }
    }

    get(index: number): E | undefined {
        if (index >= 0 && index < this.arrayList.length) {
            return this.arrayList.at(index);
        } else {
            throw new RangeError('Index out of bounds exception!');
        }
    }

    set(index: number, element: E): E | undefined {
        if (index >= 0 && index < this.arrayList.length) {
            let previousElement = this.arrayList.at(index);
            this.arrayList[index] = element;
            return previousElement;
        } else {
            throw new RangeError('Index out of bounds exception!');
        }
    }

    remove(index: number): number {
        if (index >= 0 && index < this.arrayList.length) {
            this.arrayList.splice(index, 1);
            return index;
        } else {
            return -1;
        }
    }

    size(): number {
        return this.arrayList.length;
    }

    indexOf(element: E): number {
        return this.arrayList.indexOf(element);
    }

    contains(element: E): boolean {
        return this.arrayList.includes(element) ? true : false;
    }

    isEmpty(): boolean {
        return this.arrayList.length === 0 ? true : false;
    }
}