const herois = [
    { nome: "Aragorn", xp: 8500 },
    { nome: "Gandalf", xp: 10000 },
    { nome: "Legolas", xp: 7200 },
    { nome: "Thor", xp: 9300 },
    { nome: "Capitã Marvel", xp: 8900 },
    { nome: "Homem-Aranha", xp: 6500 },
    { nome: "Mulher Maravilha", xp: 9500 },
    { nome: "Doutor Estranho", xp: 8200 },
    { nome: "Pantera Negra", xp: 7800 },
    { nome: "Capitão América", xp: 9000 }
];

const viloes = [
    { nome: "Sauron", xp: 12000 },
    { nome: "Saruman", xp: 8500 },
    { nome: "Loki", xp: 9200 },
    { nome: "Thanos", xp: 15000 },
    { nome: "Magneto", xp: 8800 },
    { nome: "Venom", xp: 7500 },
    { nome: "Lex Luthor", xp: 6800 },
    { nome: "Doutor Destino", xp: 9500 },
    { nome: "Joker", xp: 7200 },
    { nome: "Ultron", xp: 11000 }
];


// Função para classificar nível (reutilizável)
function classificarNivel(xp) {
    if (xp <= 1000) {
        return "Ferro";
    } else if (xp <= 2000) {
        return "Bronze";
    } else if (xp <= 5000) {
        return "Prata";
    } else if (xp <= 7000) {
        return "Ouro";
    } else if (xp <= 8000) {
        return "Platina";
    } else if (xp <= 9000) {
        return "Ascendente";
    } else if (xp <= 10000) {
        return "Imortal";
    } else {
        return "Radiante";
    }
}

// Função para criar card de personagem
function criarCardPersonagem(personagem, tipo) {
    const nivel = classificarNivel(personagem.xp);
    const nivelClass = nivel.toLowerCase().replace('ã', 'a');

    return `
        <div class="character-card ${tipo}-card">
            <div class="flex justify-between items-start mb-3">
                <h4 class="text-xl font-bold text-white">${personagem.nome}</h4>
                <span class="level-badge level-${nivelClass}">${nivel}</span>
            </div>
            <div class="text-gray-300">
                <p class="text-sm mb-2">XP: <span class="text-yellow-400 font-semibold">${personagem.xp.toLocaleString()}</span></p>
                <div class="w-full bg-gray-700 rounded-full h-2">
                    <div class="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style="width: ${Math.min((personagem.xp / 15000) * 100, 100)}%"></div>
                </div>
            </div>
        </div>
    `;
}

// Função para mostrar modal
function mostrarModal() {
    const modal = document.getElementById('characterModal');
    const heroesList = document.getElementById('heroesList');
    const villainsList = document.getElementById('villainsList');

    // Limpar listas
    heroesList.innerHTML = '';
    villainsList.innerHTML = '';

    // Adicionar heróis
    herois.forEach(heroi => {
        heroesList.innerHTML += criarCardPersonagem(heroi, 'hero');
    });

    // Adicionar vilões
    viloes.forEach(vilao => {
        villainsList.innerHTML += criarCardPersonagem(vilao, 'villain');
    });

    // Mostrar modal com animação
    modal.classList.remove('hidden');
    modal.classList.add('modal-enter');
}

// Função para fechar modal
function fecharModal() {
    const modal = document.getElementById('characterModal');
    modal.classList.add('hidden');
    modal.classList.remove('modal-enter');
}

// Event listeners
document.addEventListener('DOMContentLoaded', function () {
    const showButton = document.getElementById('showCharacters');
    const closeButton = document.getElementById('closeModal');
    const modal = document.getElementById('characterModal');

    // Botão para mostrar personagens
    showButton.addEventListener('click', mostrarModal);

    // Botão para fechar modal
    closeButton.addEventListener('click', fecharModal);

    // Fechar modal clicando fora dele
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            fecharModal();
        }
    });

    // Fechar modal com tecla ESC
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            fecharModal();
        }
    });
});