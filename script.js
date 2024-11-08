// TERCEIRA SEÇÃO

function expandSection() {
    const extraSection = document.getElementById('extraEmocoes');
    const expandButton = document.querySelector('.expand-button');
    if (extraSection.style.display === 'flex') {
        extraSection.style.display = 'none';
        expandButton.textContent = '+'; // Volta ao símbolo de mais
    } else {
        extraSection.style.display = 'flex';
        expandButton.textContent = '-'; // Muda para o símbolo de menos
    }
}




























// OITAVA SEÇÃO:

function executarBusca(texto) {
    // Redireciona para a página de resultados do CSE com a consulta preenchida em uma nova aba
    window.open(`https://cse.google.com/cse?cx=c37bd785c55e04898&q=${encodeURIComponent(texto)}`, '_blank');
}

