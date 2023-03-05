const signUp = e => {
    let fname = document.getElementById('signup-fname').value;
    let email = document.getElementById('signup-email').value;
    let pwd = document.getElementById('signup-pwd').value;
    let number = document.getElementById('signup-number').value;
  
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
  
    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.fname.toLowerCase() == fname.toLowerCase() 
        );
  
    if(!exist){
      console.log(fname, email, pwd);
        formData.push({ fname: fname, email:email, pwd:pwd, number:number});
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('fname').focus();
        alert("Account Created.\n\nPlease Sign In using the link below.");
    }
    else{
        alert("Ooopppssss... Duplicate found!!!\nYou have already signed up");
    }
    e.preventDefault();
  }
  
  function signIn(e) {
    let email = document.getElementById('email').value , pwd = document.getElementById('pwd').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let currentlyLoggedIn = []
    let signeduser  = formData.filter(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd );
    if(!signeduser){
        alert("Incorrect login credentials");
    }
    else{
      console.log(signeduser)
       currentlyLoggedIn.push(signeduser)
       localStorage.setItem("currentUser", JSON.stringify(currentlyLoggedIn))
       history.go(-2)
    }
    e.preventDefault();
  }
  
  // for the movement 
  var $loginMsg = $('.loginMsg'),
    $login = $('.login'),
    $signupMsg = $('.signupMsg'),
    $signup = $('.signup'),
    $frontbox = $('.frontbox');
  
  $('#switch1').on('click', function() {
    $loginMsg.toggleClass("visibility");
    $frontbox.addClass("moving");
    $signupMsg.toggleClass("visibility");
  
    $signup.toggleClass('hidden');
    $login.toggleClass('hidden');
  })
  
  $('#switch2').on('click', function() {
    $loginMsg.toggleClass("visibility");
    $frontbox.removeClass("moving");
    $signupMsg.toggleClass("visibility");
  
    $signup.toggleClass('hidden');
    $login.toggleClass('hidden');
  })
  
  setTimeout(function(){
    $('#switch1').click()
  },1000)
  
  setTimeout(function(){
    $('#switch2').click()
  },3000)
  
  