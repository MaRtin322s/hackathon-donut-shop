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
        if (index >= 0 && index <= this.arrayList.length) {
            return this.arrayList.at(index);
        }
    }
}

let arrayList = new ArrayList<number>();
console.log(arrayList.add(1));
console.log(arrayList);

console.log(arrayList.addByIndex(1, 5));
console.log(arrayList);

console.log(arrayList.get(1));