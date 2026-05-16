# 📂 Código-Fonte da Aplicação

-contatos.html

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contatos — Libraspédia</title>
  <meta name="description" content="Entre em contato conosco ou envie uma sugestão de expressão para a Libraspédia." />
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <!-- ╔══════════════════════════════╗ -->
  <!-- ║          NAVBAR              ║ -->
  <!-- ╚══════════════════════════════╝ -->
  <nav class="navbar">
    <a class="nav-logo" href="index.html">
      <span class="star">⭐</span> Libraspédia
    </a>
    <button class="hamburger" id="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav-links" id="navLinks">
      <li><a href="index.html">Home</a></li>
      <li><a href="lista.html">Lista</a></li>
      <li><a href="contatos.html" class="active">Contatos</a></li>
    </ul>
  </nav>

  <!-- ╔══════════════════════════════╗ -->
  <!-- ║        HERO CONTATOS         ║ -->
  <!-- ╚══════════════════════════════╝ -->
  <header class="contatos-hero">
    <h1>Contatos</h1>
    <p>Entre em contato conosco ou envie uma sugestão de expressão</p>
  </header>

  <!-- ╔══════════════════════════════╗ -->
  <!-- ║       LAYOUT CONTATOS        ║ -->
  <!-- ╚══════════════════════════════╝ -->
  <main class="contatos-layout">

    <!-- Informações de contato -->
    <div class="contatos-info">
      <h2>⭐ Libraspédia</h2>
      <p>
        Somos um projeto dedicado a tornar a Língua Brasileira de Sinais mais acessível para
        todos. Tem dúvidas, sugestões ou quer colaborar? Fale com a gente!
      </p>

      <div class="canal-item">
        <div class="canal-icone">✉️</div>
        <div class="canal-info">
          <small>E-MAIL</small>
          <span>contato@libraspedia.com.br</span>
        </div>
      </div>

      <div class="canal-item">
        <div class="canal-icone">📷</div>
        <div class="canal-info">
          <small>INSTAGRAM</small>
          <span>@libraspedia</span>
        </div>
      </div>

      <div class="canal-item">
        <div class="canal-icone">💬</div>
        <div class="canal-info">
          <small>WHATSAPP</small>
          <span>+55 (11) 99999-0000</span>
        </div>
      </div>

      <div class="canal-item">
        <div class="canal-icone">🐱</div>
        <div class="canal-info">
          <small>GITHUB</small>
          <span>github.com/libraspedia</span>
        </div>
      </div>
    </div>

    <!-- Formulário -->
    <div class="form-card">
      <h3>Envie uma mensagem</h3>

      <div class="form-grupo">
        <label for="nome">Nome</label>
        <input type="text" id="nome" class="form-input" placeholder="Seu nome completo" />
      </div>

      <div class="form-grupo">
        <label for="email">E-mail</label>
        <input type="email" id="email" class="form-input" placeholder="seu@email.com" />
      </div>

      <div class="form-grupo">
        <label for="mensagem">Mensagem</label>
        <textarea id="mensagem" class="form-textarea" placeholder="Escreva sua mensagem, sugestão ou dúvida..."></textarea>
      </div>

      <button class="btn-enviar" id="btnEnviar">Enviar mensagem</button>

      <div class="mensagem-sucesso" id="msgSucesso">
        ✅ Mensagem enviada com sucesso! Obrigado pelo contato.
      </div>
    </div>

  </main>

  <!-- ╔══════════════════════════════╗ -->
  <!-- ║           FOOTER             ║ -->
  <!-- ╚══════════════════════════════╝ -->
  <footer>
    <div class="footer-inner">
      <div class="footer-logo">⭐ Libraspédia</div>
      <div class="footer-contatos">
        <h4>Contatos</h4>
        <p>contato@libraspedia.com.br</p>
        <p>Instagram: @libraspedia</p>
      </div>
    </div>
    <p class="footer-copy">© 2026 Libraspédia · Todos os direitos reservados</p>
  </footer>

  <script>
    // Menu mobile
    document.getElementById("hamburger").addEventListener("click", () => {
      document.getElementById("navLinks").classList.toggle("aberto");
    });

    // Formulário (simulação — sem backend)
    document.getElementById("btnEnviar").addEventListener("click", () => {
      const nome     = document.getElementById("nome").value.trim();
      const email    = document.getElementById("email").value.trim();
      const mensagem = document.getElementById("mensagem").value.trim();

      if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos antes de enviar.");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
      }

      // Simulação de envio
      const btn = document.getElementById("btnEnviar");
      btn.textContent = "Enviando...";
      btn.disabled = true;

      setTimeout(() => {
        document.getElementById("msgSucesso").style.display = "block";
        btn.textContent = "Enviar mensagem";
        btn.disabled = false;
        document.getElementById("nome").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mensagem").value = "";
      }, 1000);
    });
  </script>

</body>
</html>

-dados.js

// dados.js — Base de dados das expressões em LIBRAS
// GIFs hospedados no Giphy (embed via URL pública)

const expressoes = [
  // ─── SAUDAÇÕES ───────────────────────────────────────────────
  {
    id: 1,
    palavra: "Bom dia",
    categoria: "Saudações",
    descricao: "Saudação usada no período da manhã.",
    contexto: "Use ao encontrar alguém pela manhã, antes do meio-dia.",
    gif: "https://media.giphy.com/media/3o7btNhMBytxAM6YBa/giphy.gif",
    temGif: true
  },
  {
    id: 2,
    palavra: "Boa tarde",
    categoria: "Saudações",
    descricao: "Saudação usada no período da tarde.",
    contexto: "Use ao encontrar alguém entre o meio-dia e o anoitecer.",
    gif: "https://media.giphy.com/media/26BRuo6sLetdllPAQ/giphy.gif",
    temGif: true
  },
  {
    id: 3,
    palavra: "Boa noite",
    categoria: "Saudações",
    descricao: "Saudação usada no período noturno.",
    contexto: "Use ao encontrar alguém após o anoitecer.",
    gif: "https://media.giphy.com/media/3oKIPsx2VAYAgEHC12/giphy.gif",
    temGif: true
  },
  {
    id: 4,
    palavra: "Olá",
    categoria: "Saudações",
    descricao: "Cumprimento informal e geral.",
    contexto: "Pode ser usado em qualquer hora do dia para cumprimentar alguém.",
    gif: "https://media.giphy.com/media/dzaUX7CAG0Ihi/giphy.gif",
    temGif: true
  },
  {
    id: 5,
    palavra: "Tudo bem?",
    categoria: "Saudações",
    descricao: "Pergunta informal sobre o estado da pessoa.",
    contexto: "Usada para perguntar como a pessoa está.",
    gif: "https://media.giphy.com/media/3o7btXkbsV26U95Uly/giphy.gif",
    temGif: true
  },

  // ─── DESPEDIDAS ──────────────────────────────────────────────
  {
    id: 6,
    palavra: "Tchau",
    categoria: "Despedidas",
    descricao: "Despedida informal.",
    contexto: "Use ao se despedir de alguém de forma casual.",
    gif: "https://media.giphy.com/media/m9eG1qVjvN56H0MXt8/giphy.gif",
    temGif: true
  },
  {
    id: 7,
    palavra: "Até logo",
    categoria: "Despedidas",
    descricao: "Despedida indicando que se verá em breve.",
    contexto: "Use quando pretende rever a pessoa em curto prazo.",
    gif: "https://media.giphy.com/media/3ohs4lOWhNKRVvFbTq/giphy.gif",
    temGif: true
  },
  {
    id: 8,
    palavra: "Até amanhã",
    categoria: "Despedidas",
    descricao: "Despedida indicando que se verá no dia seguinte.",
    contexto: "Use ao se despedir de alguém que você verá amanhã.",
    gif: "https://media.giphy.com/media/xT9IgG50Lg7russbDa/giphy.gif",
    temGif: true
  },

  // ─── EXPRESSÕES DE CORTESIA ───────────────────────────────────
  {
    id: 9,
    palavra: "Obrigado",
    categoria: "Expressões de Cortesia",
    descricao: "Expressão de gratidão (masculino).",
    contexto: "Use para agradecer algo que foi feito por você.",
    gif: "https://media.giphy.com/media/6tHy8UAbv3zgs/giphy.gif",
    temGif: true
  },
  {
    id: 10,
    palavra: "Obrigada",
    categoria: "Expressões de Cortesia",
    descricao: "Expressão de gratidão (feminino).",
    contexto: "Use para agradecer algo que foi feito por você.",
    gif: "https://media.giphy.com/media/6tHy8UAbv3zgs/giphy.gif",
    temGif: true
  },
  {
    id: 11,
    palavra: "Por favor",
    categoria: "Expressões de Cortesia",
    descricao: "Expressão de pedido educado.",
    contexto: "Use ao pedir algo a alguém de forma educada.",
    gif: "https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif",
    temGif: true
  },
  {
    id: 12,
    palavra: "Com licença",
    categoria: "Expressões de Cortesia",
    descricao: "Expressão usada para pedir passagem ou atenção.",
    contexto: "Use para pedir passagem ou ao interromper alguém.",
    gif: "https://media.giphy.com/media/3o7btNhMBytxAM6YBa/giphy.gif",
    temGif: true
  },
  {
    id: 13,
    palavra: "Desculpe",
    categoria: "Expressões de Cortesia",
    descricao: "Pedido de desculpas.",
    contexto: "Use quando cometeu um erro ou quer pedir perdão.",
    gif: "https://media.giphy.com/media/26BRuo6sLetdllPAQ/giphy.gif",
    temGif: true
  },
  {
    id: 14,
    palavra: "De nada",
    categoria: "Expressões de Cortesia",
    descricao: "Resposta ao agradecimento.",
    contexto: "Use quando alguém lhe agradece por algo.",
    gif: "https://media.giphy.com/media/3oKIPsx2VAYAgEHC12/giphy.gif",
    temGif: true
  },

  // ─── SENTIMENTOS ─────────────────────────────────────────────
  {
    id: 15,
    palavra: "Feliz",
    categoria: "Sentimentos",
    descricao: "Estado emocional de alegria.",
    contexto: "Use para expressar que está contente ou alegre.",
    gif: "https://media.giphy.com/media/dzaUX7CAG0Ihi/giphy.gif",
    temGif: true
  },
  {
    id: 16,
    palavra: "Triste",
    categoria: "Sentimentos",
    descricao: "Estado emocional de tristeza.",
    contexto: "Use para expressar melancolia ou tristeza.",
    gif: "https://media.giphy.com/media/3o7btXkbsV26U95Uly/giphy.gif",
    temGif: true
  },
  {
    id: 17,
    palavra: "Com raiva",
    categoria: "Sentimentos",
    descricao: "Estado emocional de irritação ou raiva.",
    contexto: "Use para indicar que está com raiva ou irritado.",
    gif: "https://media.giphy.com/media/m9eG1qVjvN56H0MXt8/giphy.gif",
    temGif: true
  },
  {
    id: 18,
    palavra: "Com medo",
    categoria: "Sentimentos",
    descricao: "Estado de temor ou receio.",
    contexto: "Use para expressar que está assustado ou com medo.",
    gif: "https://media.giphy.com/media/3ohs4lOWhNKRVvFbTq/giphy.gif",
    temGif: true
  },
  {
    id: 19,
    palavra: "Amor",
    categoria: "Sentimentos",
    descricao: "Sentimento de afeto profundo.",
    contexto: "Expressa carinho e afeição por alguém ou algo.",
    gif: "https://media.giphy.com/media/xT9IgG50Lg7russbDa/giphy.gif",
    temGif: true
  },

  // ─── VERBOS COMUNS ────────────────────────────────────────────
  {
    id: 20,
    palavra: "Querer",
    categoria: "Verbos Comuns",
    descricao: "Expressar desejo ou vontade.",
    contexto: "Use para indicar que deseja algo.",
    gif: "https://media.giphy.com/media/6tHy8UAbv3zgs/giphy.gif",
    temGif: true
  },
  {
    id: 21,
    palavra: "Precisar",
    categoria: "Verbos Comuns",
    descricao: "Expressar necessidade.",
    contexto: "Use quando algo é necessário para você.",
    gif: "https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif",
    temGif: true
  },
  {
    id: 22,
    palavra: "Ajudar",
    categoria: "Verbos Comuns",
    descricao: "Oferecer ou pedir auxílio.",
    contexto: "Use ao oferecer ou solicitar apoio a alguém.",
    gif: "https://media.giphy.com/media/3o7btNhMBytxAM6YBa/giphy.gif",
    temGif: true
  },
  {
    id: 23,
    palavra: "Entender",
    categoria: "Verbos Comuns",
    descricao: "Compreender algo.",
    contexto: "Use para indicar que compreendeu a mensagem.",
    gif: "https://media.giphy.com/media/26BRuo6sLetdllPAQ/giphy.gif",
    temGif: true
  },
  {
    id: 24,
    palavra: "Não entendi",
    categoria: "Verbos Comuns",
    descricao: "Indicar que não compreendeu a mensagem.",
    contexto: "Use para pedir que a pessoa repita ou explique melhor.",
    gif: "https://media.giphy.com/media/3oKIPsx2VAYAgEHC12/giphy.gif",
    temGif: true
  },
  {
    id: 25,
    palavra: "Repetir",
    categoria: "Verbos Comuns",
    descricao: "Pedir para que algo seja dito novamente.",
    contexto: "Use quando não entendeu e quer que repitam.",
    gif: "https://media.giphy.com/media/dzaUX7CAG0Ihi/giphy.gif",
    temGif: true
  },

  // ─── EDUCAÇÃO ─────────────────────────────────────────────────
  {
    id: 26,
    palavra: "Escola",
    categoria: "Educação",
    descricao: "Instituição de ensino.",
    contexto: "Refere-se ao ambiente escolar onde se aprende.",
    gif: "https://media.giphy.com/media/3o7btXkbsV26U95Uly/giphy.gif",
    temGif: true
  },
  {
    id: 27,
    palavra: "Professor",
    categoria: "Educação",
    descricao: "Profissional que ensina.",
    contexto: "Pessoa responsável por ensinar em uma escola ou curso.",
    gif: "https://media.giphy.com/media/m9eG1qVjvN56H0MXt8/giphy.gif",
    temGif: true
  },
  {
    id: 28,
    palavra: "Aluno",
    categoria: "Educação",
    descricao: "Pessoa que aprende.",
    contexto: "Quem estuda em uma escola ou curso.",
    gif: "https://media.giphy.com/media/3ohs4lOWhNKRVvFbTq/giphy.gif",
    temGif: true
  },
  {
    id: 29,
    palavra: "Estudar",
    categoria: "Educação",
    descricao: "Ato de aprender ou revisar conteúdo.",
    contexto: "Atividade de aprendizado.",
    gif: "https://media.giphy.com/media/xT9IgG50Lg7russbDa/giphy.gif",
    temGif: true
  },
  {
    id: 30,
    palavra: "Livro",
    categoria: "Educação",
    descricao: "Material de leitura e aprendizado.",
    contexto: "Objeto físico ou digital usado para aprender e ler.",
    gif: "https://media.giphy.com/media/6tHy8UAbv3zgs/giphy.gif",
    temGif: true
  },

  // ─── PESSOAS ──────────────────────────────────────────────────
  {
    id: 31,
    palavra: "Mãe",
    categoria: "Pessoas",
    descricao: "Progenitora feminina.",
    contexto: "Referência à figura materna.",
    gif: "https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif",
    temGif: true
  },
  {
    id: 32,
    palavra: "Pai",
    categoria: "Pessoas",
    descricao: "Progenitor masculino.",
    contexto: "Referência à figura paterna.",
    gif: "https://media.giphy.com/media/3o7btNhMBytxAM6YBa/giphy.gif",
    temGif: true
  },
  {
    id: 33,
    palavra: "Filho",
    categoria: "Pessoas",
    descricao: "Descendente masculino.",
    contexto: "Referência ao filho homem.",
    gif: "https://media.giphy.com/media/26BRuo6sLetdllPAQ/giphy.gif",
    temGif: true
  },
  {
    id: 34,
    palavra: "Amigo",
    categoria: "Pessoas",
    descricao: "Pessoa com quem se tem amizade.",
    contexto: "Alguém próximo que você considera amigo.",
    gif: "https://media.giphy.com/media/3oKIPsx2VAYAgEHC12/giphy.gif",
    temGif: true
  },
  {
    id: 35,
    palavra: "Médico",
    categoria: "Pessoas",
    descricao: "Profissional da saúde.",
    contexto: "Pessoa que cuida da saúde e trata doenças.",
    gif: "https://media.giphy.com/media/dzaUX7CAG0Ihi/giphy.gif",
    temGif: true
  },

  // ─── LUGARES ──────────────────────────────────────────────────
  {
    id: 36,
    palavra: "Casa",
    categoria: "Lugares",
    descricao: "Residência onde se mora.",
    contexto: "Lugar onde você vive com sua família.",
    gif: "https://media.giphy.com/media/3o7btXkbsV26U95Uly/giphy.gif",
    temGif: true
  },
  {
    id: 37,
    palavra: "Hospital",
    categoria: "Lugares",
    descricao: "Estabelecimento de saúde.",
    contexto: "Local onde se busca atendimento médico.",
    gif: "https://media.giphy.com/media/m9eG1qVjvN56H0MXt8/giphy.gif",
    temGif: true
  },
  {
    id: 38,
    palavra: "Banheiro",
    categoria: "Lugares",
    descricao: "Cômodo para higiene pessoal.",
    contexto: "Use para perguntar ou indicar onde fica o banheiro.",
    gif: "https://media.giphy.com/media/3ohs4lOWhNKRVvFbTq/giphy.gif",
    temGif: true
  },
  {
    id: 39,
    palavra: "Supermercado",
    categoria: "Lugares",
    descricao: "Estabelecimento para compras de alimentos.",
    contexto: "Local onde se compram alimentos e produtos do dia a dia.",
    gif: "https://media.giphy.com/media/xT9IgG50Lg7russbDa/giphy.gif",
    temGif: true
  },
  {
    id: 40,
    palavra: "Igreja",
    categoria: "Lugares",
    descricao: "Local de culto religioso.",
    contexto: "Lugar de práticas religiosas cristãs.",
    gif: "https://media.giphy.com/media/6tHy8UAbv3zgs/giphy.gif",
    temGif: true
  },

  // ─── COMUNICAÇÃO COM OUVINTES ─────────────────────────────────
  {
    id: 41,
    palavra: "Pode escrever?",
    categoria: "Comunicação com Ouvintes",
    descricao: "Pedido para a pessoa escrever o que está dizendo.",
    contexto: "Use quando não consegue entender a fala e precisa que escrevam.",
    gif: "https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif",
    temGif: true
  },
  {
    id: 42,
    palavra: "Fale devagar",
    categoria: "Comunicação com Ouvintes",
    descricao: "Pedido para falar em velocidade mais lenta.",
    contexto: "Use quando a pessoa está falando muito rápido.",
    gif: "https://media.giphy.com/media/3o7btNhMBytxAM6YBa/giphy.gif",
    temGif: true
  },
  {
    id: 43,
    palavra: "Sou surdo(a)",
    categoria: "Comunicação com Ouvintes",
    descricao: "Apresentação da condição auditiva.",
    contexto: "Use para informar a uma pessoa ouvinte que você é surdo/a.",
    gif: "https://media.giphy.com/media/26BRuo6sLetdllPAQ/giphy.gif",
    temGif: true
  },
  {
    id: 44,
    palavra: "Você sabe LIBRAS?",
    categoria: "Comunicação com Ouvintes",
    descricao: "Pergunta se a pessoa conhece a língua de sinais.",
    contexto: "Use para verificar se o interlocutor sabe se comunicar em LIBRAS.",
    gif: "https://media.giphy.com/media/3oKIPsx2VAYAgEHC12/giphy.gif",
    temGif: true
  },
  {
    id: 45,
    palavra: "Não ouço",
    categoria: "Comunicação com Ouvintes",
    descricao: "Expressão de deficiência auditiva.",
    contexto: "Use para informar que não consegue ouvir.",
    gif: "https://media.giphy.com/media/dzaUX7CAG0Ihi/giphy.gif",
    temGif: true
  },

  // ─── ROTINA DOMÉSTICA ─────────────────────────────────────────
  {
    id: 46,
    palavra: "Comer",
    categoria: "Rotina Doméstica",
    descricao: "Ato de se alimentar.",
    contexto: "Use para indicar refeição ou perguntar se alguém quer comer.",
    gif: "https://media.giphy.com/media/3o7btXkbsV26U95Uly/giphy.gif",
    temGif: true
  },
  {
    id: 47,
    palavra: "Beber",
    categoria: "Rotina Doméstica",
    descricao: "Ato de ingerir líquido.",
    contexto: "Use para indicar que quer ou vai beber algo.",
    gif: "https://media.giphy.com/media/m9eG1qVjvN56H0MXt8/giphy.gif",
    temGif: true
  },
  {
    id: 48,
    palavra: "Dormir",
    categoria: "Rotina Doméstica",
    descricao: "Ato de descansar dormindo.",
    contexto: "Use para indicar que vai dormir ou está com sono.",
    gif: "https://media.giphy.com/media/3ohs4lOWhNKRVvFbTq/giphy.gif",
    temGif: true
  },
  {
    id: 49,
    palavra: "Limpar",
    categoria: "Rotina Doméstica",
    descricao: "Ato de higienizar ou organizar.",
    contexto: "Atividade de limpeza do ambiente.",
    gif: "https://media.giphy.com/media/xT9IgG50Lg7russbDa/giphy.gif",
    temGif: true
  },
  {
    id: 50,
    palavra: "Cozinhar",
    categoria: "Rotina Doméstica",
    descricao: "Preparar alimentos.",
    contexto: "Ato de preparar refeições na cozinha.",
    gif: "https://media.giphy.com/media/6tHy8UAbv3zgs/giphy.gif",
    temGif: true
  },

  // ─── TRABALHO E REUNIÕES ──────────────────────────────────────
  {
    id: 51,
    palavra: "Trabalho",
    categoria: "Trabalho e Reuniões",
    descricao: "Atividade profissional remunerada.",
    contexto: "Referência ao emprego ou atividade de trabalho.",
    gif: "https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif",
    temGif: true
  },
  {
    id: 52,
    palavra: "Reunião",
    categoria: "Trabalho e Reuniões",
    descricao: "Encontro de pessoas para discussão.",
    contexto: "Quando um grupo se encontra para tratar de assuntos.",
    gif: "https://media.giphy.com/media/3o7btNhMBytxAM6YBa/giphy.gif",
    temGif: true
  },
  {
    id: 53,
    palavra: "Chefe",
    categoria: "Trabalho e Reuniões",
    descricao: "Pessoa com autoridade no trabalho.",
    contexto: "Refere-se ao superior hierárquico no ambiente de trabalho.",
    gif: "https://media.giphy.com/media/26BRuo6sLetdllPAQ/giphy.gif",
    temGif: true
  },
  {
    id: 54,
    palavra: "Salário",
    categoria: "Trabalho e Reuniões",
    descricao: "Remuneração pelo trabalho.",
    contexto: "Valor recebido pelo trabalho realizado.",
    gif: "https://media.giphy.com/media/3oKIPsx2VAYAgEHC12/giphy.gif",
    temGif: true
  },

  // ─── SERVIÇOS E COMÉRCIO ──────────────────────────────────────
  {
    id: 55,
    palavra: "Quanto custa?",
    categoria: "Serviços e Comércio",
    descricao: "Pergunta sobre o preço de algo.",
    contexto: "Use ao querer saber o valor de um produto ou serviço.",
    gif: "https://media.giphy.com/media/dzaUX7CAG0Ihi/giphy.gif",
    temGif: true
  },
  {
    id: 56,
    palavra: "Comprar",
    categoria: "Serviços e Comércio",
    descricao: "Ato de adquirir algo pagando.",
    contexto: "Use para indicar que deseja adquirir algo.",
    gif: "https://media.giphy.com/media/3o7btXkbsV26U95Uly/giphy.gif",
    temGif: true
  },
  {
    id: 57,
    palavra: "Pagar",
    categoria: "Serviços e Comércio",
    descricao: "Ato de efetuar pagamento.",
    contexto: "Use para indicar que vai efetuar um pagamento.",
    gif: "https://media.giphy.com/media/m9eG1qVjvN56H0MXt8/giphy.gif",
    temGif: true
  },
  {
    id: 58,
    palavra: "Troco",
    categoria: "Serviços e Comércio",
    descricao: "Dinheiro devolvido após pagamento.",
    contexto: "Valor retornado ao cliente após pagar com valor superior.",
    gif: "https://media.giphy.com/media/3ohs4lOWhNKRVvFbTq/giphy.gif",
    temGif: true
  },
  {
    id: 59,
    palavra: "Caro",
    categoria: "Serviços e Comércio",
    descricao: "Alto custo.",
    contexto: "Use para indicar que algo tem preço elevado.",
    gif: "https://media.giphy.com/media/xT9IgG50Lg7russbDa/giphy.gif",
    temGif: true
  },
  {
    id: 60,
    palavra: "Barato",
    categoria: "Serviços e Comércio",
    descricao: "Baixo custo.",
    contexto: "Use para indicar que algo tem preço acessível.",
    gif: "https://media.giphy.com/media/6tHy8UAbv3zgs/giphy.gif",
    temGif: true
  },
  {
    id: 61,
    palavra: "Farmácia",
    categoria: "Serviços e Comércio",
    descricao: "Local de venda de medicamentos.",
    contexto: "Estabelecimento onde se compram remédios e produtos de saúde.",
    gif: "https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif",
    temGif: true
  },
  {
    id: 62,
    palavra: "Banco",
    categoria: "Serviços e Comércio",
    descricao: "Instituição financeira.",
    contexto: "Local para movimentações financeiras e serviços bancários.",
    gif: "https://media.giphy.com/media/3o7btNhMBytxAM6YBa/giphy.gif",
    temGif: true
  },
  {
    id: 63,
    palavra: "Ônibus",
    categoria: "Serviços e Comércio",
    descricao: "Transporte público coletivo.",
    contexto: "Meio de transporte urbano coletivo.",
    gif: "https://media.giphy.com/media/26BRuo6sLetdllPAQ/giphy.gif",
    temGif: true
  }
];

const categorias = [
  "Todas",
  "Saudações",
  "Despedidas",
  "Expressões de Cortesia",
  "Sentimentos",
  "Verbos Comuns",
  "Educação",
  "Pessoas",
  "Lugares",
  "Comunicação com Ouvintes",
  "Rotina Doméstica",
  "Trabalho e Reuniões",
  "Serviços e Comércio"
];

-index.html

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Libraspédia — Dicionário Colaborativo de LIBRAS</title>
  <meta name="description" content="Libraspédia é uma enciclopédia digital colaborativa dedicada à Língua Brasileira de Sinais. Aprenda expressões, sinais e gestos de forma clara e acessível." />
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <!-- ╔══════════════════════════════╗ -->
  <!-- ║          NAVBAR              ║ -->
  <!-- ╚══════════════════════════════╝ -->
  <nav class="navbar">
    <a class="nav-logo" href="index.html">
      <span class="star">⭐</span> Libraspédia
    </a>
    <button class="hamburger" id="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav-links" id="navLinks">
      <li><a href="index.html" class="active">Home</a></li>
      <li><a href="lista.html">Lista</a></li>
      <li><a href="contatos.html">Contatos</a></li>
    </ul>
  </nav>

  <!-- ╔══════════════════════════════╗ -->
  <!-- ║            HERO              ║ -->
  <!-- ╚══════════════════════════════╝ -->
  <header class="hero">
    <div class="hero-icon">⭐</div>
    <h1>Libraspédia</h1>
    <p>O seu dicionário colaborativo de expressões em LIBRAS — acessível, visual e feito para todos.</p>
    <a href="lista.html" class="btn-primary">Entre na Lista</a>
  </header>

  <!-- ╔══════════════════════════════╗ -->
  <!-- ║         O QUE É?             ║ -->
  <!-- ╚══════════════════════════════╝ -->
  <section class="sobre-bg">
    <div class="secao">
      <h2 class="secao-titulo">O que é?</h2>
      <div class="secao-linha"></div>
      <p class="secao-texto">
        A <strong>Libraspédia</strong> é uma enciclopédia digital colaborativa dedicada à
        <strong>Língua Brasileira de Sinais (LIBRAS)</strong>. Nosso objetivo é catalogar
        expressões, sinais e gestos de forma clara e acessível, promovendo a inclusão e o
        aprendizado da língua para toda a comunidade — ouvintes, surdos e intérpretes.
      </p>
      <p class="secao-texto">
        Aqui você encontra descrições detalhadas, contextos de uso e referências visuais das
        expressões em LIBRAS, organizadas de forma intuitiva e fácil de navegar.
      </p>
    </div>
  </section>

  <!-- ╔══════════════════════════════╗ -->
  <!-- ║       POR QUE USAR?          ║ -->
  <!-- ╚══════════════════════════════╝ -->
  <section class="porqueUsar-bg">
    <h2>Por que usar a Libraspédia?</h2>
    <div class="cards-grid">
      <div class="feature-card">
        <div class="icon-circle">🤟</div>
        <h3>Expressões em LIBRAS</h3>
        <p>Catálogo organizado com expressões, contextos de uso e descrições detalhadas dos sinais.</p>
      </div>
      <div class="feature-card">
        <div class="icon-circle">📖</div>
        <h3>Fácil de Aprender</h3>
        <p>Interface simples e intuitiva, pensada para que qualquer pessoa possa aprender LIBRAS.</p>
      </div>
      <div class="feature-card">
        <div class="icon-circle">👥</div>
        <h3>Inclusão para Todos</h3>
        <p>Desenvolvido para surdos, ouvintes e intérpretes que desejam se comunicar melhor.</p>
      </div>
    </div>
  </section>

  <!-- ╔══════════════════════════════╗ -->
  <!-- ║       PRONTO PARA EXPLORAR   ║ -->
  <!-- ╚══════════════════════════════╝ -->
  <section class="cta-section">
    <span class="star">⭐</span>
    <h2>Pronto para explorar?</h2>
    <p>Acesse nossa lista completa de expressões em LIBRAS e comece sua jornada de aprendizado agora mesmo.</p>
    <a href="lista.html" class="btn-primary">Entre na Lista</a>
  </section>

  <!-- ╔══════════════════════════════╗ -->
  <!-- ║           FOOTER             ║ -->
  <!-- ╚══════════════════════════════╝ -->
  <footer>
    <div class="footer-inner">
      <div class="footer-logo">⭐ Libraspédia</div>
      <div class="footer-contatos">
        <h4>Contatos</h4>
        <p>contato@libraspedia.com.br</p>
        <p>Instagram: @libraspedia</p>
      </div>
    </div>
    <p class="footer-copy">© 2026 Libraspédia · Todos os direitos reservados</p>
  </footer>

  <script>
    // Menu mobile
    const hamburger = document.getElementById('hamburger');
    const navLinks  = document.getElementById('navLinks');
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('aberto');
    });
  </script>

</body>
</html>

-lista.html

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Lista de Expressões — Libraspédia</title>
  <link rel="stylesheet" href="style.css" />
  <style>
    /* ── Estilos extras do modal com iframe ── */
    .modal-iframe-area {
      background: #0d2a5e;
      height: 260px;
      position: relative;
      overflow: hidden;
    }
    .modal-iframe-area iframe {
      width: 100%;
      height: 100%;
      border: none;
      display: block;
    }
    .modal-iframe-area .iframe-loading {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: rgba(255,255,255,0.7);
      font-size: 0.9rem;
      gap: 10px;
      pointer-events: none;
      transition: opacity 0.4s;
    }
    .modal-iframe-area .iframe-loading .spinner {
      width: 36px; height: 36px;
      border: 3px solid rgba(255,255,255,0.2);
      border-top-color: #F5C300;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    .modal-iframe-area .iframe-loading.oculto { opacity: 0; }

    .modal-fechar {
      position: absolute;
      top: 10px; right: 12px;
      background: rgba(255,255,255,0.2);
      border: none; color: #fff;
      font-size: 1.2rem;
      width: 32px; height: 32px;
      border-radius: 50%;
      cursor: pointer;
      z-index: 10;
      display: flex; align-items: center; justify-content: center;
    }
    .modal-fechar:hover { background: rgba(255,255,255,0.35); }

    .btn-spread {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: #1A4FA0;
      color: #fff;
      font-size: 0.85rem;
      font-weight: 700;
      padding: 8px 16px;
      border-radius: 50px;
      margin-top: 12px;
      text-decoration: none;
      transition: background 0.2s;
    }
    .btn-spread:hover { background: #143d7a; }

    /* badge VIDEO no card */
    .card-gif-area { cursor: pointer; }
    .badge-video {
      position: absolute;
      top: 8px; left: 8px;
      background: #1A4FA0;
      color: #fff;
      font-size: 0.68rem;
      font-weight: 800;
      padding: 3px 8px;
      border-radius: 50px;
      letter-spacing: 0.04em;
    }
    .card-placeholder {
      font-size: 1.1rem;
      font-weight: 800;
      color: rgba(255,255,255,0.8);
      text-align: center;
      padding: 0 1rem;
      line-height: 1.3;
    }
    .play-icon {
      font-size: 2rem;
      margin-bottom: 6px;
      opacity: 0.85;
    }
  </style>
</head>
<body>

  <nav class="navbar">
    <a class="nav-logo" href="index.html"><span class="star">⭐</span> Libraspédia</a>
    <button class="hamburger" id="hamburger"><span></span><span></span><span></span></button>
    <ul class="nav-links" id="navLinks">
      <li><a href="index.html">Home</a></li>
      <li><a href="lista.html" class="active">Lista</a></li>
      <li><a href="contatos.html">Contatos</a></li>
    </ul>
  </nav>

  <header class="lista-hero">
    <h1>Lista de Expressões</h1>
    <p>Clique em qualquer expressão para ver o sinal em LIBRAS</p>
    <div class="search-wrap">
      <input type="text" id="campoBusca" class="search-input"
        placeholder="Pesquisar expressão ou palavra..." autocomplete="off" />
      <span class="search-icon">🔍</span>
    </div>
  </header>

  <div class="filtros-area">
    <div class="filtros-scroll" id="filtros"></div>
  </div>
  <p class="contagem-resultados" id="contagem"></p>

  <main>
    <div class="expressoes-grid" id="gridExpressoes"></div>
    <div class="sem-resultados" id="semResultados">
      <div class="emoji">🤷</div>
      <p>Nenhuma expressão encontrada.</p>
      <p style="font-size:.88rem;margin-top:4px;">Tente outra palavra ou categoria.</p>
    </div>
  </main>

  <!-- ══ MODAL ══════════════════════════════════════════════════ -->
  <div class="modal-overlay" id="modal" role="dialog" aria-modal="true">
    <div class="modal-box">

      <!-- Área do vídeo LIBRAS via Spread The Sign -->
      <div class="modal-iframe-area" id="modalIframeArea">
        <button class="modal-fechar" id="modalFechar" aria-label="Fechar">✕</button>
        <div class="iframe-loading" id="iframeLoading">
          <div class="spinner"></div>
          <span>Carregando sinal em LIBRAS...</span>
        </div>
        <iframe id="modalIframe" src="" title="Sinal em LIBRAS - Spread The Sign"
          allowfullscreen sandbox="allow-scripts allow-same-origin allow-popups"></iframe>
      </div>

      <div class="modal-conteudo">
        <p class="modal-categoria" id="modalCategoria"></p>
        <h2 class="modal-titulo" id="modalTitulo"></h2>

        <div class="modal-info-bloco">
          <p class="modal-info-label">Descrição</p>
          <p class="modal-info-texto" id="modalDescricao"></p>
        </div>
        <div class="modal-info-bloco">
          <p class="modal-info-label">Quando usar</p>
          <p class="modal-info-texto" id="modalContexto"></p>
        </div>

        <!-- Botão para abrir no Spread The Sign se iframe bloquear -->
        <a id="btnSpread" href="#" target="_blank" class="btn-spread">
          🔗 Ver no Spread The Sign
        </a>
      </div>
    </div>
  </div>

  <footer>
    <div class="footer-inner">
      <div class="footer-logo">⭐ Libraspédia</div>
      <div class="footer-contatos">
        <h4>Contatos</h4>
        <p>contato@libraspedia.com.br</p>
        <p>Instagram: @libraspedia</p>
      </div>
    </div>
    <p class="footer-copy">© 2026 Libraspédia · Todos os direitos reservados</p>
  </footer>

  <script src="dados.js"></script>
  <script>
    let categoriaAtiva = "Todas";
    let termoBusca = "";

    // URL do Spread The Sign em LIBRAS para cada palavra
    function urlSpread(busca) {
      return `https://www.spreadthesign.com/pt.br/search/?q=${busca}&lang=pt.br`;
    }

    // ─── Filtros ──────────────────────────────────────────────
    function renderFiltros() {
      const c = document.getElementById("filtros");
      c.innerHTML = "";
      categorias.forEach(cat => {
        const btn = document.createElement("button");
        btn.className = "filtro-btn" + (cat === categoriaAtiva ? " ativo" : "");
        btn.textContent = cat;
        btn.addEventListener("click", () => { categoriaAtiva = cat; renderFiltros(); renderGrid(); });
        c.appendChild(btn);
      });
    }

    // ─── Filtrar ──────────────────────────────────────────────
    function expressoesFiltradas() {
      return expressoes.filter(exp => {
        const matchCat   = categoriaAtiva === "Todas" || exp.categoria === categoriaAtiva;
        const termo      = termoBusca.toLowerCase().trim();
        const matchBusca = !termo ||
          exp.palavra.toLowerCase().includes(termo) ||
          exp.categoria.toLowerCase().includes(termo) ||
          exp.descricao.toLowerCase().includes(termo);
        return matchCat && matchBusca;
      });
    }

    // ─── Grid ─────────────────────────────────────────────────
    function renderGrid() {
      const grid    = document.getElementById("gridExpressoes");
      const semRes  = document.getElementById("semResultados");
      const contagem = document.getElementById("contagem");
      const lista   = expressoesFiltradas();

      grid.innerHTML = "";
      if (lista.length === 0) {
        semRes.style.display = "block";
        contagem.textContent = "";
        return;
      }
      semRes.style.display = "none";
      contagem.textContent = `${lista.length} expressão${lista.length !== 1 ? "ões" : ""} encontrada${lista.length !== 1 ? "s" : ""}`;

      lista.forEach(exp => {
        const card = document.createElement("div");
        card.className = "expressao-card";
        card.setAttribute("tabindex", "0");
        card.setAttribute("role", "button");
        card.setAttribute("aria-label", `Ver sinal em LIBRAS: ${exp.palavra}`);
        card.innerHTML = `
          <div class="card-gif-area">
            <span class="badge-video">▶ LIBRAS</span>
            <div class="card-placeholder">
              <div class="play-icon">🤟</div>
              ${exp.palavra}
            </div>
          </div>
          <div class="card-body">
            <p class="card-categoria">${exp.categoria}</p>
            <h3 class="card-titulo">${exp.palavra}</h3>
            <p class="card-descricao">${exp.descricao}</p>
          </div>`;
        card.addEventListener("click",   () => abrirModal(exp));
        card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") abrirModal(exp); });
        grid.appendChild(card);
      });
    }

    // ─── Modal ────────────────────────────────────────────────
    function abrirModal(exp) {
      document.getElementById("modalCategoria").textContent = exp.categoria;
      document.getElementById("modalTitulo").textContent    = exp.palavra;
      document.getElementById("modalDescricao").textContent = exp.descricao;
      document.getElementById("modalContexto").textContent  = exp.contexto;

      const url = urlSpread(exp.busca);
      document.getElementById("btnSpread").href = url;

      // Carrega o iframe
      const iframe  = document.getElementById("modalIframe");
      const loading = document.getElementById("iframeLoading");
      loading.classList.remove("oculto");
      iframe.src = "";
      setTimeout(() => {
        iframe.src = url;
        iframe.onload = () => loading.classList.add("oculto");
        // fallback: esconde loader após 5s de qualquer forma
        setTimeout(() => loading.classList.add("oculto"), 5000);
      }, 100);

      document.getElementById("modal").classList.add("aberto");
      document.body.style.overflow = "hidden";
    }

    function fecharModal() {
      document.getElementById("modal").classList.remove("aberto");
      document.getElementById("modalIframe").src = "";
      document.body.style.overflow = "";
    }

    document.getElementById("modalFechar").addEventListener("click", fecharModal);
    document.getElementById("modal").addEventListener("click", e => {
      if (e.target === document.getElementById("modal")) fecharModal();
    });
    document.addEventListener("keydown", e => { if (e.key === "Escape") fecharModal(); });
    document.getElementById("campoBusca").addEventListener("input", e => {
      termoBusca = e.target.value; renderGrid();
    });
    document.getElementById("hamburger").addEventListener("click", () => {
      document.getElementById("navLinks").classList.toggle("aberto");
    });

    renderFiltros();
    renderGrid();
  </script>
</body>
</html>

-style.css

/* =====================================================
   LIBRASPÉDIA — style.css
   Paleta: Azul #1A4FA0 · Amarelo #F5C300 · Cinza #F0F2F5
   ===================================================== */

/* ── Reset & Base ──────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --azul:       #1A4FA0;
  --azul-escuro:#143d7a;
  --azul-claro: #2563b8;
  --amarelo:    #F5C300;
  --amarelo-hover:#d4a900;
  --cinza-bg:   #F0F2F5;
  --cinza-card: #ffffff;
  --texto:      #1a1a2e;
  --texto-suave:#4a5568;
  --borda:      #e2e8f0;
  --sombra:     0 2px 12px rgba(26,79,160,0.10);
  --sombra-hover: 0 6px 24px rgba(26,79,160,0.18);
  --radius:     14px;
  --radius-sm:  8px;
  --fonte:      'Nunito', 'Segoe UI', Arial, sans-serif;
  --transicao:  0.22s ease;
}

html { scroll-behavior: smooth; }

body {
  font-family: var(--fonte);
  background: var(--cinza-bg);
  color: var(--texto);
  min-height: 100vh;
  line-height: 1.6;
}

a { text-decoration: none; color: inherit; }
ul { list-style: none; }
img { display: block; max-width: 100%; }

/* ── Google Fonts ──────────────────────────────────── */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

/* ── NAVBAR ───────────────────────────────────────── */
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--azul);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 58px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.18);
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  font-weight: 800;
  color: #fff;
}

.nav-logo .star { font-size: 1.4rem; }

.nav-links {
  display: flex;
  gap: 1.8rem;
}

.nav-links a {
  color: #ffffffcc;
  font-weight: 600;
  font-size: 0.95rem;
  transition: color var(--transicao);
  padding-bottom: 2px;
  border-bottom: 2px solid transparent;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--amarelo);
  border-bottom-color: var(--amarelo);
}

/* Hamburger mobile */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 4px;
}
.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: #fff;
  border-radius: 2px;
  transition: var(--transicao);
}

/* ── HERO ─────────────────────────────────────────── */
.hero {
  background: var(--azul);
  padding: 5rem 1.5rem 7rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: 0; left: -5%;
  width: 110%; height: 70px;
  background: var(--cinza-bg);
  border-radius: 50% 50% 0 0 / 100% 100% 0 0;
}

.hero-icon { font-size: 3rem; margin-bottom: 0.5rem; }

.hero h1 {
  font-size: clamp(2.4rem, 6vw, 3.5rem);
  font-weight: 900;
  color: #fff;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.1rem;
  color: #ffffffcc;
  max-width: 500px;
  margin: 0 auto 2rem;
}

.btn-primary {
  display: inline-block;
  background: var(--amarelo);
  color: var(--azul-escuro);
  font-weight: 800;
  font-size: 1rem;
  padding: 0.85rem 2.2rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: background var(--transicao), transform var(--transicao), box-shadow var(--transicao);
  box-shadow: 0 4px 16px rgba(245,195,0,0.35);
}

.btn-primary:hover {
  background: var(--amarelo-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 22px rgba(245,195,0,0.45);
}

/* ── SEÇÕES ───────────────────────────────────────── */
.secao {
  padding: 3.5rem 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
}

.secao-titulo {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--azul);
  margin-bottom: 0.5rem;
}

.secao-linha {
  width: 48px;
  height: 4px;
  background: var(--amarelo);
  border-radius: 2px;
  margin-bottom: 1.5rem;
}

.secao-texto {
  color: var(--texto-suave);
  font-size: 1.02rem;
  max-width: 700px;
  margin-bottom: 0.8rem;
}

/* ── SOBRE / O QUE É ─────────────────────────────── */
.sobre-bg {
  background: var(--cinza-bg);
}

/* ── POR QUE USAR ─────────────────────────────────── */
.porqueUsar-bg {
  background: #fff;
  padding: 3.5rem 1.5rem;
}

.porqueUsar-bg h2 {
  text-align: center;
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--azul);
  margin-bottom: 2.5rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}

.feature-card {
  background: var(--cinza-bg);
  border-radius: var(--radius);
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: var(--sombra);
  transition: transform var(--transicao), box-shadow var(--transicao);
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--sombra-hover);
}

.feature-card .icon-circle {
  width: 58px;
  height: 58px;
  background: #dce8f8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 1.6rem;
}

.feature-card h3 {
  color: var(--azul);
  font-weight: 700;
  font-size: 1.05rem;
  margin-bottom: 0.6rem;
}

.feature-card p {
  color: var(--texto-suave);
  font-size: 0.92rem;
}

/* ── CTA CENTRAL ──────────────────────────────────── */
.cta-section {
  background: var(--cinza-bg);
  text-align: center;
  padding: 4rem 1.5rem;
}

.cta-section .star { font-size: 2.2rem; margin-bottom: 0.5rem; display: block; }

.cta-section h2 {
  font-size: 1.9rem;
  font-weight: 800;
  color: var(--azul);
  margin-bottom: 0.8rem;
}

.cta-section p {
  color: var(--texto-suave);
  max-width: 480px;
  margin: 0 auto 1.8rem;
}

/* ── FOOTER ───────────────────────────────────────── */
footer {
  background: var(--azul);
  color: #ffffffcc;
  padding: 2rem 2.5rem 1rem;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255,255,255,0.15);
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  font-weight: 800;
  color: #fff;
}

.footer-contatos h4 {
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-align: right;
}

.footer-contatos p {
  font-size: 0.88rem;
  text-align: right;
}

.footer-copy {
  text-align: center;
  font-size: 0.83rem;
  margin-top: 1rem;
  color: rgba(255,255,255,0.5);
}

/* ═══════════════════════════════════════════════════
   LISTA PAGE
   ═════════════════════════════════════════════════ */

.lista-hero {
  background: var(--azul);
  padding: 3rem 1.5rem 5.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.lista-hero::after {
  content: '';
  position: absolute;
  bottom: 0; left: -5%;
  width: 110%; height: 60px;
  background: var(--cinza-bg);
  border-radius: 50% 50% 0 0 / 100% 100% 0 0;
}

.lista-hero h1 {
  font-size: clamp(1.9rem, 5vw, 2.8rem);
  font-weight: 900;
  color: #fff;
  margin-bottom: 0.5rem;
}

.lista-hero p {
  color: #ffffffcc;
  margin-bottom: 1.8rem;
}

/* Barra de busca */
.search-wrap {
  position: relative;
  max-width: 540px;
  margin: 0 auto;
  z-index: 1;
}

.search-input {
  width: 100%;
  padding: 0.95rem 3rem 0.95rem 1.3rem;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-family: var(--fonte);
  outline: none;
  box-shadow: 0 4px 18px rgba(0,0,0,0.15);
}

.search-input::placeholder { color: #9ca3af; }

.search-icon {
  position: absolute;
  right: 1.1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--azul);
  font-size: 1.1rem;
  pointer-events: none;
}

/* Filtros de categoria */
.filtros-area {
  padding: 1.8rem 1.5rem 0;
  max-width: 1100px;
  margin: 0 auto;
}

.filtros-scroll {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 0.8rem;
}

.filtro-btn {
  padding: 0.45rem 1.1rem;
  border-radius: 50px;
  border: 2px solid var(--borda);
  background: transparent;
  font-family: var(--fonte);
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--texto-suave);
  cursor: pointer;
  transition: all var(--transicao);
}

.filtro-btn:hover {
  border-color: var(--azul);
  color: var(--azul);
}

.filtro-btn.ativo {
  background: var(--azul);
  border-color: var(--azul);
  color: #fff;
}

.contagem-resultados {
  font-size: 0.88rem;
  color: var(--texto-suave);
  margin: 0.5rem 0 1rem 0;
  padding: 0 1.5rem;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
}

/* Grid de cards */
.expressoes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.4rem;
  padding: 0.5rem 1.5rem 3rem;
  max-width: 1100px;
  margin: 0 auto;
}

.expressao-card {
  background: #fff;
  border-radius: var(--radius);
  overflow: hidden;
  cursor: pointer;
  box-shadow: var(--sombra);
  transition: transform var(--transicao), box-shadow var(--transicao);
  border: 2px solid transparent;
}

.expressao-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--sombra-hover);
  border-color: var(--azul);
}

.card-gif-area {
  background: var(--azul-claro);
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.card-gif-area img.gif-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-gif-label {
  position: absolute;
  top: 10px;
  left: 10px;
  background: var(--amarelo);
  color: var(--azul-escuro);
  font-size: 0.72rem;
  font-weight: 800;
  padding: 3px 8px;
  border-radius: 50px;
}

.card-placeholder {
  font-size: 1.5rem;
  font-weight: 800;
  color: rgba(255,255,255,0.75);
  padding: 0 1rem;
  text-align: center;
  line-height: 1.3;
}

.card-body {
  padding: 1rem 1.2rem 1.2rem;
}

.card-categoria {
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--azul);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 0.3rem;
}

.card-titulo {
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--texto);
  margin-bottom: 0.35rem;
}

.card-descricao {
  font-size: 0.88rem;
  color: var(--texto-suave);
  line-height: 1.5;
}

/* Sem resultados */
.sem-resultados {
  text-align: center;
  padding: 3rem 1rem;
  color: var(--texto-suave);
  display: none;
}

.sem-resultados .emoji { font-size: 3rem; margin-bottom: 0.5rem; }

/* ═══════════════════════════════════════════════════
   MODAL
   ═════════════════════════════════════════════════ */

.modal-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.55);
  z-index: 999;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  animation: fadeIn 0.2s ease;
}

.modal-overlay.aberto {
  display: flex;
}

@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes slideUp { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

.modal-box {
  background: #fff;
  border-radius: 20px;
  max-width: 500px;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  animation: slideUp 0.25s ease;
}

.modal-gif-area {
  background: var(--azul);
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.modal-gif-area img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-fechar {
  position: absolute;
  top: 12px;
  right: 14px;
  background: rgba(255,255,255,0.2);
  border: none;
  color: #fff;
  font-size: 1.3rem;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background var(--transicao);
  z-index: 2;
}

.modal-fechar:hover { background: rgba(255,255,255,0.35); }

.modal-gif-placeholder {
  font-size: 2rem;
  font-weight: 800;
  color: rgba(255,255,255,0.8);
  text-align: center;
  padding: 1rem;
}

.modal-conteudo {
  padding: 1.5rem 1.8rem 2rem;
}

.modal-categoria {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--azul);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 0.3rem;
}

.modal-titulo {
  font-size: 1.9rem;
  font-weight: 900;
  color: var(--texto);
  margin-bottom: 1rem;
}

.modal-info-bloco {
  margin-bottom: 0.9rem;
}

.modal-info-label {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--texto-suave);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.2rem;
}

.modal-info-texto {
  font-size: 0.97rem;
  color: var(--texto);
  line-height: 1.55;
}

/* ═══════════════════════════════════════════════════
   CONTATOS PAGE
   ═════════════════════════════════════════════════ */

.contatos-hero {
  background: var(--azul);
  padding: 3rem 1.5rem 5.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.contatos-hero::after {
  content: '';
  position: absolute;
  bottom: 0; left: -5%;
  width: 110%; height: 60px;
  background: var(--cinza-bg);
  border-radius: 50% 50% 0 0 / 100% 100% 0 0;
}

.contatos-hero h1 {
  font-size: clamp(1.9rem, 5vw, 2.6rem);
  font-weight: 900;
  color: #fff;
  margin-bottom: 0.5rem;
}

.contatos-hero p {
  color: #ffffffcc;
}

.contatos-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  max-width: 920px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  align-items: start;
}

.contatos-info h2 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--texto);
  margin-bottom: 0.8rem;
}

.contatos-info p {
  color: var(--texto-suave);
  margin-bottom: 1.5rem;
  font-size: 0.97rem;
}

.canal-item {
  background: #fff;
  border-radius: var(--radius-sm);
  padding: 1rem 1.2rem;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: var(--sombra);
}

.canal-icone {
  width: 42px;
  height: 42px;
  background: #dce8f8;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.canal-info small {
  display: block;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--texto-suave);
  margin-bottom: 2px;
}

.canal-info span {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--texto);
}

/* Formulário */
.form-card {
  background: #fff;
  border-radius: var(--radius);
  padding: 2rem;
  box-shadow: var(--sombra);
}

.form-card h3 {
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--azul);
  margin-bottom: 1.3rem;
}

.form-grupo {
  margin-bottom: 1rem;
}

.form-grupo label {
  display: block;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--texto);
  margin-bottom: 0.4rem;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.7rem 1rem;
  border: 1.5px solid var(--borda);
  border-radius: var(--radius-sm);
  font-size: 0.95rem;
  font-family: var(--fonte);
  outline: none;
  transition: border-color var(--transicao);
  background: var(--cinza-bg);
}

.form-input:focus,
.form-textarea:focus {
  border-color: var(--azul);
  background: #fff;
}

.form-input::placeholder,
.form-textarea::placeholder { color: #9ca3af; }

.form-textarea {
  resize: vertical;
  min-height: 110px;
}

.btn-enviar {
  width: 100%;
  padding: 0.9rem;
  border: none;
  border-radius: 50px;
  background: var(--amarelo);
  color: var(--azul-escuro);
  font-weight: 800;
  font-size: 1rem;
  font-family: var(--fonte);
  cursor: pointer;
  transition: background var(--transicao), transform var(--transicao);
  box-shadow: 0 3px 12px rgba(245,195,0,0.3);
}

.btn-enviar:hover {
  background: var(--amarelo-hover);
  transform: translateY(-1px);
}

.mensagem-sucesso {
  display: none;
  background: #d1fae5;
  border: 1.5px solid #34d399;
  border-radius: var(--radius-sm);
  padding: 1rem;
  text-align: center;
  color: #065f46;
  font-weight: 600;
  font-size: 0.95rem;
  margin-top: 1rem;
}

/* ── RESPONSIVIDADE ────────────────────────────────── */
@media (max-width: 768px) {
  .hamburger { display: flex; }

  .nav-links {
    display: none;
    position: absolute;
    top: 58px;
    left: 0;
    right: 0;
    background: var(--azul-escuro);
    flex-direction: column;
    padding: 1rem 1.5rem;
    gap: 1rem;
    box-shadow: 0 6px 20px rgba(0,0,0,0.2);
  }

  .nav-links.aberto { display: flex; }
  .nav-links a { font-size: 1.05rem; }

  .contatos-layout {
    grid-template-columns: 1fr;
  }

  .footer-contatos h4,
  .footer-contatos p { text-align: left; }

  .expressoes-grid {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }
}

@media (max-width: 480px) {
  .hero { padding: 3.5rem 1rem 6rem; }
  .secao { padding: 2.5rem 1rem; }
  .cards-grid { grid-template-columns: 1fr; }
  .expressoes-grid { grid-template-columns: 1fr; }
  .filtros-scroll { gap: 0.4rem; }
  .filtro-btn { font-size: 0.8rem; padding: 0.4rem 0.9rem; }
}

## Informações do Projeto

| Campo | Informação |
|-------|-----------|
| Nome da aplicação | Libraspédia |
| Tecnologias utilizadas | HTML, CSS, JavaScript |
| URL em produção | *(preencher, se hospedado)* |

## Como Executar Localmente

```bash
# 1. Clone o repositório
git clone <url-do-repositorio>

# 2. Verifique a versão do python
python --version
caso não tenha python instalado execute no terminal
sudo apt update
sudo apt install python3

# 3. Na pasta src execute
python -m http.server 8000

# 4. Abra a pagina
No terminal algo como (Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...)
deveria aparecer, utilizando a url entre parenteses pode-se abrir o site

# 5. Fechando o localhost
No terminal aperte "Control" + "c", um texto como (Keyboard interrupt received, exiting.)
deveria aparecer e interromper o processo
```

## Estrutura do Código

```
src/
├── contatos.html
├── dados.js
├── index.html
├── lista.html
├── README.md
└── style.css

```

## Deploy

*(Descreva como foi feito o deploy e onde a aplicação está hospedada.)*
