async function executar(cmd) {
  
  const log = document.getElementById('log')
 let valorcmd;

switch (cmd) {
  case "login":
    valorcmd = "Autenticação do Sistema";
    break;

  case "navegacao":
    valorcmd = "Navegação do Sistema";
    break;

  case "pessoas":
    valorcmd = "Cadastro de Pessoas";
    break;

  case "usuarios":
    valorcmd = "Cadastro de Usuários";
    break;

  case "perfil":
    valorcmd = "Gestão de Perfis";
    break;

  case "funcionarios":
    valorcmd = "Cadastro de Funcionários";
    break;

  case "produtos":
    valorcmd = "Cadastro de Produtos";
    break;

  case "especies":
    valorcmd = "Cadastro de Espécies";
    break;

  case "cotacao":
    valorcmd = "Cadastro de Cotação de moedas";
    break;

  case "grupos":
    valorcmd = "Cadastro de Grupos";
    break;

  case "subgrupos":
    valorcmd = "Cadastro de Subgrupos";
    break;

  case "marcas":
    valorcmd = "Cadastro de Marcas";
    break;

  case "validacaopessoas":
    valorcmd = "Validação de dados de Pessoas";
    break;

  case "validacaoprodutos":
    valorcmd = "Validação de dados de Produtos";
    break;

  case "validacaofuncionarios":
    valorcmd = "Validação de dados de Funcionários";
    break;

  case "validacaoespecies":
    valorcmd = "Validação de dados de Espécies";
    break;  

  case "validacaousuarios":
    valorcmd = "Validação de dados de Usuários";
    break;  
  
  case "validacaocotacao":
    valorcmd = "Validação de dados de Cotação de moedas";
    break;  
  
  case "validacaoperfil":
    valorcmd = "Validação de dados de Perfil de Usuários";
    break;  

  case "validacaogrupos":
    valorcmd = "Validação de dados de Grupos";
    break;  

  case "validacaosubgrupos":
    valorcmd = "Validação de dados de Subgrupos";
    break;    

  case "validacaomarcas":
    valorcmd = "Validação de dados de Marcas";
    break;    

  case "buscapessoas":
    valorcmd = "Buscas de Pessoas";
    break;      

  case "buscaprodutos":
    valorcmd = "Buscas de Produtos";
    break;      

  case "todos":
    valorcmd = "Execução completa dos testes";
    break;

  default:
    valorcmd = "Comando não encontrado";
    break;
}

  log.innerText += '\n⏳ Executando: ' + valorcmd + '\n'

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
  // Lista de seções que devem se comportar como acordeão
  const sections = ["cadastros", "validacoes","buscas"];
  
  sections.forEach(sec => {
    const el = document.getElementById(sec);
    if (sec === id) {
      // Abre apenas o que foi clicado
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
    'buscapessoas', 'buscaprodutos' 
  ]

  for (const cmd of comandos) {
    await executar(cmd)
  }
}