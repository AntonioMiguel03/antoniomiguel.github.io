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
    var flagImage = document.getElementById("flagImage");  

    if (!flagImage) {
        console.error("Flag image not found.");
        return; // Sai da função se o elemento não for encontrado
    }

    flagImage.title = "Translate to English";

    // Verificar o idioma atual da bandeira e ajustar o valor da entrada de idioma
    var languageInput = document.getElementById("language");
    var selectField = document.querySelector("#google_translate_element select");

    if (!selectField) {
        console.error("Google Translate select element not found. Retrying...");
        waitForTranslateElement(changeLanguageByButtonClick); // Tenta novamente até o elemento estar disponível
        return;
    }

    if (flagImage.src.includes("uk_flag.jpg")) {
        flagImage.src = "img/flag_of_Brazil.png";
        languageInput.value = "en";
        flagImage.title = "Traduzir para o Português";
    } else {
        flagImage.src = "img/uk_flag.jpg";
        languageInput.value = "pt";
        changeLanguagePortuguese();
        return;
    }

    for (var i = 0; i < selectField.children.length; i++) {
        var option = selectField.children[i];
        if (option.value == languageInput.value) {
            selectField.selectedIndex = i;
            selectField.dispatchEvent(new Event('change'));
            break;
        }
    }
}

function changeLanguagePortuguese() {
    var languageInput = "pt";
    var selectField = document.querySelector("#google_translate_element select");

    if (!selectField) {
        console.error("Google Translate select element not found. Retrying...");
        waitForTranslateElement(changeLanguagePortuguese); // Tenta novamente até o elemento estar disponível
        return;
    }

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

// Função para aguardar até que o Google Translate carregue o elemento <select>
function waitForTranslateElement(callback) {
    var intervalId = setInterval(function () {
        var selectField = document.querySelector("#google_translate_element select");
        if (selectField) {
            clearInterval(intervalId); // Para de verificar quando o elemento estiver presente
            callback(); // Executa a função original
        }
    }, 500); // Verifica a cada 500ms
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
