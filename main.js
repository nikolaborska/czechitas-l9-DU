//UKOL 1
function move_img(str) {
	var step = 50;
	switch(str){
	case "down":
	var x = document.getElementById("i1").offsetTop;
	x = x + step;
	document.getElementById("i1").style.top = x + "px";
	break;
	
	case "up":
	var x = document.getElementById("i1").offsetTop;
	x = x - step;
	document.getElementById("i1").style.top = x + "px";
	break;
	
	case "left":
	var y = document.getElementById("i1").offsetLeft;
	y = y - step;
	document.getElementById("i1").style.left = y + "px";
	break;
	
	case "right":
	var y = document.getElementById("i1").offsetLeft;
	y = y + step;
	document.getElementById("i1").style.left = y + "px";
	break;
	}
	}
	
//PŘIHLÁŠENÍ UKOL 2

const user = {
	email: "bartolomej.rozumbrada@gmail.com",
	password: "vimzenicnevim",
	name: "Bartoloměj",
};

document.querySelector("#login-form").addEventListener("submit", (e) => {
	e.preventDefault()

	const emailUser = document.querySelector("#email-input");
	const passwordUser = document.querySelector("#password-input");
	const container = document.querySelector(".container");
	const status = document.querySelector("#status");

	if (
		emailUser.value === user.email &&
		passwordUser.value === user.password
	) {
		container.innerHTML = `<h1>Jsi přihlášený! : ${user.name}</h1>`
	} else {
		status.textContent = "Neplatné přihlašovací údaje.."
		passwordUser.value = ''
	}
});

//NEWSLETTER UKOL3
const formular = document.querySelector(".form")
const textovepolicko = document.querySelector(".input")

const odebirat = (event) => {
	event.preventDefault()
	const input = document.querySelector(".input")
	const email = input.value
	formular.textContent = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${email}.`
}

const kontrolaPolicka = (event) => {
	if (textovepolicko.value === '' || !textovepolicko.value.includes("@")) {
		textovepolicko.classList.add("alertInput")
	} else {
		textovepolicko.classList.remove("alertInput")
	}
}

formular.addEventListener("submit", odebirat)
textovepolicko.addEventListener("input", kontrolaPolicka)