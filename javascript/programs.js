// Folha do JavaScript

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
        flagImage.title = "Traduzir para o Inglês"; // O idioma padrão é português

        let i = 0;
        function toggleLanguage() {
            if (i === 0 || i % 2 == 0)
                    alert("Inglês");
            else
                    alert("Português);
            i++;              
        }

        // Botão de voltar ao Menu
        var mybutton = document.getElementById("myBtn");

        // Quando o usuário rolar para baixo 20px do topo do documento, mostra o botão
        window.onscroll = function() { scrollFunction() };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }

        // Quando o usuário clica no botão, rola para o topo do documento
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
