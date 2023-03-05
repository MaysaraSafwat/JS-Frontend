let user = JSON.parse(localStorage.getItem("currentUser")) || []
console.log(user[0][0])
let favedProducts =  JSON.parse(localStorage.getItem("favoriteProducts"));
console.log(favedProducts);

let username = document.getElementById("card-name")
let useremail = document.getElementById ("card-email");
let usernumber  = document.getElementById("card-number")

if(user.length !=0) {
	username.innerHTML = `${user[0][0].fname}`
	useremail .innerHTML= `<i class="fa-solid fa-envelope"></i>   ${user[0][0].email}`
	usernumber.innerHTML = `<i class="fa-solid fa-phone"></i>  ${user[0][0].number}`
}

function renderFavorites(){
    if(favedProducts){
        favedProducts.map(e=>{
            createProductCard(e)
        })
    }else {
        console.log("No Favorites added ")
    }
}  


function createProductCard(product){
    if(user){
let productContainer = document.getElementById('favs-container');
let productCard = document.createElement("a")
    productCard.onclick = function (){
		localStorage.setItem("chosenProduct", JSON.stringify(product))
		productCard.setAttribute("href", "./product_details/products.html")
	}
    productCard.classList.add("fav-card")
let userImg = document.createElement("img")
userImg.setAttribute("src", `../${product.img}`);
let userName = document.createElement("p")
userName.innerHTML =`${product.name}`
let priceTag = document.createElement("p")
  priceTag.innerHTML =`${product.price}EGP`
let buttonsContainer = document.createElement("div")
buttonsContainer.classList.add("fav-buttons-container")
let addToCartBtn = document.createElement("button");
  let buttonTxt = "Add to Cart";
   addToCartBtn.innerHTML=`${buttonTxt}`
   addToCartBtn.classList.add("btn-blue")
   //add to cart functionality
   addToCartBtn.onclick = function(e){
	if(isAuth){
	 addToCart(product)
     	addToCartBtn.innerHTML="in cart!"
		addToCartBtn.style.opacity = "0.5"
	} 
	else {
		console.log("goto login")
	}
	e.stopPropagation()
   }

 let favBtn = document.createElement("button")
     favBtn.innerHTML='remove from favs'
	 //favorite button functionality
	 favBtn.addEventListener("click", function(e){
		if(isAuth){
          
		favBtn.innerHTML='<i class="fa-solid fa-heart"></i>'
		removeFromFavs(product)
		}else{
			console.log("goto login")
		}
		e.stopPropagation();
	 })
	 buttonsContainer.append(addToCartBtn);
	 buttonsContainer.append(favBtn)


productCard.append(userImg);
productCard.append(userName)
productCard.append(priceTag);
productCard.append(buttonsContainer);
productContainer.append(productCard)

}
}


function addToCart(newCartProduct) {
	//get cart
    var cart = JSON.parse(localStorage.getItem("cart"));
    if(cart == null) cart = [];
	//check if item is aleady in carta nd if not add it
    if(cart.find(e=> e.id == newCartProduct.id)){
		console.log("aleady in cart")
	}else {
		localStorage.setItem("cartProduct", JSON.stringify(newCartProduct));
		cart.push(newCartProduct);
		localStorage.setItem("cart", JSON.stringify(cart));
		console.log(cart)
	}

};