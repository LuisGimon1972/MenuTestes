async function executar(cmd) {
  
 const log = document.getElementById('log')
 let valorcmd;

const comandos = {
  login: "Autenticação do Sistema",
  navegacao: "Navegação do Sistema",
  pessoas: "Cadastro de Pessoas",
  usuarios: "Cadastro de Usuários",
  perfil: "Gestão de Perfis",
  funcionarios: "Cadastro de Funcionários",
  produtos: "Cadastro de Produtos",
  especies: "Cadastro de Espécies",
  cotacao: "Cadastro de Cotação de moedas",
  grupos: "Cadastro de Grupos",
  subgrupos: "Cadastro de Subgrupos",
  marcas: "Cadastro de Marcas",
  validacaopessoas: "Validação de dados de Pessoas",
  validacaoprodutos: "Validação de dados de Produtos",
  validacaofuncionarios: "Validação de dados de Funcionários",
  validacaoespecies: "Validação de dados de Espécies",
  validacaousuarios: "Validação de dados de Usuários",
  validacaocotacao: "Validação de dados de Cotação de moedas",
  validacaoperfil: "Validação de dados de Perfil de Usuários",
  validacaogrupos: "Validação de dados de Grupos",
  validacaosubgrupos: "Validação de dados de Subgrupos",
  validacaomarcas: "Validação de dados de Marcas",
  buscapessoas: "Buscas de Pessoas",
  buscaprodutos: "Buscas de Produtos",
  buscausuarios: "Buscas de Usuários",
  buscafaturamento: "Buscas de Faturas",
  buscaperfil: "Buscas de Perfil de Acesso",
  todos: "Execução completa dos testes"
};

let resultadoCmd = comandos[cmd] || "Comando não encontrado";


  log.innerText += '\n⏳ Executando: ' + resultadoCmd + '\n'

  try {
    const res = await fetch('http://localhost:3000/executar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cmd })
    })

    const text = await res.text()

    log.innerText += text + '\n✔ Finalizado\n'

  } catch (err) {
    log.innerText += '❌ Erro: ' + err.message + '\n'
  }

  log.scrollTop = log.scrollHeight
}

function toggleSection(id) {
  const sections = ["cadastros", "validacoes","buscas"];
  
  sections.forEach(sec => {
    const el = document.getElementById(sec);
    if (sec === id) {      
      el.style.display = (el.style.display === "none" || el.style.display === "") ? "block" : "none";
    } else {
      // Fecha os demais
      el.style.display = "none";
    }
  });
}

function limparLogs() {
   document.getElementById("log").textContent = "";
  }

async function executarTodos() {
  const comandos = [
    'login','navegacao','pessoas','usuarios','perfil',
    'funcionarios','produtos','especies','cotacao',
    'grupos','subgrupos','marcas','validacaopessoas',
    'validacaoprodutos', 'validacaofuncionarios', 
    'validacaoespecies', 'validacaousuarios',
    'validacaocotacao' , 'validacaoperfil', 
    'validacaogrupos', 'validacaosubgrupos', 'validacaomarcas',
    'buscapessoas', 'buscaprodutos', 'buscausuarios', 
    'buscafaturamento', 'buscaperfil'
  ]

  for (const cmd of comandos) {
    await executar(cmd)
  }
}