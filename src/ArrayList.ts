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
}

let structure = new ArrayList<number>();
console.log(structure.add(1));
console.log(structure);

