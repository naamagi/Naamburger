// function addT(){
//     const newDiv=document.querySelector("#container");
//     const newP=document.createElement('p');
//     newP.innerHTML='moshe';
//     newDiv.appendChild(newP);
// }

// function remove(){
//     const newDiv=document.querySelector("#container");
//     const newP=document.createElement('p');
//     newP.innerHTML='moshe';
//     newDiv.appendChild(newP);
// }

let totalPrice = +0;
// const lettucePrice= +2;
// const tomatoPrice= +4;
// const cheesePrice= +8;
// const onionPrice= +3;
// const picklesPrice= +4;
// const meatPrice= +30;

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
  // ingredientToAdd.price=+ingredientPrice;
  ingredientFatherDiv.appendChild(ingredientToAdd);
  // totalPrice += +ingredientToAdd.price;
  totalPrice += +ingredientPrice;
  updateTotalPrice();
  updateMinusButton(ingredientFatherDiv, "minus-" + classNameOfNewTag);
  updateAmount(idOfFatherElement);

  // const buttonToEnable=document.getElementById("minus-"+classNameOfNewTag);
  // buttonToEnable.disabled=false;
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
    // const buttonToDisable=document.getElementById("minus-"+elementClassName);
    // if(ingredientFatherDiv.childElementCount===0){
    //     buttonToDisable.disabled=true;
    // }
    // else{
    //     buttonToDisable.disabled=false;
    // }
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
