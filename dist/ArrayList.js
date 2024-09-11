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
}
let structure = new ArrayList();
console.log(structure.add(1));
console.log(structure);
