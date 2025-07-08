
    export const indexListArray = [];

    export class indexList {
        static currentId = 0;

        constructor(title, description, date, priority) {
            this.title = title;
            this.id = indexList.currentId++;
            this.description = description;
            this.date = date;
            this.priority = priority;
        }

        pushIn() {
            indexListArray.push(this);
        }

    };

