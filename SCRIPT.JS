// Mostrar imagem quando marcar "Sim"
function mostrarImagem() {
    var checkboxSim = document.getElementById('sim');
    var imagem = document.getElementById('imagem');
    if (checkboxSim.checked) {
        imagem.style.display = 'block';
    } else {
        imagem.style.display = 'none';
    }
}

// Mover o botão "Não" para um lugar aleatório
function moverBotao() {
    var botaoNao = document.getElementById('nao');
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    botaoNao.style.position = 'absolute';
    botaoNao.style.left = x + 'px';
    botaoNao.style.top = y + 'px';
}
