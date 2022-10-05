import "normalize.css";
import "./styles/main.scss";

let one = document.querySelector(".input");
//let one = document.querySelector(".container");
let button = document.querySelector(".btn-1");

button.addEventListener("click", myFunction);

function myFunction() {
  let div = document.createElement("div");
  div.id = "content";
  div.className = "note";

  let btn = document.createElement("button");
  btn.className = "newButton"
  btn.textContent = "delite";
  div.appendChild(btn);

  // create a new heading and add it to the div
  let p = document.createElement("p");
  p.textContent = one.value;
  div.appendChild(p);

  // add div to the document
  document.body.appendChild(div);

  btn.addEventListener('click', deliteFunction)

  function deliteFunction() {
    //alert('delite')
    div.removeChild(p)
    div.removeChild(btn)
}
}

