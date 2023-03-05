let user = JSON.parse(localStorage.getItem("currentUser"))
let isAuth = user ? true : false
let logout = document.getElementById("logout-icon");
let profile = document.getElementById("profile-icon")
	isAuth? logout.classList.remove("hide") : logout.classList.add("hide") ;
	isAuth? profile.classList.remove("hide") : profile.classList.add("hide") ;
	logout.onclick = function () {
		localStorage.removeItem("currentUser") 
		localStorage.removeItem("cart")
		this.classList.add("hide")
	}

	


