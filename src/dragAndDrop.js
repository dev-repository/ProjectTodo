/**
 * [x] 엘리먼트의 .draggable, .container의 배열로 선택자를 지정합니다.
 * [x] draggables를 전체를 루프하면서 dragstart, dragend를 이벤트를 발생시킵니다.
 * [x] dragstart, dragend 이벤트를 발생할때 .dragging라는 클래스를 토글시킨다.
 * [x] dragover 이벤트가 발생하는 동안 마우스 드래그하고 마지막 위치해놓은 Element를 리턴하는 함수를 만듭니다.
 */

export function dragAndDrop(){
    const $ = (select) => {
        document.querySelectorAll(select);
        const draggables = $(".draggable");
        const container = $(".todoList");

        draggables.forEach(el => {
            el.addEventListener("dragStart", () => {
                el.classList.add("dragging");
            });

            el.addEventListener("dragEnd", () => {
                el.classList.remove("dragging");
            });
        });

        function getDragAfterEl(container, y){
            const dragElement = [...container.querySelectorAll(".draggable:not(.dragging)")]
            
            return dragElement.reduce((closest, child) => {
                //해당 엘리먼트에 top값, height값 담겨져 있는 메소드를 호출해 box변수에 할당
                const box = child.getBoundingClientReact();
                //수직 좌표 - top값 - height값 / 2의 연산을 통해서 offset변수에 할당
                const offset = y - box.top - box.height / 2;

                if(offset < 0 && offset > closest.offset){
                    return { offset: offset, element: child };
                } else {
                    return closest;
                }
            }, {offset: Number.NEGATIVE_INFINITY}).element;
        };

        container.forEach(container => {
            container.addEventListener("dragover", e => {
                e.preventDefault()
                const afterEl = getDragAfterEl(container, e.clientY);
                const draggable = document.querySelector(".dragging");
                container.insertBefore(draggable, afterEl);
            });
        });
    }
}