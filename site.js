


let totalPrice = +10;

updateTotalPrice();

updateMinusButton(lettuce, "minus-lettuce");
updateMinusButton(tomato, "minus-tomato");
updateMinusButton(cheese, "minus-cheese");
updateMinusButton(onion, "minus-onion");
updateMinusButton(pickles, "minus-pickles");
updateMinusButton(meat, "minus-meat");

function add(idOfFatherElement, classNameOfNewTag, ingredientPrice) {
  const ingredientFatherDiv = document.getElementById("" + idOfFatherElement);
  const ingredientToAdd = document.createElement("div");
  ingredientToAdd.classList.add("" + classNameOfNewTag);
  ingredientFatherDiv.appendChild(ingredientToAdd);
  totalPrice += +ingredientPrice;
  updateTotalPrice();
  updateMinusButton(ingredientFatherDiv, "minus-" + classNameOfNewTag);
  updateAmount(idOfFatherElement);
}

function remove(idOfFatherElement, elementClassName, ingredientPrice) {
  const ingredientFatherDiv = document.getElementById("" + idOfFatherElement);
  if (ingredientFatherDiv.childElementCount > 0) {
    const ingredientToRemove = ingredientFatherDiv.getElementsByClassName(
      "" + elementClassName
    )[0];
    ingredientFatherDiv.removeChild(ingredientToRemove);
    totalPrice -= +ingredientPrice;
    updateTotalPrice();
    updateMinusButton(ingredientFatherDiv, "minus-" + elementClassName);
    updateAmount(idOfFatherElement);
  }
}

function updateAmount(idOfFatherElement) {
  const ingredientAmountElement = document.getElementById(
    idOfFatherElement + "Amount"
  );
  const ingredientFatherDiv = document.getElementById("" + idOfFatherElement);
  ingredientAmountElement.innerText = ingredientFatherDiv.childElementCount;
}

function updateTotalPrice() {
  const total = document.getElementById("totalPrice");
  total.innerHTML = "Total Price: " + totalPrice + "&#8362;";
}

function updateMinusButton(ingredientFatherDiv, idOfButton) {
  const buttonToUpdate = document.getElementById(idOfButton);
  if (ingredientFatherDiv.childElementCount === 0) {
    buttonToUpdate.disabled = true;
  } else {
    buttonToUpdate.disabled = false;
  }
}
