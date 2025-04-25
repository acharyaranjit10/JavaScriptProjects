let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode="light";
const theme = ()=>{
if (currMode ==="light"){
    body.classList.add("dark");
    body.classList.remove("light");
    currMode = "dark";
}
else{

    body.classList.add("light");
    body.classList.remove("dark");
    currMode = "light";
}

}
modeBtn.addEventListener("click",theme);