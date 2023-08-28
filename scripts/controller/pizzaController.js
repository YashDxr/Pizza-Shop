import pizzaOperations from "../services/pizzaOperations.js";

async function printPizza() {
  const allPizzas = await pizzaOperations.getPizzas();
  const div = document.getElementById("pizza-output");
  console.log("ALl Pizza ", allPizzas);
  for (var pizza of allPizzas) {
    const card = createCard(pizza);
    div.appendChild(card);
  }
}
printPizza();

const printTotal = (pizzas) => 
  pizzas.reduce((sum, pizza) => sum + parseFloat(pizza.price), 0);

function printBasket(pizza) {
  const basketDiv = document.getElementById("basket");
  basketDiv.innerHTML = " ";
  const pizzaInCart = pizzaOperations.pizzas.filter(
    (pizza) => pizza.isAddedInCart
  );
  pizzaInCart.forEach((pizza) => {
    const pTag = printItem(pizza);
    basketDiv.appendChild(pTag);
  });
  const total = printTotal(pizzaInCart).toFixed(2);
  const totalPTag = document.createElement("p");
  totalPTag.innerText = `Total is: ${total}`;
  basketDiv.append(totalPTag);

  //GST VALUE
  const gst = document.createElement('p');
  const gstValue = total*(18/100);
  gst.innerText = `GST(18%): ${gstValue.toFixed(2)}`;
  basketDiv.append(gst);

  //GRAND TOTAL
  const grandTotal = printTotal(pizzaInCart)+gstValue;
  const grandtotalPTag = document.createElement("p");
  grandtotalPTag.innerText = `Grand Total is: ${grandTotal.toFixed(2)}`;
  basketDiv.append(grandtotalPTag);
}

function printItem(pizza) {
  const pTag = document.createElement("p");
  pTag.innerText = `Pizza Name: ${pizza.name} Price: ${pizza.price}`;
  return pTag;
}

function addToCart(pizza) {
  const currentButton = this;
  const pizzaId = currentButton.getAttribute("pizza-id");
  pizzaOperations.searchPizza(pizzaId);
  console.log("Pizza", pizzaId);
  printBasket(pizza);
}

function createCard(pizza) {
  /*
<div class="col-4">

                </div>
*/

  //Column
  const colDiv = document.createElement("div");
  colDiv.className = "col-4";

  /*
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
*/

  //Main div for CARD
  const cardDiv = document.createElement("div");
  cardDiv.className = "card my-2";
  cardDiv.style = { width: "18rem" };
  colDiv.appendChild(cardDiv);

  //img for maindiv
  const img = document.createElement("img");
  img.src = pizza.url;
  img.className = "card-img-top";
  cardDiv.appendChild(img);
  //childdiv for maindiv
  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  cardDiv.appendChild(cardBody);

  //child for childdiv
  const h5 = document.createElement("h5");
  h5.className = "card-title";
  h5.innerText = pizza.name;
  cardBody.appendChild(h5);
  //child for childdiv
  const pTag = document.createElement("p");
  pTag.className = "card-text";
  pTag.innerText = pizza.desc;
  cardBody.appendChild(pTag);
  //child for childdiv
  const button = document.createElement("button");
  button.className = "btn btn-primary";
  button.setAttribute("pizza-id", pizza.id);
  button.innerText = "Add to cart";
  button.addEventListener("click", addToCart);
  cardBody.appendChild(button);

  return colDiv;
}
