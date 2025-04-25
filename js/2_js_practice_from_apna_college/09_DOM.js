// let id1 = document.getElementById("id1");
// console.log(id1);
// console.dir(id1);
// let id1 = document.querySelector("#id1");
// console.dir(id1);

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText=h2.innerText + " From Apna College"

// let box = document.querySelectorAll(".box");
// // box[0].innerText="one";
// // box[1].innerText="two";
// // box[2].innerText="three";
// let idx = 0 ;
// for (let i of box) {
//     i.innerText=`new value for ${idx}`;
//     idx++;}


// let newbtn = document.createElement("button");
// newbtn.innerText="Click Me!";
// newbtn.style.backgroundColor="red";
// newbtn.style.color="white";
//  document.querySelector("body").prepend(newbtn);



// let nav = document.createElement("div");
// nav.innerText="<i></i>";
// nav.style.height="100px";
// nav.style.width="100%";
// nav.style.backgroundColor="gray";
// nav.style.display="flex";
// nav.style.alignItems="center";
// nav.style.justifyContent="spaceEvenly";
// document.querySelector("body").prepend(nav);

let parag = document.querySelector(".para");
console.log(parag);
// parag.setAttribute("class","new");
parag.classList.add("new");