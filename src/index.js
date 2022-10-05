import "normalize.css";
import "./styles/main.scss";

let btn = document.querySelector('.btn')

let div = document.createElement("div");
div.className = "container"
div.id = "content";
div.className = "note";

let input = document.createElement("input");
input.className = "input"
div.appendChild(input);
/*
let btn = document.createElement("button");
btn.className = "newButton"
btn.textContent = "create";
div.appendChild(btn);
*/
document.body.appendChild(div);

btn.addEventListener("click", myFunction);

function myFunction() {

  let btn_1 = document.createElement("button");
  btn_1.className = "delButton"
  btn_1.textContent = "delited";
  div.appendChild(btn_1);

  // create a new heading and add it to the div
  let p = document.createElement("p");
  p.textContent = input.value;
  div.appendChild(p);

  // add div to the document
  document.body.appendChild(div);

  btn_1.addEventListener('click', deliteFunction)

  function deliteFunction() {
    //alert('delite')
    div.removeChild(p)
    div.removeChild(btn)
}
}

