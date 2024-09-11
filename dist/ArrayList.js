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
}
let arrayList = new ArrayList();
console.log(arrayList.add(1));
console.log(arrayList);
console.log(arrayList.addByIndex(1, 5));
console.log(arrayList);
