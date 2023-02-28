//let path ="../data/products.json"

let productsInCart =[]
let cart= JSON.parse(localStorage.getItem('cart'));
//===================================data section==============================================================
let data = [
    {
		"id": 1,
		"name": "GUESS GOLD TONESTAINLESS STEEL",
		"price": "9999",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida lorem eget diam dapibus, id molestie dui ultricies. Nam pulvinar euismod dolor, id blandit nisl aliquam vitae. Cras eu leo ut enim blandit iaculis in ut leo. Vestibulum eleifend at sapien sed maximus. Mauris ex lacus",
		"img": "../assets/products-imgs/watch.jpg",
		"category": "watch"
	},
	{
		"id": 2,
		"name": "SUNGLASSES ULTRAVIOLET PROTECTION",
		"price": "4000",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida lorem eget diam dapibus, id molestie dui ultricies. Nam pulvinar euismod dolor, id blandit nisl aliquam vitae. Cras eu leo ut enim blandit iaculis in ut leo. Vestibulum eleifend at sapien sed maximus. Mauris ex lacus",
		"img": "../assets/products-imgs/sunglasses0.jpg",
		"category": "glasses"
	},
    {
		"id": 3,
		"name": "GUESS GOLD TONESTAINLESS STEEL",
		"price": "9999",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida lorem eget diam dapibus, id molestie dui ultricies. Nam pulvinar euismod dolor, id blandit nisl aliquam vitae. Cras eu leo ut enim blandit iaculis in ut leo. Vestibulum eleifend at sapien sed maximus. Mauris ex lacus",
		"img": "../assets/products-imgs/watch0.jpg",
		"category": "watch"
	},
    {
		"id": 4,
		"name": "GUESS GOLD TONESTAINLESS STEEL",
		"price": "9999",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida lorem eget diam dapibus, id molestie dui ultricies. Nam pulvinar euismod dolor, id blandit nisl aliquam vitae. Cras eu leo ut enim blandit iaculis in ut leo. Vestibulum eleifend at sapien sed maximus. Mauris ex lacus",
		"img": "../assets/products-imgs/watch1.jpg",
		"category": "watch"
	},
    {
		"id": 5,
		"name": "GUESS GOLD TONESTAINLESS STEEL",
		"price": "9999",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida lorem eget diam dapibus, id molestie dui ultricies. Nam pulvinar euismod dolor, id blandit nisl aliquam vitae. Cras eu leo ut enim blandit iaculis in ut leo. Vestibulum eleifend at sapien sed maximus. Mauris ex lacus",
		"img": "../assets/products-imgs/watch2.jpg",
		"category": "watch"
	},
	{
		"id": 6,
		"name": "SUNGLASSES ULTRAVIOLET PROTECTION",
		"price": "4000",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida lorem eget diam dapibus, id molestie dui ultricies. Nam pulvinar euismod dolor, id blandit nisl aliquam vitae. Cras eu leo ut enim blandit iaculis in ut leo. Vestibulum eleifend at sapien sed maximus. Mauris ex lacus",
		"img": "../assets/products-imgs/sunglasses1.jpg",
		"category": "glasses"
	}
]
localStorage.setItem('products', JSON.stringify(data));


//=========================================================================================================================================
let isAuth = true;
//rendering products on page load
function loadJSON() {
renderProducts()
 }

 //filtering products
function displayFilter(){
  let filtercheck = document.querySelector(".filterForm")
  filtercheck.style.display = "flex"
} 
function handleFilterClick(f){
	switch(f) {
		case "all":
			renderProducts(true)
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
  productCard.href = "#"
    productCard.onclick = function (){
		localStorage.setItem("chosenProduct", JSON.stringify(product))
	}
    productCard.classList.add("product-card")
let userImg = document.createElement("img")
userImg.setAttribute("src", product.img);
let userName = document.createElement("p")
userName.innerHTML =`${product.name}`
let priceTag = document.createElement("p")
  priceTag.innerHTML =`${product.price}EGP`
let addToCartBtn = document.createElement("button");
  let buttonTxt = isInCart? "in cart" : "Add to Cart";
   addToCartBtn.innerHTML=`${buttonTxt}`
   addToCartBtn.classList.add("btn-blue")
   addToCartBtn.onclick = function(){
	 addToCart(product)
     	addToCartBtn.innerHTML="in cart!"
		addToCartBtn.style.opacity = "0.5"
   }
productCard.append(userImg);
productCard.append(userName)
productCard.append(priceTag);
productCard.append(addToCartBtn);
productContainer.append(productCard)

}
// function loadJSON() {
// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = () => {
//     if(xhr.readyState === XMLHttpRequest.DONE) {
//         if (xhr.status === 200) {
//             let data = JSON.parse(xhr.responseText);
//             console.log(data)
//             localStorage.setItem('products', JSON.stringify(data));

//             renderProducts()
//         } else {
//             window.alert('Something went wrong, fetching!!');
//         }
//     }
// };
// xhr.open('GET', path, true);
// xhr.send();
// }

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
