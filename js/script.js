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

const botaoTopo = document.getElementById("btnVoltarTopo");
if (botaoTopo) {
    
    window.addEventListener('scroll', function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            botaoTopo.classList.add("visivel");
        } else {
            botaoTopo.classList.remove("visivel");
        }
    });

    botaoTopo.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}