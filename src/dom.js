
import { indexList } from "./script.js";
import { indexListArray } from "./script.js";

export const DOM = (() => {
    //form & sidebar selectors
    const search = document.querySelector("#search");
    const inbox = document.querySelector("#inbox");
    const categories = document.querySelector("#categories");
    const submit = document.querySelector("#submit-button");
    const taskTitle = document.querySelector(".task-title");
    const taskDescription = document.querySelector("#textarea");
    const taskPriority = document.querySelector("#priority");
    const taskDate = document.querySelector("#date");


    //general html selectors
    const content = document.querySelector(".content");


    const expand = document.querySelector(".expand-button");


    return { search, inbox, categories, submit, taskTitle, taskDescription, taskPriority, taskDate, content, expand };

})();



//this function take form datas, creates a new object with it and updates indexListArray;
export function domToArrayTask() {
    DOM.submit.addEventListener("click", (event) => {
        event.preventDefault();
        
        const newTask = new indexList(DOM.taskTitle.value, DOM.taskDescription.value, DOM.taskDate.value, DOM.taskPriority.checked);
        newTask.pushIn();
        console.log(indexListArray);
    })
}



//adding form data to the dom
export function domToContentTask() {
    DOM.submit.addEventListener("click", (event) => {
        event.preventDefault();

        if (DOM.taskTitle.value.trim() === "") {
            return;
        }

        const currentTask = indexListArray[indexListArray.length - 1];

        const book = document.createElement("div");
        book.classList.add("books");
        book.dataset.id = currentTask.id;
        DOM.content.appendChild(book);


        const paragraph = document.createElement("p");
        paragraph.classList.add("task-title");
        book.appendChild(paragraph);
        paragraph.textContent = currentTask.title;


        const button = document.createElement("button");
        button.textContent = "Expand";
        button.classList.add("expand-button");
        book.appendChild(button);

        const details = document.createElement("div");
        details.classList.add("book-details", "hidden");
        book.appendChild(details);

        const description = document.createElement("p");
        const date = document.createElement("p");
        const priority = document.createElement("p");
        details.appendChild(description);
        details.appendChild(date);
        details.appendChild(priority);
        description.classList.add("task-description");
        date.classList.add("task-date");
        priority.classList.add("task-priority");
        description.textContent = currentTask.description;
        date.textContent = currentTask.date !== "" ? `📅 Until: ${currentTask.date}` : "📅 No time out set";
        priority.textContent = `${currentTask.priority === true ? "🔥 Important" : "🟢 No priority"}`;


    })
}


export function expandTask() {
    DOM.content.addEventListener("click", (event) => {
        if (event.target.classList.contains("expand-button")) {
            const parent = event.target.closest(".books");
            const details = parent.querySelector(".book-details");
            details.classList.toggle("hidden");
            event.target.textContent = details.classList.contains("hidden") ? "Expand" : "Hide";

        }
    })
}   