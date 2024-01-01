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

/*debugger;*/
function googleTranslateElementInit() {	
  new google.translate.TranslateElement({ pageLanguage: "pt" }, 'google_translate_element');
}

var flagImage = document.getElementById("flagImage");  
flagImage.title = "Translate to English";

function changeLanguageByButtonClick() {
 /*debugger; F10 vai para frente, F8 vai para o final do codigo*/
  var languageInput = document.getElementById("language").value;
  var selectField = document.querySelector("#google_translate_element select");
  var flagImage = document.getElementById("flagImage");  
  
  flagImage.title = "Translate to English";

  if (flagImage) {
    if (flagImage.src.includes("uk_flag.jpg")) {
      // Alterar para bandeira do Brasil e idioma para "en"
      flagImage.src = "img/flag_of_Brazil.png";
      languageInput = "en";	  
	  
	  flagImage.title = "Traduzir para o Português";
    } else {
      // Alterar para bandeira do Reino Unido e idioma para "pt"
      flagImage.src = "img/uk_flag.jpg";
      languageInput = "pt";
	  /*location.reload();*/
	  
	  changeLanguagePortuguese();
	  return;
    }

    for (var i = 0; i < selectField.children.length; i++) {
      var option = selectField.children[i];
      // Encontrar o idioma desejado e alterar o idioma anterior do campo de seleção oculto
      if (option.value == languageInput) {
        selectField.selectedIndex = i;
		
        // Acionar o evento 'change' posteriormente para traduzir usando a biblioteca do Google
        selectField.dispatchEvent(new Event('change'));		
        break;		
      }
    }
  }
}

function changeLanguagePortuguese() {	
	var languageInput = "pt";
	var selectField = document.querySelector("#google_translate_element select");

	for (var i = 0; i < selectField.children.length; i++) {
	  var option = selectField.children[i];
	  // Encontrar o idioma desejado e alterar o idioma anterior do campo de seleção oculto
	  if (option.value == languageInput) {
		selectField.selectedIndex = i;
		
		// Acionar o evento 'change' posteriormente para traduzir usando a biblioteca do Google
		selectField.dispatchEvent(new Event('change'));		
		location.reload();
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
  // Mova o usuário para o topo da página
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

  // Remova o fragmento da URL
  if (history.replaceState) {
    // Use history.replaceState para modificar a URL sem adicionar uma nova entrada ao histórico
    history.replaceState(null, document.title, window.location.pathname + window.location.search);
  } else {
    // Como fallback, modifique a propriedade hash (isso adicionará uma nova entrada ao histórico)
    window.location.hash = '';
  }
}
