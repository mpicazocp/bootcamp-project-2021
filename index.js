let addIngredient = () => {
    let ul = document.getElementById("ingredients");
    let li = document.createElement("li");
    let ingredient = document.getElementById("newIngredient").value;
    li.appendChild(document.createTextNode(ingredient));
    ul.appendChild(li);
}

let addInstruction = () => {
    let ol = document.getElementById("instructions");
    let li = document.createElement("li");
    let instruction = document.getElementById("newInstruction").value;
    li.appendChild(document.createTextNode(instruction));
    ol.appendChild(li);
}