//folha do javascript

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: "pt"}, 'google_translate_element');
}	


function changeLanguageByButtonClick() {
  var language = document.getElementById("language").value;
  var selectField = document.querySelector("#google_translate_element select");
  for(var i=0; i < selectField.children.length; i++){
	var option = selectField.children[i];
	// find desired langauge and change the former language of the hidden selection-field 
	if(option.value==language){
	   selectField.selectedIndex = i;
	   // trigger change event afterwards to make google-lib translate this side
	   selectField.dispatchEvent(new Event('change'));
	   break;
	}
  }
}



//Botao de voltar ao Menu
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}