document.addEventListener("DOMContentLoaded", function() {
    const mainMenu = document.querySelector('.mainMenu');
    const closeMenu = document.querySelector('.closeMenu');
    const openMenu = document.querySelector('.openMenu');
    const flagImage = document.getElementById("flagImage");
    const languageInput = document.getElementById("language");
    const translateButton = document.getElementById("legendaIdioma");
    
    // Adicione o event listener após o DOM estar carregado
    //translateButton.addEventListener('click', changeLanguageByButtonClick);
    
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
