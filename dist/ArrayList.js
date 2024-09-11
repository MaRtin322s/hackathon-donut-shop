"use strict";
class ArrayList {
    arrayList;
    constructor() {
        this.arrayList = [];
    }
    add(element) {
        if (element) {
            this.arrayList[this.arrayList.length] = element;
            return true;
        }
        else {
            return false;
        }
    }
    addByIndex(index, element) {
        if (index >= 0 && index <= this.arrayList.length) {
            this.arrayList.splice(index, 0, element);
            return true;
        }
        else {
            return false;
        }
    }
    get(index) {
        if (index >= 0 && index <= this.arrayList.length) {
            return this.arrayList.at(index);
        }
        else {
            throw new RangeError('Index out of bounds exception!');
        }
    }
    set(index, element) {
        if (index >= 0 && index < this.arrayList.length) {
            let previousElement = this.arrayList.at(index);
            this.arrayList[index] = element;
            return previousElement;
        }
        else {
            throw new RangeError('Index out of bounds exception!');
        }
    }
    remove(index) {
        if (index >= 0 && index < this.arrayList.length) {
            this.arrayList.splice(index, 1);
            return index;
        }
        else {
            return -1;
        }
    }
}
let arrayList = new ArrayList();
console.log(arrayList.add(1));
console.log(arrayList);
console.log(arrayList.addByIndex(1, 5));
console.log(arrayList);
console.log(arrayList.get(1));
console.log(arrayList.set(2, 3));
console.log(arrayList);
console.log(arrayList.remove(3));
console.log(arrayList);
