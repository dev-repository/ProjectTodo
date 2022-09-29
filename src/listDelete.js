import { getTodo } from "./getTodo.js";
import { showList } from "./showList.js";

export function listDelete(){
    const deletBtns =  document.querySelectorAll("[name=delBtn]");
    console.log(`deleteBtn =======>${deletBtns}`);
    
    for(const ele of deletBtns){
        console.log(`ele 확인 ======>${ele}`);
        ele.addEventListener("click", function() {
            const idx = this.dataset.idx;
            console.log(`idx 확인 ======>${idx}`);
            console.log(`버튼 작동유무 ======> ${ele.dataset.idx}`);

            const currentList = getTodo();
            currentList.splice(idx, 1);
            localStorage.setItem("New Todo", JSON.stringify(currentList));
            showList();
        });
    }

}