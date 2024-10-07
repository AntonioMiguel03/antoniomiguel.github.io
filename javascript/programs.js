document.addEventListener("DOMContentLoaded", function() {
    const mainMenu = document.querySelector('.mainMenu');
    const closeMenu = document.querySelector('.closeMenu');
    const openMenu = document.querySelector('.openMenu');

    openMenu.addEventListener('click', show);
    closeMenu.addEventListener('click', close);

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
        waitForTranslateElement();
    }

    var flagImage = document.getElementById("flagImage");  

    if (flagImage) {
        flagImage.title = "Translate to English";
    } else {
        console.error("Flag image not found.");
    }

    function changeLanguageByButtonClick() {
        console.log("Clicou"); // Informa que o botão foi clicado

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

        // Muda o idioma usando o selectField
        changeLanguage(languageInput.value, selectField);
    }

    function changeLanguagePortuguese() {
        console.log("Clicou para mudar para português"); // Informa que o botão foi clicado para mudar para o português
        var languageInput = "pt";
        var selectField = document.querySelector("#google_translate_element select");

        if (!selectField) {
            console.error("Google Translate select element not found. Retrying...");
            return;
        }

        changeLanguage(languageInput, selectField);
    }

    function changeLanguage(language, selectField) {
        for (var i = 0; i < selectField.children.length; i++) {
            var option = selectField.children[i];
            if (option.value == language) {
                selectField.selectedIndex = i;
                selectField.dispatchEvent(new Event('change'));
                break;
            }
        }
    }

    // Função para aguardar até que o Google Translate carregue o elemento <select>
    function waitForTranslateElement() {
        var selectField = document.querySelector("#google_translate_element select");

        if (!selectField) {
            // Usa MutationObserver para observar mudanças no DOM
            const observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    if (mutation.addedNodes.length) {
                        // Verifica se algum dos nós adicionados é o <select> do Google Translate
                        selectField = document.querySelector("#google_translate_element select");
                        if (selectField) {
                            console.log("Google Translate select element found.");
                            observer.disconnect(); // Para de observar após encontrar o elemento
                        }
                    }
                });
            });

            const targetNode = document.getElementById('google_translate_element');
            if (targetNode) {
                observer.observe(targetNode, { childList: true, subtree: true });
            } else {
                console.error("Google Translate element not found.");
            }
        }
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
