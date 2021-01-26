Swal.mixin({
  timer:6000,
  timerProgressBar: true,
  background: '#eee',
  backdrop: `
    rgba(0,0,123,0.4)
  `
}).bindClickHandler('data-swal-toast-template');


Swal.fire({
  icon: 'success',
  title: '¡ BIENVENIDO !',
  showConfirmButton: false,
  timer: 1000,
  showConfirmButton: false,
  width: 370,
  color:'white',
  padding: '3em',
  background: '#fff',
}); 

var text = document.getElementById("first");
var body = document.getElementById("body");
var nav = document.getElementById("navbar");

function cambiaFondo(x){
  //cambiar fondo de la pagina
  var body = document.getElementById("body").style.backgroundColor = x.value;
  
  //cambiar todo el texto
  if(x.value === "rgba(220,220,220,1)"){
   body = document.getElementById("body").style.color = "black";
  } else {
    body = document.getElementById("body").style.color = "white";
  }
  
if(x.value === "rgba(0,0,0, 0.9)"){
   text = document.getElementById("first").style.color = "white";
 } else if(x.value === "blue"){
  text = document.getElementById("first").style.color = ("white"); 
 } else {
  text = document.getElementById("first").style.color = "#00bf";
 }
  
  //Cambiar fondo del nav
  
  if(x.value === "green"){
   nav = document.getElementById("navbar").style.backgroundColor = "rgb(0,29,3)";
 } else if(x.value === "blue"){
   nav = document.getElementById("navbar").style.backgroundColor = "rgb(0,2,53)";
 } else if(x.value === "rgba(220,220,220,1)"){
    nav = document.getElementById("navbar").style.backgroundColor = "white";
 } else if(x.value === "red"){
   nav = document.getElementById("navbar").style.backgroundColor = "rgb(32,0,0)";
 } else if(x.value === "rgba(235,85,215, 0.9)"){
   nav = document.getElementById("navbar").style.backgroundColor = "rgb(32,0,29)";
 } else if(x.value === "rgba(37,206,215, 0.9)"){
   nav = document.getElementById("navbar").style.backgroundColor = "rgb(0,30,30)";
 } else if(x.value === "rgba(198,180,60,1)"){
   nav = document.getElementById("navbar").style.backgroundColor = "rgb(30,40,0)";
 } else {
   nav = document.getElementById("navbar").style.backgroundColor = "black";
 }
}

//JS de "Trabajos por hacer"

var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li); 
	input.value = "";

	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);


	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("Borrar"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);

	function deleteListItem(){
		li.classList.add("delete");
	}
}


function addListAfterClick(){
	if (inputLength() > 0) { 
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { 
		createListElement();
	} 
}


enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

