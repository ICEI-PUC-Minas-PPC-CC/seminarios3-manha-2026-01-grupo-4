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
