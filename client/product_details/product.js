

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