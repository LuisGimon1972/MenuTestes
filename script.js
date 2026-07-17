async function executar(cmd) {
  
 const log = document.getElementById('log')
 let valorcmd;

 const botoesAtivos = document.querySelectorAll('button.ativo');
  botoesAtivos.forEach(btn => btn.classList.remove('ativo'));
  
  const botaoAlvo = document.querySelector(`button[onclick*="'${cmd}'"]`) || document.querySelector(`button[onclick*='executarTodos']`);
  if (botaoAlvo) {
    botaoAlvo.classList.add('ativo');
  }

  const relacaoComandoSecao = {
      empresas: "cadastros", pessoas: "cadastros", pessoacontribuinte: "Cadastros", fornecedor: "cadastros", usuarios: "cadastros", perfil: "cadastros",
      funcionarios: "cadastros", produtos: "cadastros", faturamento: "cadastros", dav: "cadastros", especies: "cadastros", cotacao: "cadastros",
      grupos: "cadastros", subgrupos: "cadastros", marcas: "cadastros",
      validacaopessoas: "validacoes", validacaoprodutos: "validacoes", validacaofuncionarios: "validacoes",
      validacaoespecies: "validacoes", validacaousuarios: "validacoes", validacaocotacao: "validacoes",
      validacaoperfil: "validacoes", validacaogrupos: "validacoes", validacaosubgrupos: "validacoes", validacaomarcas: "validacoes",
      edicaopessoas: "edicoes", edicaofuncionarios: "edicoes", edicaoprodutos: "edicoes",
      edicaoespecies: "edicoes", edicaocotacao: "edicoes", edicaogrupos: "edicoes",
      edicaosubgrupos: "edicoes", edicaomarcas: "edicoes", finalizarvenda: "finalizacao", compra: "finalizacao",
      exclusaopessoas: "exclusoes", exclusaoprodutos: "exclusoes", exclusaofuncionarios: "exclusoes",
      exclusaoespecies: "exclusoes", exclusaocotacao: "exclusoes", exclusaogrupos: "exclusoes",
      exclusaosubgrupos: "exclusoes", exclusaomarcas: "exclusoes",
      buscapessoas: "buscas", buscaprodutos: "buscas", buscausuarios: "buscas",
      buscafaturamento: "buscas", buscadav: "buscas", buscaperfil: "buscas",
      buscaespecies: "buscas", buscacotacao: "buscas", buscagrupos: "buscas",
      buscasubgrupos: "buscas", buscalote: "buscas", buscamarcas: "buscas", buscafuncionario: "buscas",
      desempenhologin: "desempenho", cadastropessoas: "desempenho", cadastroprodutos: "desempenho",
      cadastrofuncionarios: "desempenho", cadastrousuarios: "desempenho", cadastroespecies: "desempenho",
      desbuscapessoas: "desempenho", desbuscaprodutos: "desempenho", desbuscafuncionarios: "desempenho",
      desbuscausuarios: "desempenho", desbuscaespecies: "desempenho",
      navegacaomobile: "responsividade", navegacaotablet: "responsividade",
      pessoa_fatura: "integracao", pessoa_dav: "integracao", funcionario_fatura: "integracao",
      funcionario_dav: "integracao", produto_fatura: "integracao", produto_dav: "integracao",
      fornecedor_produto: "integracao", usuario_funcionario: "integracao", perfil_usuario: "integracao"
    };

    const secaoAlvo = relacaoComandoSecao[cmd];
    if (secaoAlvo) {
      const sections = ["cadastros", "validacoes", "edicoes", "exclusoes", "buscas", "desempenho", "responsividade", "integracao"];
      sections.forEach(sec => {
        const el = document.getElementById(sec);
        if (el) el.style.display = (sec === secaoAlvo) ? "block" : "none";
      });
    }  
 

const comandos = {
  login: "Autenticação do Sistema",
  seguranca: "Segurança do Sistema",
  integridade:"Integridade do Sistema",
  navegacao: "Navegação do Sistema",  
  empresas: "Cadastro de Empresas",
  pessoas: "Cadastro de Clientes Não Contribuintes",
  pessoacontribuinte: "Cadastro de Clientes Contribuintes",
  fornecedor: "Cadastro de Fornecedores",
  usuarios: "Cadastro de Usuários",
  perfil: "Cadastro de Perfil de Acesso",
  funcionarios: "Cadastro de Funcionários",
  produtos: "Cadastro de Produtos",
  faturamento: "Cadastro de Vendas",
  dav: "Cadastro de DAV",  
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
  finalizarvenda:"Finalizar fatura de venda",
  compra: "Finalizar fatura de Compras",
  exclusaopessoas:"Exclusão de Dados Pessoas",
  exclusaoprodutos:"Exclusão de Dados Protutos",
  exclusaofuncionarios:"Exclusão de Dados Funcionários",
  exclusaousuarios:"Exclusão de Dados Usuários",
  exclusaoperfil:"Exclusão de Dados Perfil de Acesso",
  exclusaoespecies:"Exclusão de Dados Espécies",
  exclusaocotacao:"Exclusão de Dados Cotação de moedas",
  exclusaogrupos:"Exclusão de Dados Grupos",
  exclusaosubgrupos:"Exclusão de Dados Subgrupos",
  exclusaomarcas:"Exclusão de Dados Marcas",
  desempenhologin:"Desempenho de Login",
  cadastropessoas:"Desempenho de Cadastro Pessoas",
  cadastroprodutos:"Desempenho de Cadastro Produtos",
  cadastrofuncionarios:"Desempenho de Cadastro Funcionários",
  cadastrousuarios:"Desempenho de Cadastro Usuários",
  cadastroespecies:"Desempenho de Cadastro Espécies",
  desbuscapessoas:"Desempenho de Buscas Pessoas",
  desbuscaprodutos:"Desempenho de Buscas Produtos",
  desbuscafuncionarios:"Desempenho de Buscas Funcionários",
  desbuscausuarios:"Desempenho de Buscas Usuários",
  desbuscaespecies:"Desempenho de Buscas Espécies",
  navegacaomobile:"Responsividade Navegação Mobile",
  navegacaotablet:"Responsividade Navegação Tablet",
  pessoa_fatura:"Integração Cliente e Faturamento",
  pessoa_dav:"Integração Cliente e DAV",
  funcionario_fatura:"Integração Funcionário e Faturamento",
  funcionario_dav:"Integração Funcionário e DAV",
  produto_fatura:"Integração Produto e Faturamento",
  produto_dav:"Integração Produto e DAV",
  fornecedor_produto:"Integração Fornecedor e Produto",
  usuario_funcionario:"Integração Usuário e Funcionário",
  perfil_usuario:"Integração Perfil de Acesso e Usuários",
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
    showToast("⚠️ Não foi possível conectar ao servidor de testes!", "error");
  }

  log.scrollTop = log.scrollHeight
}

function toggleSection(id) {
  const sections = ["cadastros", "validacoes", "edicoes", "exclusoes", "buscas", "desempenho", "responsividade", "integracao", "finalizacao"];
  
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
 if(document.getElementById("log").textContent != "")
 {
    document.getElementById("log").textContent = "";
    showToast("🧹 Logs removidos com sucesso!", "success");
    return;
 }
 else{
    showToast("⚠️ Nenhum log encontrado para limpeza.", "error");
    return;
 }   
 }

function sair() {
  
  limparLogs();  
  window.location.href = "about:blank";
  // Se quiser apenas fechar a aba (funciona em alguns navegadores):
  // window.close();
}

function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.className = "show " + type;

  setTimeout(() => {
    toast.className = toast.className.replace("show", "").trim();
  }, 3000);
}

function downloadLogs() {
  const logContent = document.getElementById("log").innerText;  
  if (!logContent.trim()) {
    showToast("⚠️ Não há logs para descarregar!", "error");
    return;
  }  
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0'); // meses começam em 0
  const year = now.getFullYear();  
  const dateStr = `${day}-${month}-${year}`;  
  const randomNumber = Math.floor(Math.random() * 1000000) + Date.now();  
  const fileName = `logs_${dateStr}_${randomNumber}.txt`;
  const blob = new Blob([logContent], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(url);
  showToast("✅ Logs descarregados com sucesso!");
}

async function executarTodos() {

  const botoesAtivos = document.querySelectorAll('button.ativo');
  botoesAtivos.forEach(btn => btn.classList.remove('ativo'));
  
  const btnTodos = document.querySelector(`button[onclick*='executarTodos']`);

  const sections = ["cadastros", "validacoes", "edicoes", "exclusoes", "buscas", "desempenho", "responsividade", "integracao"];
  sections.forEach(sec => {
    const el = document.getElementById(sec);
    if (el) el.style.display = "none";
  });
  
  const comandos = [
    'login', 'seguranca','integridade', 'navegacao', 'empresas', 'pessoas', 'pessoacontribuinte', 'fornecedor',
    'usuarios','perfil', 'funcionarios','produtos', 'faturamento', 'dav', 'especies','cotacao',
    'grupos','subgrupos','marcas', 'edicaopessoas', 
    'edicaoprodutos', 'edicaofuncionarios','edicaocotacao','edicaoespecies',  
    'edicaogrupos','edicaosubgrupos', 'edicaomarcas', 'finalizarvenda', 'compra',
    'buscapessoas', 'buscaprodutos', 'buscafaturamento', 
    'buscadav', 'buscalote', 'buscausuarios','buscaperfil', 'buscaespecies',
    'buscacotacao', 'buscagrupos', 'buscasubgrupos', 'buscamarcas', 'buscafuncionario',          
    'exclusaopessoas', 'exclusaoprodutos', 'exclusaofuncionarios', 'exclusaousuarios',
    'exclusaoespecies', 'exclusaocotacao', 'exclusaogrupos',  
    'exclusaosubgrupos', 'exclusaomarcas', 
    'validacaopessoas', 'validacaousuarios', 'exclusaoperfil', 'validacaoperfil',  'validacaofuncionarios', 
    'validacaoprodutos', 'validacaoespecies', 'validacaocotacao' ,  
    'validacaogrupos', 'validacaosubgrupos', 'validacaomarcas',    
    'desempenhologin', 'cadastropessoas', 'cadastroprodutos',
    'cadastrofuncionarios', 'cadastrousuarios', 'cadastroespecies',
    'desbuscapessoas', 'desbuscaprodutos', 'desbuscafuncionarios',
    'desbuscausuarios', 'desbuscaespecies', 'navegacaomobile',
    'navegacaotablet', 'pessoa_fatura', 'pessoa_dav', 
    'fornecedor_produto', 'usuario_funcionario', 'perfil_usuario',
    'funcionario_fatura', 'funcionario_dav',  'produto_fatura', 'produto_dav'    
  ]

  for (const cmd of comandos) {
    await executar(cmd)
  }
}