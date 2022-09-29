import { showList } from "./showList.js";

const allDelBtn = document.getElementById("allDelBtn");

export function listAllDelete(){
    allDelBtn.addEventListener("click", (e) => {
        localStorage.removeItem("New Todo");
        showList();
    });
}