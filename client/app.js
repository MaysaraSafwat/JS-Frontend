let path ="../data/products.json"

function loadJSON() {
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
    if(xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            console.log(data)
            localStorage.setItem('products', JSON.stringify(data));

            renderProducts()
        } else {
            window.alert('Something went wrong, fetching!!');
        }
    }
};
xhr.open('GET', path, true);
xhr.send();
}


// function renderProducts(cat) {
// let data = JSON.parse(localStorage.getItem('products'));
// data.map(el=>{
//     createProductCard(el)
// })


// }

// function createProductCard(product){
// let productContainer = document.getElementById('product-container');
// let productCard = document.createElement("div")

// let userImg = document.createElement("img")
// userImg.setAttribute("src", product.img);
// let userName = document.createElement("p")
// userName.innerHTML =`${product.name}`
// productCard.append(userImg);
// productCard.append(userName)
// productContainer.append(productCard)

// }
