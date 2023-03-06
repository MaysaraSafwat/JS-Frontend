

//image slider
var ProductImg = document.getElementById("ProductImg");
        var SmallImg= document.getElementsByClassName("small-img");

            SmallImg[0].onclick = function()
            {
                ProductImg.src = SmallImg[0].src;
            }
            SmallImg[1].onclick = function()
            {
                ProductImg.src = SmallImg[1].src;
            }
            SmallImg[2].onclick = function()
            {
                ProductImg.src = SmallImg[2].src;
            }
            SmallImg[3].onclick = function()
            {
                ProductImg.src = SmallImg[3].src;
            }
/*********************************************************************************************************************/

let product = JSON.parse(localStorage.getItem('chosenProduct'))
ProductImg.setAttribute('src',`../${product.img}`);
SmallImg[0].setAttribute('src',`../${product.img}`);
SmallImg[1].setAttribute('src',`../${product.img}`);
SmallImg[2].setAttribute('src',`../${product.img}`);
SmallImg[3].setAttribute('src',`../${product.img}`);
var ProductTitle = document.getElementById("title");
var ProductPrice = document.getElementById("price");
var ProductDes = document.getElementById("demo");
ProductTitle.innerHTML = `${product.name}`;
ProductPrice.innerHTML = "$"+`${product.price}`;
ProductDes.innerHTML = `${product.description}`;

let cart = JSON.parse(localStorage.getItem("cart"))
let items =  cart.length;
let padge = document.getElementById("cart-counter");
padge.innerHTML = `${items}`
/*********************************************************************************************************************/
//descrition(+,-)
function appears(){
    var tex = document.getElementById("demo");
    var p = document.getElementById("plus");
    if(tex.style.display === "none"){
        tex.style.display = "block";
        p.innerHTML ="-";

    }
    else{
        tex.style.display = "none";
        p.innerHTML ="+";
    }
}
/*********************************************************************************************************************/
//wishlist
function wish(){
    var wish = document.getElementById("wishList");
    wish.innerHTML='<i class="fa-solid fa-heart"></i>'
    
}
/*********************************************************************************************************************/
//popup1
var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

//popup2
    var modal2 = document.getElementById("myModa2");
    var btn2 = document.getElementById("myBtn2");
    var span2 = document.getElementsByClassName("close2")[0];
    btn2.onclick = function() {
        modal2.style.display = "block";
    }
    span2.onclick = function() {
        modal2.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal2) {
            modal2.style.display = "none";
        }
    }
let addTocartBtn =  document.getElementById("addtocart")
   addTocartBtn.addEventListener("click", ()=> {
    addToCart()
     addTocartBtn.innerHTML="Added to cart!"
   })
    function addToCart() {
        var cart = JSON.parse(localStorage.getItem("cart"));
        if(cart == null) cart = [];
        //check if item is aleady in carta nd if not add it
        if(cart.find(e=> e.id == product.id)){
            console.log("aleady in cart")
        }else {
            localStorage.setItem("cartProduct", JSON.stringify(product));
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
            console.log(cart)
        }
    
    };
    let favBtn = document.getElementById("favbtn")
      favBtn.addEventListener("click", ()=>{
        addToFavs()
        favBtn.innerHTML = '<i class="fa-solid fa-heart"></i>'
      })
    function addToFavs (){
        let favs = JSON.parse(localStorage.getItem("favoriteProducts"));
        if(favs == null) favs = [];
        if(favs.find(e=> e.id == product.id)){
            console.log("aleady in favorites")
        }else {
            localStorage.setItem("fP", JSON.stringify(product));
           favs.push(product);
            localStorage.setItem("favoriteProducts", JSON.stringify(favs));
            console.log(favs)
        }
    }
    