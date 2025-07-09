
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
    const form = document.querySelector(".form");
    const catgs = document.querySelector(".catgs");

    //category selectors
    const popupOverlay = document.querySelector(".popup-overlay");
    const addCategory = document.querySelector("#add-category");
    const closePopUp = document.querySelector("#close-popup");
    const catSubmit = document.querySelector("#category-submit");
    const categoryName = document.querySelector("#popup-text");
    const selectCategory = document.querySelector(".category-select");

    //general html selectors
    const content = document.querySelector(".content");
    const toast = document.querySelector("#toast");

    return { search, inbox, categories, submit, taskTitle, taskDescription, taskPriority, taskDate, content, form, toast, addCategory, closePopUp, catSubmit, categoryName, popupOverlay, catgs, selectCategory};

})();


export function submitFunction() { //handler function for domToArrayTask() and domToContentTask()
    DOM.submit.addEventListener("click", (event) => {
        event.preventDefault();

        if (DOM.taskTitle.value.trim() === "") {
            alert('Please fill at least the title field.');
            return;
        }
        const task = domToArrayTask();
        domToContentTask(task);
        toast();

        DOM.form.reset();
    })
}


//this function take form datas, creates a new object with it and updates indexListArray;
function domToArrayTask() {

    const newTask = new indexList(DOM.taskTitle.value, DOM.taskDescription.value, DOM.taskDate.value, DOM.taskPriority.checked);
    newTask.pushIn();
    console.log(indexListArray);
    return newTask;

}



//adding form data to the dom
function domToContentTask(task) {


    const book = document.createElement("div");
    book.classList.add("books");
    book.dataset.id = task.id;
    DOM.content.appendChild(book);


    const paragraph = document.createElement("p");
    paragraph.classList.add("task-title");
    book.appendChild(paragraph);
    paragraph.textContent = task.title;

    const btns = document.createElement("div");
    btns.classList.add("btns");
    book.appendChild(btns);


    const button = document.createElement("button");
    button.textContent = "Expand";
    button.classList.add("expand-button");
    btns.appendChild(button);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete"
    deleteButton.classList.add("delete-button");
    btns.appendChild(deleteButton);

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
    description.textContent = task.description;
    date.textContent = task.date !== "" ? `📅 Until: ${task.date}` : "📅 No time out set";
    priority.textContent = `${task.priority === true ? "🔥 Important" : "🟢 No priority"}`;



}

function toast() {
    DOM.toast.classList.add("show");

    setTimeout(() => {
        DOM.toast.classList.remove("show");
    }, 1000);
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

export function deleteTask() {
    DOM.content.addEventListener("click", (event) => {

        if(event.target.classList.contains("delete-button")) {
            const parent = event.target.closest(".books");
            const id = parent.dataset.id;
            parent.remove();
            
            const index = indexListArray.findIndex(task => task.id == id);
            indexListArray.splice(index, 1);
            console.log(indexListArray);
            
        }
    })
}




export function createCategoryDom() {
    DOM.addCategory.addEventListener("click", (event) => {
        DOM.popupOverlay.style.visibility = "visible";
    })

    DOM.closePopUp.addEventListener("click", (e) => {
        DOM.popupOverlay.style.visibility = "hidden";
    })

    DOM.catSubmit.addEventListener("click", (e) => {
        if (DOM.categoryName.value.trim() === "" || DOM.categoryName.value.trim().length > 10 ) {
            alert('Cattegory name cannot be empty and cannot be longer than 10 words');
            return;
        }
        else {
            event.preventDefault();
            const id = DOM.categoryName.value.trim().replace(/\s+/g, '-');
            const newCat = document.createElement('p');
            newCat.classList.add(id);
            newCat.textContent = DOM.categoryName.value;
            DOM.catgs.appendChild(newCat);
            DOM.categoryName.value = "";
            DOM.popupOverlay.style.visibility = "hidden";

            

            const option = document.createElement("option");
            option.value = id;
            option.textContent = id;
            DOM.selectCategory.appendChild(option);

            
        }
        
        

    })
}
