//===================================data section==============================================================
let data = [
    {
		"id": 1,
		"name": "GUESS GOLD TONESTAINLESS STEEL",
		"price": "9999",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida lorem eget diam dapibus, id molestie dui ultricies. Nam pulvinar euismod dolor, id blandit nisl aliquam vitae. Cras eu leo ut enim blandit iaculis in ut leo. Vestibulum eleifend at sapien sed maximus. Mauris ex lacus",
		"img": "../assets/products-imgs/watch.jpg",
		"category": "watch"
		,"item":1
	},
	{
		"id": 2,
		"name": "SUNGLASSES ULTRAVIOLET PROTECTION",
		"price": "4000",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida lorem eget diam dapibus, id molestie dui ultricies. Nam pulvinar euismod dolor, id blandit nisl aliquam vitae. Cras eu leo ut enim blandit iaculis in ut leo. Vestibulum eleifend at sapien sed maximus. Mauris ex lacus",
		"img": "../assets/products-imgs/sunglasses0.jpg",
		"category": "glasses"
		,"item":1
	},
    {
		"id": 3,
		"name": "GUESS GOLD TONESTAINLESS STEEL",
		"price": "9999",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida lorem eget diam dapibus, id molestie dui ultricies. Nam pulvinar euismod dolor, id blandit nisl aliquam vitae. Cras eu leo ut enim blandit iaculis in ut leo. Vestibulum eleifend at sapien sed maximus. Mauris ex lacus",
		"img": "../assets/products-imgs/watch0.jpg",
		"category": "watch"
		,"item":1
	},
    {
		"id": 4,
		"name": "GUESS GOLD TONESTAINLESS STEEL",
		"price": "9999",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida lorem eget diam dapibus, id molestie dui ultricies. Nam pulvinar euismod dolor, id blandit nisl aliquam vitae. Cras eu leo ut enim blandit iaculis in ut leo. Vestibulum eleifend at sapien sed maximus. Mauris ex lacus",
		"img": "../assets/products-imgs/watch1.jpg",
		"category": "watch"
		,"item":1
	},
    {
		"id": 5,
		"name": "GUESS GOLD TONESTAINLESS STEEL",
		"price": "9999",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida lorem eget diam dapibus, id molestie dui ultricies. Nam pulvinar euismod dolor, id blandit nisl aliquam vitae. Cras eu leo ut enim blandit iaculis in ut leo. Vestibulum eleifend at sapien sed maximus. Mauris ex lacus",
		"img": "../assets/products-imgs/watch2.jpg",
		"category": "watch"
		,"item":1
	},
	{
		"id": 6,
		"name": "SUNGLASSES ULTRAVIOLET PROTECTION",
		"price": "4000",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida lorem eget diam dapibus, id molestie dui ultricies. Nam pulvinar euismod dolor, id blandit nisl aliquam vitae. Cras eu leo ut enim blandit iaculis in ut leo. Vestibulum eleifend at sapien sed maximus. Mauris ex lacus",
		"img": "../assets/products-imgs/sunglasses1.jpg",
		"category": "glasses"
		,"item":1
	}
]
let productsInCart =[]
let cart= JSON.parse(localStorage.getItem('cart'));

let f =[]
localStorage.setItem('products', JSON.stringify(data));
localStorage.setItem("favoriteProducts", JSON.stringify(f));
console.log(isAuth)
// let user = JSON.parse(localStorage.getItem("currentUser"))
// let isAuth = user ? true : false
// let logout = document.getElementById("logout-icon");
// let profile = document.getElementById("profile-icon")
// 	isAuth? logout.classList.remove("hide") : logout.classList.add("hide") ;
// 	isAuth? profile.classList.remove("hide") : profile.classList.add("hide") ;
// 	logout.onclick = function () {
// 		localStorage.removeItem("currentUser") 
// 		this.classList.add("hide")
// 	}
//=========================================================================================================================================

//rendering products on page load
function loadJSON() {

renderProducts()
let counter = document.getElementById("cart-counter")
counter.innerHTML=`${cart.length}`
 }

 //filtering products
function displayFilter(){
  let filtercheck = document.querySelector(".filterForm")
  filtercheck.style.display = "flex"
} 
function handleFilterClick(f){
	switch(f) {
		case "all":
			renderProducts()
		  break;
		case "watches":
			renderProducts("watch");
		  break;
		case "glasses":
			renderProducts("glasses")
		break;
		case "x" :
			let filtercheck = document.querySelector(".filterForm");
			filtercheck.style.display="none"
        break;   		
	 }
}


function renderProducts(cat) {
console.log(cat)

let data = JSON.parse(localStorage.getItem('products'));
if(!cat){
	data.map(el=>{
		createProductCard(el)
		 
	 })
} else  {
	let cards = document.querySelectorAll(".product-card")
	cards.forEach(i=> i.remove())
console.log(cards)
	let filtered = []
	data.map(el=>{
		if(cat == el.category){
			filtered.push(el)
		}else{
			filtered.push(el)
		}
	})
	console.log(filtered)
	filtered.map(x=>{
		createProductCard(x)
	})
}

}


function createProductCard(product){
let isInCart =  cart? cart.find(e=> e.id == product.id) : false;


let productContainer = document.getElementById('product-container');
let productCard = document.createElement("a")
    productCard.onclick = function (){
		localStorage.setItem("chosenProduct", JSON.stringify(product))
		productCard.setAttribute("href", "./product_details/products.html")
	}
    productCard.classList.add("product-card")
let userImg = document.createElement("img")
userImg.setAttribute("src", product.img);
let userName = document.createElement("p")
userName.innerHTML =`${product.name}`
let priceTag = document.createElement("p")
  priceTag.innerHTML =`${product.price}EGP`
let buttonsContainer = document.createElement("div")
buttonsContainer.classList.add("buttons-container")
let addToCartBtn = document.createElement("button");
  let buttonTxt = isInCart? "in cart" : "Add to Cart";
   addToCartBtn.innerHTML=`${buttonTxt}`
   addToCartBtn.classList.add("btn-blue")
   //add to cart functionality
   addToCartBtn.onclick = function(e){
	e.stopPropagation()
	if(isAuth){
	 addToCart(product)
     	addToCartBtn.innerHTML="in cart!"
		addToCartBtn.style.opacity = "0.5"
	} 
	else {
		window.location.href="./sign_log/sign_log.html"
	}
	e.stopPropagation()
   }

 let favBtn = document.createElement("button")
     favBtn.innerHTML='<i class="fa-regular fa-heart"></i>'
	 //favorite button functionality
	 favBtn.addEventListener("click", function(e){
		if(isAuth){
          
		favBtn.innerHTML='<i class="fa-solid fa-heart"></i>'
		addToFavs(product)
		}else{
			window.location.href="./sign_log/sign_log.html"
		}
		//e.stopPropagation();
	 })
	 buttonsContainer.append(addToCartBtn);
	 buttonsContainer.append(favBtn)


productCard.append(userImg);
productCard.append(userName)
productCard.append(priceTag);
productCard.append(buttonsContainer);
productContainer.append(productCard)

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
		updateCartCounter(cart)
	}

};

function addToFavs (favedProduct){
	let favs = JSON.parse(localStorage.getItem("favoriteProducts"));
    if(favs == null) favs = [];
    if(favs.find(e=> e.id == favedProduct.id)){
		console.log("aleady in favorites")
	}else {
		localStorage.setItem("fP", JSON.stringify(favedProduct));
	   favs.push(favedProduct);
		localStorage.setItem("favoriteProducts", JSON.stringify(favs));
		console.log(favs)
	}
}


//handle ccart click
function handleCartClick(){
	let cartIcon = document.querySelector("#cart-icon a") 
	if(isAuth){
		//change with cart path
		cartIcon.setAttribute("href", "../cart/cart.html")
	}else {
		cartIcon.setAttribute("href", "./sign_log/sign_log.html")
		console.log("not signed in yet")
	}
}

//update cart counter
function updateCartCounter() {
	let counter = document.getElementById("cart-counter")
	let items = Number(counter.html())+ 1;
	counter.innerHTML = `${items}`

}