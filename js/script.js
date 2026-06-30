/**
 * LÓGICA DE INTERSEÇÃO (Intersection Observer)
 * Este script monitora os cartões e adiciona a classe 'ativo' 
 * àquele que estiver mais centralizado na tela.
 */

const cartoes = document.querySelectorAll('.cartao');

const opcoesObservador = {
    root: document.querySelector('.carrossel-swipe'),
    rootMargin: '0px', threshold: 0.6
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

cartoes.forEach(cartao => {
    observador.observe(cartao);
});

/**
 * LÓGICA DE NAVEGAÇÃO POR BOTÕES (Para Desktop)
 * Este script calcula a largura de um cartão e rola o carrossel
 * de forma suave quando os botões são clicados.
 */

// 1. Selecionamos os botões e o contêiner do carrossel
const btnAnterior = document.getElementById('btn-anterior');
const btnProximo = document.getElementById('btn-proximo');
const carrossel = document.querySelector('.carrossel-swipe');

// 2. Criamos a função que faz a rolagem
function rolarCarrossel(direcao) {
    // Pega a largura exata de um cartão na tela no momento do clique, 
    // mais os 20px de espaço (gap)
    const cartaoExemplo = document.querySelector('.cartao');
    const larguraParaRolar = cartaoExemplo.offsetWidth + 20; 

    // O método scrollBy rola a tela a partir da posição atual
    carrossel.scrollBy({
        // Se a direção for 'proximo', rola positivo (direita). Se não, rola negativo (esquerda).
        left: direcao === 'proximo' ? larguraParaRolar : -larguraParaRolar,
        behavior: 'smooth' 
    });
}

// 3. Adicionado "ouvintes de eventos" para agir quando houver o clique
btnAnterior.addEventListener('click', () => rolarCarrossel('anterior'));
btnProximo.addEventListener('click', () => rolarCarrossel('proximo'));