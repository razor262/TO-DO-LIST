import "normalize.css";
import "./styles/main.scss";

let btn = document.querySelector('.btn')


let div = document.createElement("div");
div.className = "container super"
div.id = "content";

let input = document.createElement("input");
input.className = "input"
input.style.color = "#fff"
input.style.background = "#005678"

div.appendChild(input);

document.body.appendChild(div);

btn.addEventListener("click", myFunction);

function myFunction() {
if(input.value == 0){
    alert('Добавьте задачу')
} else {

    let btn_1 = document.createElement("button");
    btn_1.className = "delButton";
    btn_1.textContent = "delited";
    div.appendChild(btn_1);
  
    // create a new heading and add it to the div
    let p = document.createElement("p");
    p.style.color = '#05d9e8'
    p.style.fontWeight = 'bold';
    p.className = 'myText'
    p.textContent = input.value;
    div.appendChild(p);
    input.value = ''
  
    // add div to the document
    document.body.appendChild(div);
  
    btn_1.addEventListener('click', deliteFunction)

    function deliteFunction() {
        //alert('delite')
        div.removeChild(p)
        div.removeChild(btn_1)
    }
  
}


}

