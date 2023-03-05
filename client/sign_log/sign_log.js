const signUp = e => {
    let fname = document.getElementById('fname').value,
        email = document.getElementById('email').value,
        pwd = document.getElementById('pwd').value;
  
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
  
    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.fname.toLowerCase() == fname.toLowerCase() 
        );
  
    if(!exist){
        formData.push({ fname: fname, email:email, pwd:pwd});
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('fname').focus();
        alert("Account Created.\n\nPlease Sign In using the link below.");
    }
    else{
        alert("Ooopppssss... Duplicate found!!!\nYou have already sigjned up");
    }
    e.preventDefault();
  }
  
  function signIn(e) {
    let email = document.getElementById('email').valuem , pwd = document.getElementById('pwd').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);
    if(!exist){
        alert("Incorrect login credentials");
    }
    else{
      //index page
        location.href = "index.html";
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
  
  