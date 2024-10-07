document.addEventListener("DOMContentLoaded", function() {
    const mainMenu = document.querySelector('.mainMenu');
    const closeMenu = document.querySelector('.closeMenu');
    const openMenu = document.querySelector('.openMenu');
    const flagImage = document.getElementById("flagImage");
    const languageInput = document.getElementById("language");
    
    // Adicione o event listener após o DOM estar carregado
    const translateButton = document.getElementById("legendaIdioma");
    translateButton.addEventListener('click', changeLanguageByButtonClick);

    openMenu.addEventListener('click', show);
    closeMenu.addEventListener('click', close);

    function show() {
        mainMenu.style.display = 'flex';
        mainMenu.style.top = '0';
    }

    function close() {
        mainMenu.style.top = '-100%';
    }

    if (flagImage) {
        flagImage.title = "Translate to English";
    }

    function changeLanguageByButtonClick() {
        console.log("Clicou"); // Informa que o botão foi clicado

        if (!flagImage) {
            console.error("Flag image not found.");
            return; // Sai da função se o elemento não for encontrado
        }

        // Verificar se a bandeira atual é a do Reino Unido
        if (flagImage.src.includes("uk_flag.jpg")) {
            flagImage.src = "img/flag_of_Brazil.png"; // Muda para a bandeira do Brasil
            languageInput.value = "en"; // Atualiza o valor do input
            flagImage.title = "Traduzir para o Português"; // Atualiza o título
            changeGoogleLanguage("en"); // Muda o idioma no Google Translate
        } else {
            flagImage.src = "img/uk_flag.jpg"; // Muda para a bandeira do Reino Unido
            languageInput.value = "pt"; // Atualiza o valor do input
            flagImage.title = "Translate to English"; // Atualiza o título
            changeGoogleLanguage("pt"); // Muda o idioma no Google Translate
        }
    }

    function changeGoogleLanguage(language) {
        // Aqui nós tentamos encontrar o elemento de seleção do Google Translate
        var selectField = document.querySelector("#google_translate_element select");
        if (!selectField) {
            console.error("Google Translate select element not found. Retrying...");
            waitForTranslateElement(() => changeGoogleLanguage(language)); // Chama novamente após encontrar o elemento
            return;
        }

        selectField.value = language; // Altera o valor do select
        selectField.dispatchEvent(new Event('change')); // Dispara o evento de mudança
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

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        if (history.replaceState) {
            history.replaceState(null, document.title, window.location.pathname + window.location.search);
        } else {
            window.location.hash = '';
        }
    }
});
