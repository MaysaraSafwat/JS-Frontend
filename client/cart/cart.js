let label = document.getElementById("label");
let ShoppingCart = document.getElementById("shopping-cart");
let basket = JSON.parse(localStorage.getItem("cart"))||[] ;
//console.log(basket)
function calculation() {
let cartIcon = document.getElementById("cartAmount");
cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
 
}
calculation();
// =====================================================GENERTA CART===========================================

function generateCartItems() {
  ShoppingCart.innerHTML=" <tr><th>number</th><th>name</th><th>price</th><th>image</th><th>catgory</th><th>quantity</th><th>total price</th><th>delete</th></tr>"
  if (basket.length !== 0) {
      return (ShoppingCart.innerHTML+= basket
      .map((x) => {
          let { id,item} = x;
          let search = data.find((x) => x.id === id) || [];
          let {  name,price,description,img,category} = search;
         return `
  <tr>
      <td> <p>${search.id}</p></td>
      <td> <p>${search.name}</p></td>
      <td> <p class="cart-item-price">$ ${search.price}</p></td>             
      <td>  <img width="100px" src=${img} /></td>
      <td> <p>${search.category}</p></td>
      <td class="buttons">
           <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
           <span id=${id} class="quantity">${item}</span>
           <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
      </td>
       <td>  total item price: $ ${item * search.price}</td>
       <td>  <i onclick="removeItem(${id})" class="bi bi-trash3 delete "></i></td>  
 </tr>
     
      `;
      })
      .join(""));
      //========================================GO TO HOME========================
  } else {
    ShoppingCart.innerHTML = ``;
    label.innerHTML = `
       <h2>Cart is Empty</h2>
       <a href="../index.html">
       <button class="HomeBtn">Back to home</button>
       </a>
    `;
  }
}

generateCartItems();


// ===============================================INCREMENT PRODUCT=======================

function increment(id) {
  //console.log(id)
  let search = basket.find((x) => x.id === id);
  if (search === undefined) {
    bask.push({
      id: id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  generateCartItems();
  update(id);
  localStorage.setItem("cart", JSON.stringify(basket));
}


//============================================DECREMENT PRODUCT====================================

function decrement(id) {
  let search = basket.find((x) => x.id === id);
//console.log(id)
  if (search === undefined)
    return;
  else if (search.item === 0)
    return;
  else {
    search.item -= 1;
    }
  update(id);
 // console.log(search.item)
  basket = basket.filter((x) => x.item >0);
 // console.log(basket)
  generateCartItems();
  localStorage.setItem("cart", JSON.stringify(basket));
}

//==========================================UPDATE ITEM========================================

function update(id) {
  // console.log(id);
  let search = basket.find((x) => x.id === id);
 
  document.getElementById(id).innerHTML = search.item;
  calculation();
  TotalAmount();
}

//=============================================DELETE DETECT ITEM===============================

function removeItem(id) {
  basket = basket.filter(function (x) {
    return x.id !== id;
  });
  generateCartItems();
  TotalAmount();
  calculation()
  localStorage.setItem("cart", JSON.stringify(basket));
}

//===========================================REMOVE ALL PRODUCT====================================

function clearCart() {
  basket = [];
  generateCartItems();
  localStorage.setItem("cart", JSON.stringify(basket));
}

//======================================TOTAL CART==============================================
function TotalAmount() {
  if (basket.length !== 0) {
    let amount = basket
      .map(function (x) {
        let { item, id } = x;
        let search = data.find((y) => y.id === id) || [];

        return item * search.price;
      })
      .reduce((x, y) => x + y, 0);

    // console.log(amount);
    label.innerHTML = ` 
    <h2> Cart Total</h2>
    <div >
    <h4>Total Bill  :  ${amount}</h4>
    </div>
    <div class="button_cart" >
    <button  class="gotohome"> <a href="../index.html"<i class="bi bi-arrow-left arrow"> continue shopping</i></a> </button>
    <button   class="checkout"> proceed Checkout</button>
     <div>
    `;
  } else
    return;
}

TotalAmount();
