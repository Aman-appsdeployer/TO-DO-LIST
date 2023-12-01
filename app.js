
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input"); // Corrected the selector for the input element

btn.addEventListener("click", function() {
  let item = document.createElement("li");
  item.innerText = inp.value;

  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add("delete");

  item.appendChild(delBtn);
  ul.appendChild(item);
  inp.value = ""; // Corrected the capitalization for "value"
});

ul.addEventListener("click", function(event) {
  if (event.target.nodeName === "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("deleted");
  }
});




