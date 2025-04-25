let terminal = document.querySelector(".terminal");
let arr = ["Initializing Hacking",
    "Reading your Files",
    "Password files Detected",
    "Sending all passwords and personal files to server",
    "Cleaning up"]

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
       
    }

async function display(msg) {
    let delay = 1 + Math.ceil(Math.random() * 7 * 1000);
    let para = document.createElement("div");
    para.innerText = msg;
    terminal.append(para);

    for (let i = 0; i < delay / 150; i++) {
        await sleep(150);
        if (para.innerHTML.endsWith("...")) {
            para.innerHTML = para.innerHTML.slice(0, para.innerHTML.length - 3);
        } else {
            para.innerHTML += ".";
        }
    }
}

async function deliver() {

    for (const item of arr) {
        await display(item);

    }

}
deliver();

