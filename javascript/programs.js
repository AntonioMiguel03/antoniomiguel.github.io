document.addEventListener("DOMContentLoaded", function() {
    const mainMenu = document.querySelector('.mainMenu');
    const closeMenu = document.querySelector('.closeMenu');
    const openMenu = document.querySelector('.openMenu');
    const flagImage = document.getElementById("flagImage");
    const languageInput = document.getElementById("language");

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
    } else {
        console.error("Flag image not found.");
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
        } else {
            flagImage.src = "img/uk_flag.jpg"; // Muda para a bandeira do Reino Unido
            languageInput.value = "pt"; // Atualiza o valor do input
            flagImage.title = "Translate to English"; // Atualiza o título
        }
    }

    // Associa a função de mudança de idioma ao clique da bandeira
    flagImage.addEventListener('click', changeLanguageByButtonClick);

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
