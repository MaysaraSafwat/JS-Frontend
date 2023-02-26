//let path ="../data/products.json"

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
let parsedData = JSON.parse(data);
localStorage.setItem('products', JSON.stringify(parsedData));

function loadJSON() {
  renderProducts()
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


function renderProducts(cat) {
let data = JSON.parse(localStorage.getItem('products'));
data.map(el=>{
    createProductCard(el)
})


}

function createProductCard(product){
let productContainer = document.getElementById('product-container');
let productCard = document.createElement("div")
    productCard.classList.add("product-card")
let userImg = document.createElement("img")
userImg.setAttribute("src", product.img);
let userName = document.createElement("p")
userName.innerHTML =`${product.name}`
let priceTag = document.createElement("p")
  priceTag.innerHTML =`${product.price}EGP`
let addToCartBtn = document.createElement("button");
   addToCartBtn.innerHTML="Add to Cart"
   addToCartBtn.classList.add("btn-blue")
productCard.append(userImg);
productCard.append(userName)
productCard.append(priceTag);
productCard.append(addToCartBtn);
productContainer.append(productCard)

}
