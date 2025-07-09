import "./style.css";
import { expandTask } from "./dom.js";
import { submitFunction } from "./dom.js";
import { deleteTask } from "./dom.js";
import { createCategoryDom } from "./dom.js";
import { toggleCategories } from "./dom.js";
import { toggleAllLists } from "./dom.js";

submitFunction();
expandTask();
deleteTask();
createCategoryDom();
toggleCategories();
toggleAllLists();