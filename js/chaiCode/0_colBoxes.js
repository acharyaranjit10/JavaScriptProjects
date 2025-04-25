let boxes = document.querySelectorAll(".box");
let body = document.querySelector("body");

boxes.forEach(box => {
    let style = window.getComputedStyle(box);
    let bgColor = style.backgroundColor;

    box.addEventListener("click",()=>{
        body.style.backgroundColor= bgColor;

    })
    
});