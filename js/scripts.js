// Menu lateral com transição para as páginas
const nav = document.querySelector(".itens-menu"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

// Itera sobre cada item de navegação
for (let i = 0; i < totalNavList; i++) {
    // Seleciona o link dentro do item de navegação
    const a = navList[i].querySelector("a");
    console.log(a)
    // Adiciona um event listener para o clique no link
    a.addEventListener("click", function () {

        // Remove a classe back-section de todas as seções
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove("back-section");
        }
        // Adiciona a classe back-section à seção ativa anterior
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                allSection[j].classList.add("back-section");
            }
            // Remove a classe active de todas as listas de navegação
            navList[j].querySelector("a").classList.remove("active");
        }
        // Adiciona a classe active ao link clicado
        this.classList.add("active");
        // Exibe a seção correspondente ao link clicado
        showSection(this);

        //Para quando selecionado um botão do menu lateral, o mini-menu feche automaticamente
        if (window.innerWidth < 1200) {
            lateralSectionBtn();
        }
    })
}




// Função para exibir a seção correspondente ao elemento clicado
function showSection(element) {
    // Loop para remover a classe 'active' de todas as seções
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }

    // Obtém o ID do alvo a partir do atributo 'href' do elemento e ativa a seção correspondente
    const target = element.getAttribute("href").split("#")[1];
    console.log(target)
    document.querySelector("#" + target).classList.add("active")
}


// Seleção do botão do mini menu e do painel lateral
const miniMenu = document.querySelector(".mini-menu-button"),
    lateral = document.querySelector(".lateral");

// Adiciona um ouvinte de evento ao botão do mini menu para controlar a abertura e fechamento do painel lateral
miniMenu.addEventListener("click", lateralSectionBtn)

// Função para alternar a exibição do painel lateral e das seções ao clicar no mini menu
function lateralSectionBtn() {
    lateral.classList.toggle("open"); // Alterna a classe 'open' do painel lateral para exibir ou ocultar
    miniMenu.classList.toggle("open"); // Alterna a classe 'open' do botão do mini menu

    // Loop para alternar a classe 'open' em todas as seções, afetando sua visibilidade
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}



// Função para enviar a mensagem para o WhatsApp
/* function sendMessageToWhatsApp() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var assunto = document.getElementById('assunto').value;
    var messagem = document.getElementById('messagem').value;


    // Codifica o assunto e a mensagem para URL
    var urlNome = encodeURIComponent(nome);
    var urlEmail = encodeURIComponent(email);
    var urlAssunto = encodeURIComponent(assunto);
    var urlMessagem = encodeURIComponent(messagem);

    // Cria a URL do WhatsApp
    // var whatsappUrl = `https://api.whatsapp.com/send?text=${urlNome}%0A${urlEmail}%A${urlMessagem}`;
    var whatsappUrl = `https://api.whatsapp.com/send?phone=5579996054554&text=${urlNome}%0A${urlEmail}%0A${urlAssunto}%0A${urlMessagem}`;


    // Abre a URL em uma nova aba do navegador
    window.open(whatsappUrl, '_blank');
} */





function sendWhatsAppMessage() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    var messageBody = `Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`;

    // Endpoint fictício para a API do WhatsApp que permitiria enviar mensagens diretamente
    var whatsappApiUrl = 'https://api.whatsapp.com/send_message';

    fetch(whatsappApiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer your_access_token' // Token de acesso necessário para autenticação
        },
        body: JSON.stringify({
            phone_number: '5579996054554', // Número de telefone do destinatário
            message: messageBody
        })
    })
        .then(response => response.json())
        .then(data => console.log('Mensagem enviada:', data))
        .catch(error => console.error('Erro ao enviar mensagem:', error));
}






// ============================================================






// Array com as URLs das imagens
const imagens = [
    "/imagens/icons/perfil1.jpg",
    "/imagens/icons/perfil2.jpg",
    "/imagens/icons/perfil3.jpg"
];

// Referência para a imagem
const imagemPerfil = document.getElementById('foto-perfil');

// Variável para controlar o índice da imagem atual
let indice = 0;

// Função para alternar as imagens
function alternarImagem() {
    // Adiciona a classe de fade à imagem atual para aplicar a transição
    imagemPerfil.classList.add('girar');

    // Aguarda a transição terminar antes de alterar a imagem
    setTimeout(function () {
        indice = (indice + 1) % imagens.length; // Avança para a próxima imagem
        imagemPerfil.src = imagens[indice]; // Define a nova imagem

        // Remove a classe de fade após a transição terminar
        imagemPerfil.classList.remove('girar');
    }, 1000);
}

// Chamada inicial para exibir a primeira imagem
alternarImagem();

setInterval(alternarImagem, 4000);
