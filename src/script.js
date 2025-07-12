export const indexListArray = [];
export const indexListCatgs = [];

export class indexList {
    static currentId = 0;

    constructor(title, description, date, priority, category) {
        this.title = title;
        this.id = indexList.currentId++;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.category = category;
    }

    pushIn() {
        indexListArray.push(this);
    }

};

export class indexCatgs {
    constructor(name) {
        this.name = name;
    }

    pushIn() {
        indexListCatgs.push(this);
    }
};