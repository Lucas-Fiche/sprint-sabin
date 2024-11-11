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

// NA PRÁTICA
// Falar em Público
function changeContent(practice) {
    const title = document.getElementById('title');
    const description = document.getElementById('description');

    if (practice === 1) {
        title.textContent = 'Reestruturação cognitiva';
        description.textContent = 'A reestruturação cognitiva é uma técnica que ajuda a modificar pensamentos negativos ou irracionais, promovendo uma visão mais positiva e realista das situações. Isso pode ajudar as pessoas a superarem o medo de falar em público, permitindo-lhes desenvolver confiança e clareza ao se expressarem.';
    } else if (practice === 2) {
        title.textContent = 'Dessensibilização sistemática';
        description.textContent = 'A dessensibilização sistemática é uma técnica de exposição gradual a situações temidas, ajudando a reduzir a ansiedade ao longo do tempo. Ao praticar gradualmente o ato de falar em público em ambientes controlados, a pessoa pode desenvolver maior conforto e habilidade ao se comunicar perante audiências.';
    } else if (practice === 'default') {
        title.textContent = 'Falar em público';
        description.textContent = 'A habilidade de falar em público no ambiente corporativo é essencial para transmitir ideias com clareza e engajar colegas, seja em reuniões, apresentações ou treinamentos. Colaboradores que desenvolvem essa habilidade ganham confiança e impacto em sua comunicação, além de melhorarem sua capacidade de persuadir e inspirar a equipe. Ao expressarem suas ideias de maneira segura e articulada, criam um ambiente mais transparente e colaborativo, facilitando o alinhamento de objetivos e a tomada de decisões.';
    }
}


// Função para alterar o conteúdo de acordo com a prática e a página
function changeContent(practice, page) {
    const title = document.getElementById('title');
    const description = document.getElementById('description');

    if (page === 'falarPublico') {
        if (practice === 1) {
            title.textContent = 'X';
            description.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis non similique neque quam tenetur minima id facere sunt, dolorem tempore, nostrum molestiae quas quis sequi eaque aperiam accusantium. Architecto, consequuntur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus impedit voluptates aliquam ratione, voluptatibus maxime nisi velit repellat, placeat architecto consequatur? Odio dolorum ab explicabo? Dolor aperiam illum explicabo natus?';
        } else if (practice === 2) {
            title.textContent = 'Y';
            description.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis non similique neque quam tenetur minima id facere sunt, dolorem tempore, nostrum molestiae quas quis sequi eaque aperiam accusantium. Architecto, consequuntur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus impedit voluptates aliquam ratione, voluptatibus maxime nisi velit repellat, placeat architecto consequatur? Odio dolorum ab explicabo? Dolor aperiam illum explicabo natus?';
        } else {
            title.textContent = 'Falar em público';
            description.textContent = 'A habilidade de falar em público no ambiente corporativo é essencial para transmitir ideias com clareza e engajar colegas, seja em reuniões, apresentações ou treinamentos. Colaboradores que desenvolvem essa habilidade ganham confiança e impacto em sua comunicação, além de melhorarem sua capacidade de persuadir e inspirar a equipe. Ao expressarem suas ideias de maneira segura e articulada, criam um ambiente mais transparente e colaborativo, facilitando o alinhamento de objetivos e a tomada de decisões.';
        }
    } else if (page === 'comunicacaoNaoViolenta') {
        if (practice === 1) {
            title.textContent = 'X';
            description.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis non similique neque quam tenetur minima id facere sunt, dolorem tempore, nostrum molestiae quas quis sequi eaque aperiam accusantium. Architecto, consequuntur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus impedit voluptates aliquam ratione, voluptatibus maxime nisi velit repellat, placeat architecto consequatur? Odio dolorum ab explicabo? Dolor aperiam illum explicabo natus?';
        } else if (practice === 2) {
            title.textContent = 'Y';
            description.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis non similique neque quam tenetur minima id facere sunt, dolorem tempore, nostrum molestiae quas quis sequi eaque aperiam accusantium. Architecto, consequuntur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus impedit voluptates aliquam ratione, voluptatibus maxime nisi velit repellat, placeat architecto consequatur? Odio dolorum ab explicabo? Dolor aperiam illum explicabo natus?';
        } else {
            title.textContent = 'Comunicação não violenta';
            description.textContent = 'A prática da comunicação não violenta no trabalho ajuda a criar um ambiente de respeito e empatia. Ao expressar necessidades e opiniões de forma construtiva e ouvir ativamente o outro, os colaboradores reduzem conflitos e melhoram os relacionamentos.';
        }
    } else if (page === 'relacoesInterpessoais') {
        if (practice === 1) {
            title.textContent = 'X';
            description.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis non similique neque quam tenetur minima id facere sunt, dolorem tempore, nostrum molestiae quas quis sequi eaque aperiam accusantium. Architecto, consequuntur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus impedit voluptates aliquam ratione, voluptatibus maxime nisi velit repellat, placeat architecto consequatur? Odio dolorum ab explicabo? Dolor aperiam illum explicabo natus?';
        } else if (practice === 2) {
            title.textContent = 'Y';
            description.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis non similique neque quam tenetur minima id facere sunt, dolorem tempore, nostrum molestiae quas quis sequi eaque aperiam accusantium. Architecto, consequuntur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus impedit voluptates aliquam ratione, voluptatibus maxime nisi velit repellat, placeat architecto consequatur? Odio dolorum ab explicabo? Dolor aperiam illum explicabo natus?';
        } else {
            title.textContent = 'Relações interpessoais';
            description.textContent = 'As relações interpessoais positivas são a base de uma equipe unida e produtiva. Ao desenvolver a habilidade de construir relacionamentos saudáveis no trabalho, os colaboradores fortalecem o clima organizacional e promovem um ambiente de apoio mútuo.';
        }
    } else if (page === 'regulacaoEmocional') {
        if (practice === 1) {
            title.textContent = 'Y';
            description.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis non similique neque quam tenetur minima id facere sunt, dolorem tempore, nostrum molestiae quas quis sequi eaque aperiam accusantium. Architecto, consequuntur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus impedit voluptates aliquam ratione, voluptatibus maxime nisi velit repellat, placeat architecto consequatur? Odio dolorum ab explicabo? Dolor aperiam illum explicabo natus?';
        } else if (practice === 2) {
            title.textContent = 'X';
            description.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis non similique neque quam tenetur minima id facere sunt, dolorem tempore, nostrum molestiae quas quis sequi eaque aperiam accusantium. Architecto, consequuntur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus impedit voluptates aliquam ratione, voluptatibus maxime nisi velit repellat, placeat architecto consequatur? Odio dolorum ab explicabo? Dolor aperiam illum explicabo natus?';
        } else {
            title.textContent = 'Regulação emocional';
            description.textContent = 'A regulação emocional permite que os colaboradores mantenham o equilíbrio em situações de pressão e tomem decisões conscientes, mesmo em momentos de estresse. Com essa habilidade, é possível lidar de forma saudável com frustrações e desafios, evitando reações impulsivas que poderiam prejudicar o ambiente de trabalho. A capacidade de gerenciar emoções de maneira assertiva contribui para um ambiente mais tranquilo, produtivo e resiliente.';
        }
    }
}


























// OITAVA SEÇÃO:

function executarBusca(texto) {
    // Redireciona para a página de resultados do CSE com a consulta preenchida em uma nova aba
    window.open(`https://cse.google.com/cse?cx=c37bd785c55e04898&q=${encodeURIComponent(texto)}`, '_blank');
}

