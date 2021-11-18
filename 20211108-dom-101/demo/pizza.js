// const title = document.getElementById("title")
// console.log(title);

// title.innerText = "Rose's Hostile Takeover";

// const allHeadings = document.getElementsByClassName("heading");
// console.log(allHeadings);

const button = document.getElementById("emoji");
console.log(button.innerText);

function vote() {
  button.innerText = button.innerText === "😀" ? "🤮" : "😀";
  button.classList.add("blue");
  console.dir(button);
}

// // //

const chosenToppings = document.getElementById("chosen-toppings");

function addTopping(topping) {
  const newLi = document.createElement("li");
  newLi.innerText = topping;

  const deleteButton = document.createElement('button');
  deleteButton.innerText = "X";
  deleteButton.addEventListener('click', deleteTopping);
  newLi.appendChild(deleteButton);

  chosenToppings.appendChild(newLi);
}

function deleteTopping(event) {
  const toppingToRemove = event.target.parentElement;
  chosenToppings.removeChild(toppingToRemove);
}

