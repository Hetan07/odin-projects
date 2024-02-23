const button = document.querySelector('#add-button');
const input = document.querySelector("#item");
const ul = document.querySelector("#shopping-list");

button.addEventListener("click", ()=>{
    let item = input.value;
    console.log(item);

    const li = document.createElement("li");
    li.textContent = item;

    input.value = "";
    ul.appendChild(li);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    const span = document.createElement("span");

    li.appendChild(span);
    li.appendChild(deleteButton);


    deleteButton.addEventListener("click", ()=>{
        li.removeChild(deleteButton);
        li.removeChild(span);
        ul.removeChild(li);
    })

    input.focus();

})
