// =========================================================
// 1. CONFIGURAÇÕES E DICIONÁRIOS GLOBAIS
// =========================================================

const SECOES_SISTEMA = [
  "cadastros", "cadastrosbas", "cadastrosfin", "validacoes", 
  "edicoes", "exclusoes", "buscas", "desempenho", 
  "responsividade", "integracao", "finalizacao"
];

const RELACAO_COMANDO_SECAO = {
  empresas: "cadastros", pessoas: "cadastros", pessoacontribuinte: "cadastros", fornecedor: "cadastros", 
  produtos: "cadastros", usuarios: "cadastros", perfil: "cadastros", funcionarios: "cadastros",   
  especies: "cadastrosbas", cotacao: "cadastrosbas", grupos: "cadastrosbas", subgrupos: "cadastrosbas", 
  marcas: "cadastrosbas", centrocusto: "cadastrosbas", planoconta: "cadastrosbas", credenciadora: "cadastrosbas",
  vendas: "cadastrosfin", dav: "cadastrosfin", pagar: "cadastrosfin", receber: "cadastrosfin", caixa: "cadastrosfin", bancos: "cadastrosfin",
  recebimento: "cadastrosfin", validacaopessoas: "validacoes", validacaoprodutos: "validacoes", 
  validacaofuncionarios: "validacoes", validacaoespecies: "validacoes", validacaousuarios: "validacoes", 
  validacaocotacao: "validacoes", validacaoperfil: "validacoes", validacaogrupos: "validacoes", 
  validacaosubgrupos: "validacoes", validacaomarcas: "validacoes", edicaopessoas: "edicoes", 
  edicaofuncionarios: "edicoes", edicaoprodutos: "edicoes", edicaoespecies: "edicoes", 
  edicaocotacao: "edicoes", edicaogrupos: "edicoes", edicaosubgrupos: "edicoes", edicaomarcas: "edicoes", 
  finalizarvenda: "finalizacao", compra: "finalizacao", exclusaopessoas: "exclusoes", 
  exclusaoprodutos: "exclusoes", exclusaofuncionarios: "exclusoes", exclusaoespecies: "exclusoes", 
  exclusaocotacao: "exclusoes", exclusaogrupos: "exclusoes", exclusaosubgrupos: "exclusoes", 
  exclusaomarcas: "exclusoes", exclusaocentrocusto: "exclusoes", exclusaoplanoconta: "exclusoes", exclusaocredenciadora: "exclusoes",
  buscapessoas: "buscas", buscaprodutos: "buscas", buscausuarios: "buscas",
  buscafaturamento: "buscas", buscadav: "buscas", buscaperfil: "buscas", buscaespecies: "buscas", 
  buscacotacao: "buscas", buscagrupos: "buscas", buscasubgrupos: "buscas", buscalote: "buscas", 
  buscamarcas: "buscas", buscafuncionario: "buscas", desempenhologin: "desempenho", 
  cadastropessoas: "desempenho", cadastroprodutos: "desempenho", cadastrofuncionarios: "desempenho", 
  cadastrousuarios: "desempenho", cadastroespecies: "desempenho", desbuscapessoas: "desempenho", 
  desbuscaprodutos: "desempenho", desbuscafuncionarios: "desempenho", desbuscausuarios: "desempenho", 
  desbuscaespecies: "desempenho", navegacaomobile: "responsividade", navegacaotablet: "responsividade",
  pessoa_fatura: "integracao", pessoa_dav: "integracao", funcionario_fatura: "integracao",
  funcionario_dav: "integracao", produto_fatura: "integracao", produto_dav: "integracao",
  fornecedor_produto: "integracao", usuario_funcionario: "integracao", perfil_usuario: "integracao"
};

const DICIONARIO_COMANDOS = {
  login: "Autenticação do Sistema", 
  seguranca: "Segurança do Sistema", 
  navegacao: "Navegação do Sistema",  
  empresas: "Cadastro de Empresas", 
  pessoas: "Cadastro de Clientes Não Contribuintes",
  pessoacontribuinte: "Cadastro de Clientes Contribuintes", 
  fornecedor: "Cadastro de Fornecedores", 
  produtos: "Cadastro de Produtos",
  usuarios: "Cadastro de Usuários", 
  perfil: "Cadastro de Perfil de Acesso", 
  funcionarios: "Cadastro de Funcionários",
  pagar: "Cadastro de Pagamento", 
  receber: "Cadastro de Recebimento",
  caixa: "Cadastro do Caixa", 
  bancos: "Cadastro de Bancos", 
  vendas: "Cadastro de Vendas", 
  dav: "Cadastro de DAV",  
  especies: "Cadastro de Espécies", 
  cotacao: "Cadastro de Cotação de moedas", 
  grupos: "Cadastro de Grupos",
  subgrupos: "Cadastro de Subgrupos", 
  marcas: "Cadastro de Marcas", 
  centrocusto: "Cadastro de Centro de custo", 
  planoconta: "Cadastro de Plano de Contas", 
  credenciadora: "Cadastro de Credenciadora/taxa",
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
  buscafuncionario: "Buscas de Funcionários", 
  edicaopessoas: "Edição de Dados Pessoas",
  edicaofuncionarios: "Edição de Dados Funcionários", 
  edicaoprodutos: "Edição de Dados Produtos",
  edicaoespecies: "Edição de Dados Espécies", 
  edicaocotacao: "Edição de Dados Cotação de Moedas",
  edicaogrupos: "Edição de Dados Grupos", 
  edicaosubgrupos: "Edição de Dados Subgrupos",
  edicaomarcas: "Edição de Dados Marcas", 
  finalizarvenda: "Finalizar fatura de venda",
  compra: "Finalizar fatura de Compras", 
  exclusaopessoas: "Exclusão de Dados Pessoas",
  exclusaoprodutos: "Exclusão de Dados Produtos", 
  exclusaofuncionarios: "Exclusão de Dados Funcionários",
  exclusaousuarios: "Exclusão de Dados Usuários", 
  exclusaoperfil: "Exclusão de Dados Perfil de Acesso",
  exclusaoespecies: "Exclusão de Dados Espécies", 
  exclusaocotacao: "Exclusão de Dados Cotação de moedas",
  exclusaogrupos: "Exclusão de Dados Grupos", 
  exclusaosubgrupos: "Exclusão de Dados Subgrupos",
  exclusaomarcas: "Exclusão de Dados Marcas", 
  exclusaocentrocusto: "Exclusão de Dados Centro de Costos", 
  exclusaoplanoconta: "Exclusão de Dados Plano de Contas", 
  exclusaocredenciadora: "Exclusão de Dados Credenciadoras/taxas", 
  desempenhologin: "Desempenho de Login",
  cadastropessoas: "Desempenho de Cadastro Pessoas", 
  cadastroprodutos: "Desempenho de Cadastro Produtos",
  cadastrofuncionarios: "Desempenho de Cadastro Funcionários", 
  cadastrousuarios: "Desempenho de Cadastro Usuários",
  cadastroespecies: "Desempenho de Cadastro Espécies", 
  desbuscapessoas: "Desempenho de Buscas Pessoas",
  desbuscaprodutos: "Desempenho de Buscas Produtos", 
  desbuscafuncionarios: "Desempenho de Buscas Funcionários",
  desbuscausuarios: "Desempenho de Buscas Usuários", 
  desbuscaespecies: "Desempenho de Buscas Espécies",
  navegacaomobile: "Responsividade Navegação Mobile", 
  navegacaotablet: "Responsividade Navegação Tablet",
  pessoa_fatura: "Integração Cliente e Faturamento", 
  pessoa_dav: "Integração Cliente e DAV",
  funcionario_fatura: "Integração Funcionário e Faturamento", 
  funcionario_dav: "Integração Funcionário e DAV",
  produto_fatura: "Integração Produto e Faturamento", 
  produto_dav: "Integração Produto e DAV",
  fornecedor_produto: "Integração Fornecedor e Produto", 
  usuario_funcionario: "Integração Usuário e Funcionário",
  perfil_usuario: "Integração Perfil de Acesso e Usuários", 
  todos: "Execução completa dos testes"
};

const COMANDOS_EXECUCAO_TOTAL = [
  'login', 'seguranca', 'navegacao', 'empresas', 'pessoas', 'pessoacontribuinte', 'fornecedor', 'produtos',
  'usuarios', 'perfil', 'funcionarios',
  'especies', 'cotacao', 'grupos', 'subgrupos', 'marcas', 'centrocusto', 'planoconta', 'credenciadora',
  'vendas', 'dav', 'pagar', 'receber', 'caixa', 'bancos', 'edicaopessoas', 'edicaoprodutos', 'edicaofuncionarios', 'edicaocotacao', 'edicaoespecies',  
  'edicaogrupos', 'edicaosubgrupos', 'edicaomarcas', 'finalizarvenda', 'compra', 'buscapessoas', 'buscaprodutos', 'buscafaturamento', 
  'buscadav', 'buscalote', 'buscausuarios', 'buscaperfil', 'buscaespecies', 'buscacotacao', 'buscagrupos', 'buscasubgrupos', 'buscamarcas', 'buscafuncionario',          
  'exclusaopessoas', 'exclusaoprodutos', 'exclusaofuncionarios', 'exclusaousuarios', 'exclusaoespecies', 'exclusaocotacao', 'exclusaogrupos',  
  'exclusaosubgrupos', 'exclusaomarcas', 'exclusaocentrocusto', 'exclusaoplanoconta', 'exclusaocredenciadora', 
  'validacaopessoas', 'validacaousuarios', 'exclusaoperfil', 'validacaoperfil', 'validacaofuncionarios', 
  'validacaoprodutos', 'validacaoespecies', 'validacaocotacao', 'validacaogrupos', 'validacaosubgrupos', 'validacaomarcas',    
  'desempenhologin', 'cadastropessoas', 'cadastroprodutos', 'cadastrofuncionarios', 'cadastrousuarios', 'cadastroespecies',
  'desbuscapessoas', 'desbuscaprodutos', 'desbuscafuncionarios', 'desbuscausuarios', 'desbuscaespecies', 'navegacaomobile',
  'navegacaotablet', 'pessoa_fatura', 'pessoa_dav', 'fornecedor_produto', 'usuario_funcionario', 'perfil_usuario',
  'funcionario_fatura', 'funcionario_dav', 'produto_fatura', 'produto_dav'    
];


// =========================================================
// 2. LÓGICA PRINCIPAL (COMUNICAÇÃO COM O SERVIDOR)
// =========================================================

async function executar(cmd) {
  const log = document.getElementById('log');
  const nomeComando = DICIONARIO_COMANDOS[cmd] || "Comando não encontrado";

  // 1. Atualiza Botões Ativos
  document.querySelectorAll('button.ativo').forEach(btn => btn.classList.remove('ativo'));
  const botaoAlvo = document.querySelector(`button[onclick*="'${cmd}'"]`) || document.querySelector(`button[onclick*='executarTodos']`);
  if (botaoAlvo) botaoAlvo.classList.add('ativo');

  // 2. Exibe a seção correspondente
  const secaoAlvo = RELACAO_COMANDO_SECAO[cmd];
  if (secaoAlvo) {
    SECOES_SISTEMA.forEach(sec => {
      const el = document.getElementById(sec);
      if (el) el.style.display = (sec === secaoAlvo) ? "block" : "none";
    });
  }  

  // 3. Imprime início do log
  log.innerText += `\n🖥️ Execução de Teste: ${nomeComando}\n`;

  // 4. Faz a requisição ao servidor de testes
  try {
    const res = await fetch('http://localhost:3000/executar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cmd })
    });

    if (!res.ok) throw new Error(`Status ${res.status}`);

    const text = await res.text();
    log.innerText += `${text}\n✔ Finalizado\n`;

  } catch (err) {
    log.innerText += `❌ Erro: ${err.message}\n`;
    showToast("⚠️ Não foi possível conectar ao servidor de testes!", "error");
  }

  // Auto-scroll
  log.scrollTop = log.scrollHeight;
}

async function executarTodos() {
  // Limpa botões ativos e ativa o botão de "Executar Todos" (se houver)
  document.querySelectorAll('button.ativo').forEach(btn => btn.classList.remove('ativo'));
  const btnTodos = document.querySelector(`button[onclick*='executarTodos']`);
  if (btnTodos) btnTodos.classList.add('ativo');

  // Oculta todas as seções durante a execução geral
  SECOES_SISTEMA.forEach(sec => {
    const el = document.getElementById(sec);
    if (el) el.style.display = "none";
  });
  
  showToast("🚀 Iniciando execução em massa...", "success");

  // Executa os comandos sequencialmente
  for (const cmd of COMANDOS_EXECUCAO_TOTAL) {
    await executar(cmd);
  }

  showToast("✅ Todos os testes concluídos!", "success");
}


// =========================================================
// 3. CONTROLE DE INTERFACE (UI)
// =========================================================

function toggleSection(id) {
  SECOES_SISTEMA.forEach(sec => {
    const el = document.getElementById(sec);
    if (!el) return;

    if (sec === id) {      
      el.style.display = (el.style.display === "none" || el.style.display === "") ? "block" : "none";
    } else {
      el.style.display = "none";
    }
  });
}

function limparLogs() {
  const logEl = document.getElementById("log");
  
  if (logEl.textContent.trim() !== "") {
    logEl.textContent = "";
    showToast("🧹 Logs removidos com sucesso!", "success");
  } else {
    showToast("⚠️ Nenhum log encontrado para limpeza.", "error");
  }   
}

function sair() {
  limparLogs();  
  window.location.href = "about:blank";
}

function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.innerText = message;
  toast.className = `show ${type}`;

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
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();  
  const dateStr = `${day}-${month}-${year}`;  
  const randomNumber = Math.floor(Math.random() * 1000000) + Date.now();  
  
  const fileName = `logs_${dateStr}_${randomNumber}.txt`;
  const blob = new Blob([logContent], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  
  document.body.appendChild(a); // Necessário em alguns navegadores
  a.click();
  
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  showToast("✅ Logs descarregados com sucesso!");
}