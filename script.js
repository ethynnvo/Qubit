const toggleBurger = () => {
  let burger = document.getElementById("navBurger");
  let menu = document.getElementById("navMenu");
  burger.classList.toggle("is-active");
  menu.classList.toggle("is-active");
}; 

window.onscroll = () => {scrollFunction();};

function scrollFunction () {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("myBtn").style.display = "block";
	} else {
		document.getElementById("myBtn").style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}