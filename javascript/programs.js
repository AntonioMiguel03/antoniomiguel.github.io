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
flagImage.title = "Translate to English";

function changeLanguageByButtonClick() {
    var languageInput = document.getElementById("language").value;
    var flagImage = document.getElementById("flagImage");

    if (flagImage.src.includes("uk_flag.jpg")) {
        // Mudar para o idioma português
        flagImage.src = "img/flag_of_Brazil.png";
        languageInput = "pt"; // Muda para português

        // Muda o idioma para português usando a API do Google Translate
        setLanguage(languageInput);
        flagImage.title = "Traduzir para o Inglês";
    } else {
        // Mudar para o idioma inglês
        flagImage.src = "img/uk_flag.jpg";
        languageInput = "en"; // Muda para inglês

        // Muda o idioma para inglês usando a API do Google Translate
        setLanguage(languageInput);
        flagImage.title = "Traduzir para o Português";
    }

    // Atualiza o valor do input oculto
    document.getElementById("language").value = languageInput;
}

// Função para definir o idioma na API do Google Translate
function setLanguage(language) {
    var googleTranslateElement = new google.translate.TranslateElement({ pageLanguage: 'pt' }, 'google_translate_element');
    var selectField = document.createElement("select");
    selectField.style.display = "none"; // Oculta o select
    selectField.value = language; // Define o valor do idioma

    console.log(language);
    console.log(selectField.value);

    var option = document.createElement("option");
    option.value = language;
    selectField.appendChild(option);
  
    // Adiciona o select ao DOM (para o Google Translate funcionar)
    document.getElementById("google_translate_element").appendChild(selectField);
    
    // Dispara o evento de mudança
    selectField.dispatchEvent(new Event('change'));
    
    // Remove o select após a mudança para não deixar no DOM
    selectField.remove();
}
