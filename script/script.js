// Menu Hamburguer
const btnMenu = document.getElementById("btnMenu");
const navList = document.getElementById("navList");

btnMenu.addEventListener("click", () => {
    navList.classList.toggle("ativo");
    btnMenu.classList.toggle("ativo");
});

// Fecha menu ao clicar em um link (opcional)
document.querySelectorAll("#navList a").forEach(link => {
    link.addEventListener("click", () => {
        navList.classList.remove("ativo");
        btnMenu.classList.remove("ativo");
    });
});

// Animação ao Scroll
const animarOnScroll = () => {
    const elementos = document.querySelectorAll('[data-animar]');
    elementos.forEach(el => {
        const posicao = el.getBoundingClientRect().top;
        const alturaTela = window.innerHeight * 0.85;

        if (posicao < alturaTela) {
            el.classList.add('ativo');
        }
    });
};

window.addEventListener('scroll', animarOnScroll);
window.addEventListener('load', animarOnScroll);
