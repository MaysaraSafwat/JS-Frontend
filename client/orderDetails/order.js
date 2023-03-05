var cardName = document.getElementById("cardholder-name");
var cardValid = document.getElementById("card-valid");
var nameErr = document.getElementById("name-err");
var cardNumb = document.getElementById("cardnumber");
var numbErr = document.getElementById("numb-err");
var cvv = document.getElementById("cvv");
var cvvErr = document.getElementById("cvv-err");

cardValid.addEventListener('submit',JSalert,false);

 cardName.addEventListener('input',function(e){
            
            var namePattern = /^[A-Za-z\s\- A-Za-z]{6,30}$/
            var currentValue = e.target.value;
            console.log(namePattern.test(currentValue));
            var valid = namePattern.test(currentValue);
             if(!valid){
                nameErr.style.display='block';
                nameErr.style.color='red';
             }else{
                nameErr.style.display='none';
             }
 })

 cardNumb.addEventListener('input',function(e){
            var numbPattern =/^[0-9\s\- 0-9]{19}$/

            var currentValue = e.target.value;
            console.log(numbPattern.test(currentValue));
            var valid = numbPattern.test(currentValue);
            if(!valid){
                numbErr.style.display='block';
                numbErr.style.color='red';
            }else{
                numbErr.style.display='none';
            }
 })
cvv.addEventListener('input',function(e){
    
    var cvvPattern =/^[0-9]{3}$/

    var currentValue = e.target.value;
    console.log(cvvPattern.test(currentValue));
    var valid = cvvPattern.test(currentValue);
    if(!valid){
        cvvErr.style.display='block';
        cvvErr.style.color='red';
    }else{
        cvvErr.style.display='none';
    }
})


function JSalert(e){
    e.preventDefault();
    swal("Congrats!", " Your Order is onway!", "success");
       
}




//----------------------Local Storage cart part ----------------------------

const total = document.querySelector(".total");
const productCard = document.querySelector(".product-card");
console.log('product',productCard);
console.log('total',total);

let basket = JSON.parse(localStorage.getItem("cart"))||[] ;
console.log(basket)

//loop in basket 
let totalPrice =0;
basket.forEach(element => totalPrice+=Number(element.price));

console.log("total price",totalPrice);
console.log(basket[1].item);
for(let i=0 ; i<=basket.length;i++){
    productCard.innerHTML+=`
        <div class="card">
        <div class="img-box">
            <img src="../${basket[i].img}" alt="Watch" width="80px" class="product-img">
        </div>
        <div class="detail">
            <h4 class="product-name">${basket[i].name}</h4>
            <div class="wrapper">
                <div class="product-qty">
                    <p>Quantity: <span id="quantity">${basket[i].item}</span></p>                                            
                </div>

                <div class="price">
                    <p>Price:  $<span id="price">${basket[i].price}</span></p> 
                </div>
            </div>
        </div>
        </div>
`;
total.innerHTML=`<span>Total</span> <span>$ <span id="total">${totalPrice}</span></span>`;

}









