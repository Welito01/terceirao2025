document.addEventListener('DOMContentLoaded', function(){
    const aumentaFonteBotao = document.getElementById9('aumentar-fonte');

    let tamanhoAtualFonte = 1;
    aumentaFonteBotao.addEventListener('clic', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = '${tamanhoAtualFonte}rem';

    });

    diminuiFonteBotao.addEventListener('click', function(){
        tamanhoAtualFonte -=0.1;
        document.body.style.fontSize = '${tamanhoAtualFonte}rem';
    });
});

const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')

const alternaContraste = document.getElementById('alterna-contraste')

alternaConstraste.addEventListener('click', function(){
    document.body.classList.toggle('alto-contraste')
})

ScrollReveal().reveal ('#inicio', {delay:500});
ScrollReveal().reveal ('#tropicalia', {delay:500});
ScrollReveal().reveal ('#galeria', {delay:500});
ScrollReveal().reveal ('#contatp', {delay:500});



    
     

    
