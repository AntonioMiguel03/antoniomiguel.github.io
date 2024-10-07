// Folha do javascript
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close() {
    mainMenu.style.top = '-100%';
}

function googleTranslateElementInit() {	
    new google.translate.TranslateElement({ pageLanguage: "pt" }, 'google_translate_element');
}

var flagImage = document.getElementById("flagImage");  
flagImage.title = "Traduzir para o Inglês";

let currentLanguage = 'pt'; // Estado inicial
let clickCount = 0; // Contador de cliques

function changeLanguageByButtonClick() {
    clickCount++; // Incrementa o contador a cada clique
    var selectField = document.querySelector("#google_translate_element select");
    
    // Reseta a lógica após o terceiro clique
    if (clickCount === 3) {
        resetToggle(); // Chama a função de reset
        return; // Para a execução da função
    }

    if (currentLanguage === 'pt') {
        // Muda para inglês
        flagImage.src = "img/uk_flag.jpg";
        currentLanguage = 'en'; // Atualiza o estado
        flagImage.title = "Traduzir para o Português"; // Atualiza o título
    } else {
        // Muda para português
        flagImage.src = "img/flag_of_Brazil.png";
        currentLanguage = 'pt'; // Atualiza o estado
        flagImage.title = "Traduzir para o Inglês"; // Atualiza o título
    }

    // Define o idioma no campo de seleção oculto
    for (var i = 0; i < selectField.children.length; i++) {
        var option = selectField.children[i];
        if (option.value === currentLanguage) {
            selectField.selectedIndex = i;
            selectField.dispatchEvent(new Event('change')); // Aciona o evento 'change'
            break;
        }
    }
}

// Função para resetar a lógica do botão
function resetToggle() {
    clickCount = 0; // Reseta o contador de cliques
    currentLanguage = 'pt'; // Reseta o estado do idioma
    flagImage.src = "img/flag_of_Brazil.png"; // Reseta a imagem para a bandeira do Brasil
    flagImage.title = "Traduzir para o Inglês"; // Reseta o título

    // Reseta o campo de seleção oculto para o português
    var selectField = document.querySelector("#google_translate_element select");
    for (var i = 0; i < selectField.children.length; i++) {
        var option = selectField.children[i];
        if (option.value === currentLanguage) {
            selectField.selectedIndex = i;
            selectField.dispatchEvent(new Event('change')); // Aciona o evento 'change'
            break;
        }
    }
}

// A lógica para alternar para o português continua a mesma
function changeLanguagePortuguese() {	
	var languageInput = "pt";
	var selectField = document.querySelector("#google_translate_element select");

	for (var i = 0; i < selectField.children.length; i++) {
	  var option = selectField.children[i];
	  if (option.value == languageInput) {
		selectField.selectedIndex = i;
		selectField.dispatchEvent(new Event('change'));		
		location.reload();
		break;		
	  }
	}
}

// Botão de voltar ao Menu
var mybutton = document.getElementById("myBtn");

// Quando o usuário rolar para baixo 20px a partir do topo do documento, mostre o botão
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Quando o usuário clica no botão, rolar para o topo do documento
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

  // Remove o fragmento da URL
  if (history.replaceState) {
    history.replaceState(null, document.title, window.location.pathname + window.location.search);
  } else {
    window.location.hash = '';
  }
}
