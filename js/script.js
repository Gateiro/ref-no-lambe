/* 1. LÓGICA DO CARROSSEL (Página Inicial)*/

const cartoes = document.querySelectorAll('.cartao');
const containerCarrossel = document.querySelector('.carrossel-swipe');
if (containerCarrossel) {
    
    const opcoesObservador = {
        root: containerCarrossel,
        rootMargin: '0px', 
        threshold: 0.6
    };

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('ativo');
            } else {
                entrada.target.classList.remove('ativo');
            }
        });
    }, opcoesObservador);

    // Manda o observador vigiar cada um dos cartões encontrados
    cartoes.forEach(cartao => {
        observador.observe(cartao);
    });
}


/*2. LÓGICA DO BOTÃO VOLTAR AO TOPO */

// Busca o botão pelo novo ID
const btnScroll = document.getElementById("btnScrollInteligente");

// Só executa se o botão existir na página
if (btnScroll) {
    
    // Escuta o evento de rolagem (scroll)
    window.addEventListener('scroll', function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            // MODO VOLTAR AO TOPO: Adiciona a classe, para de pular e muda a seta
            if (!btnScroll.classList.contains("modo-topo")) {
                btnScroll.classList.add("modo-topo");
                btnScroll.innerHTML = "↑";
            }
        } else {
            // MODO DESCER: Remove a classe, volta a pular e muda a seta
            if (btnScroll.classList.contains("modo-topo")) {
                btnScroll.classList.remove("modo-topo");
                btnScroll.innerHTML = "↓";
            }
        }
    });

    btnScroll.addEventListener('click', function() {
        if (btnScroll.classList.contains("modo-topo")) {
            // AÇÃO 1: Se estiver no modo topo, sobe tudo
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        } else {
            // AÇÃO 2: Se estiver no modo descer, desce o equivalente a quase uma tela inteira
            window.scrollBy({
                top: window.innerHeight - 80, 
                behavior: "smooth"
            });
        }
    });
}