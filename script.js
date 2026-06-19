async function executar(cmd) {
  
 const log = document.getElementById('log')
 let valorcmd;

const comandos = {
  login: "Autenticação do Sistema",
  seguranca: "Segurança do Sistema",
  navegacao: "Navegação do Sistema",  
  pessoas: "Cadastro de Pessoas",
  fornecedor: "Cadastro de Fornecedores",
  usuarios: "Cadastro de Usuários",
  perfil: "Cadastro de Perfil de Acesso",
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
  buscadav: "Buscas de DAVs",
  buscaperfil: "Buscas de Perfil de Acesso",
  buscaespecies: "Buscas de Espécies",
  buscacotacao: "Buscas de Cotação de Moedas",
  buscagrupos: "Buscas de Grupos",
  buscasubgrupos: "Buscas de Subgrupos",
  buscalote: "Buscas de Lotes",
  buscamarcas: "Buscas de Marcas",
  buscafuncionario:"Buscas de Funcionários",
  edicaopessoas:"Edição de Dados Pessoas",
  edicaofuncionarios:"Edição de Dados Funcionários",
  edicaoprodutos:"Edição de Dados Produtos",
  edicaoespecies:"Edição de Dados Espécies",
  edicaocotacao:"Edição de Dados Cotação de Moedas",
  edicaogrupos:"Edição de Dados Grupos",
  edicaosubgrupos:"Edição de Dados Subgrupos",
  edicaomarcas:"Edição de Dados Marcas",
  exclusaopessoas:"Exclusão de Dados Pessoas",
  exclusaoprodutos:"Exclusão de Dados Protutos",
  exclusaofuncionarios:"Exclusão de Dados Funcionários",
  exclusaoespecies:"Exclusão de Dados Espécies",
  exclusaocotacao:"Exclusão de Dados Cotação de moedas",
  exclusaogrupos:"Exclusão de Dados Grupos",
  exclusaosubgrupos:"Exclusão de Dados Subgrupos",
  exclusaomarcas:"Exclusão de Dados Marcas",
  desempenhologin:"Desempenho de Login",
  todos: "Execução completa dos testes"
};

let resultadoCmd = comandos[cmd] || "Comando não encontrado";

  log.innerText += '\n🖥️ Execução de Teste: ' + resultadoCmd + '\n'

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
  const sections = ["cadastros", "validacoes", "edicoes", "exclusoes", "buscas", "desempenho"];
  
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

function sair() {
  
  limparLogs();  
  window.location.href = "about:blank";
  // Se quiser apenas fechar a aba (funciona em alguns navegadores):
  // window.close();
}


async function executarTodos() {
  const comandos = [
    'login','navegacao', 'seguranca','pessoas','usuarios','perfil',
    'funcionarios','produtos','especies','cotacao',
    'grupos','subgrupos','marcas','validacaopessoas',
    'validacaoprodutos', 'validacaofuncionarios', 
    'validacaoespecies', 'validacaousuarios',
    'validacaocotacao' , 'validacaoperfil', 
    'validacaogrupos', 'validacaosubgrupos', 'validacaomarcas',
    'buscapessoas', 'buscaprodutos', 'buscausuarios', 
    'buscafaturamento', 'buscaperfil', 'buscaespecies',
    'buscacotacao', 'fornecedor', 'buscagrupos', 
    'buscasubgrupos', 'buscalote', 'buscamarcas',
    'buscafuncionario', 'edicaopessoas', 'edicaoprodutos',
    'edicaoespecies', 'edicaofuncionarios', 'edicaocotacao',
    'edicaogrupos','edicaosubgrupos', 'edicaomarcas',
    'exclusaopessoas', 'exclusaoprodutos', 'exclusaofuncionarios',
    'exclusaoespecies', 'exclusaocotacao', 'exclusaogrupos',  
    'exclusaosubgrupos', 'exclusaomarcas', 'buscadav',
    'desempenhologin'  
  ]

  for (const cmd of comandos) {
    await executar(cmd)
  }
}