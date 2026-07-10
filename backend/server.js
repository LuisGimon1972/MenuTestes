import express from 'express'
import cors from 'cors'
import { spawn } from 'child_process'
import fs from 'fs'
import path from 'path'

const app = express()

app.use(cors())
app.use(express.json())

function limparCache() {
  const cachePath = path.join(process.env.USERPROFILE, 'AppData', 'Local', 'Temp', 'playwright-transform-cache')
  try {
    if (fs.existsSync(cachePath)) {
      fs.rmSync(cachePath, { recursive: true, force: true })
      console.log('🧹 Cache do Playwright removido!')
    }
  } catch (error) {
    console.error('Erro ao limpar cache:', error)
  }
}

app.post('/executar', (req, res) => {
  
  const { cmd } = req.body

  const comandos = {
    login: 'npx playwright test tests/setup.spec.ts --headed',
    navegacao: 'npx playwright test tests/navegacao.spec.ts --headed',
    seguranca: 'npx playwright test tests/seguranca.spec.ts --headed',
    integridade: 'npx playwright test tests/integridade.spec.ts --headed',
    pessoas: 'npx playwright test tests/cadastros/pessoas.spec.ts --headed',
    fornecedor: 'npx playwright test tests/cadastros/fornecedor.spec.ts --headed',
    usuarios: 'npx playwright test tests/cadastros/usuarios.spec.ts --headed',
    perfil: 'npx playwright test tests/cadastros/perfil.spec.ts --headed',
    funcionarios: 'npx playwright test tests/cadastros/funcionarios.spec.ts --headed',
    produtos: 'npx playwright test tests/cadastros/produtos.spec.ts --headed',
    faturamento: 'npx playwright test tests/cadastros/faturamento.spec.ts --headed',
    dav: 'npx playwright test tests/cadastros/dav.spec.ts --headed',
    compra: 'npx playwright test tests/cadastros/compra.spec.ts --headed',
    especies: 'npx playwright test tests/cadastros/especies.spec.ts --headed',
    cotacao: 'npx playwright test tests/cadastros/cotacao.spec.ts --headed',
    grupos: 'npx playwright test tests/cadastros/grupo.spec.ts --headed',
    subgrupos: 'npx playwright test tests/cadastros/subgrupo.spec.ts --headed',     
    marcas: 'npx playwright test tests/cadastros/marca.spec.ts --headed',     
    validacaopessoas: 'npx playwright test tests/validacoes/validacaopessoas.spec.ts --headed',
    validacaoprodutos: 'npx playwright test tests/validacoes/validacaoprodutos.spec.ts --headed',
    validacaofuncionarios: 'npx playwright test tests/validacoes/validacaofuncionarios.spec.ts --headed',
    validacaoespecies: 'npx playwright test tests/validacoes/validacaoespecies.spec.ts --headed',
    validacaousuarios: 'npx playwright test tests/validacoes/validacaousuarios.spec.ts --headed',
    validacaocotacao: 'npx playwright test tests/validacoes/validacaocotacao.spec.ts --headed',
    validacaoperfil: 'npx playwright test tests/validacoes/validacaoperfil.spec.ts --headed',
    validacaogrupos: 'npx playwright test tests/validacoes/validacaogrupos.spec.ts --headed',
    validacaosubgrupos: 'npx playwright test tests/validacoes/validacaosubgrupos.spec.ts --headed',
    validacaomarcas: 'npx playwright test tests/validacoes/validacaomarcas.spec.ts --headed',
    buscapessoas: 'npx playwright test tests/buscas/buscapessoas.spec.ts --headed',
    buscaprodutos: 'npx playwright test tests/buscas/buscaprodutos.spec.ts --headed',
    buscafaturamento: 'npx playwright test tests/buscas/buscafaturamento.spec.ts --headed',
    buscadav: 'npx playwright test tests/buscas/buscadav.spec.ts --headed',
    buscalote: 'npx playwright test tests/buscas/buscalote.spec.ts --headed',
    buscausuarios: 'npx playwright test tests/buscas/buscausuarios.spec.ts --headed',
    buscaperfil: 'npx playwright test tests/buscas/buscaperfil.spec.ts --headed',
    buscaespecies: 'npx playwright test tests/buscas/buscaespecies.spec.ts --headed',
    buscacotacao: 'npx playwright test tests/buscas/buscacotacao.spec.ts --headed',
    buscagrupos: 'npx playwright test tests/buscas/buscagrupos.spec.ts --headed',
    buscasubgrupos: 'npx playwright test tests/buscas/buscasubgrupos.spec.ts --headed',
    buscamarcas: 'npx playwright test tests/buscas/buscamarcas.spec.ts --headed',    
    buscafuncionario: 'npx playwright test tests/buscas/buscafuncionario.spec.ts --headed',    
    edicaopessoas: 'npx playwright test tests/edicao/edicaopessoas.spec.ts --headed',    
    edicaoprodutos: 'npx playwright test tests/edicao/edicaoprodutos.spec.ts --headed',   
    edicaofuncionarios: 'npx playwright test tests/edicao/edicaofuncionarios.spec.ts --headed',   
    edicaoespecies: 'npx playwright test tests/edicao/edicaoespecies.spec.ts --headed',    
    edicaocotacao: 'npx playwright test tests/edicao/edicaocotacao.spec.ts --headed',    
    edicaogrupos: 'npx playwright test tests/edicao/edicaogrupos.spec.ts --headed',    
    edicaosubgrupos: 'npx playwright test tests/edicao/edicaosubgrupos.spec.ts --headed',    
    edicaomarcas: 'npx playwright test tests/edicao/edicaomarcas.spec.ts --headed',    
    exclusaopessoas: 'npx playwright test tests/exclusao/exclusaopessoas.spec.ts --headed',    
    exclusaoprodutos: 'npx playwright test tests/exclusao/exclusaoprodutos.spec.ts --headed',    
    exclusaofuncionarios: 'npx playwright test tests/exclusao/exclusaofuncionarios.spec.ts --headed',    
    exclusaousuarios: 'npx playwright test tests/exclusao/exclusaousuarios.spec.ts --headed',    
    exclusaoperfil: 'npx playwright test tests/exclusao/exclusaoperfil.spec.ts --headed',    
    exclusaoespecies: 'npx playwright test tests/exclusao/exclusaoespecies.spec.ts --headed',    
    exclusaocotacao: 'npx playwright test tests/exclusao/exclusaocotacao.spec.ts --headed',    
    exclusaogrupos: 'npx playwright test tests/exclusao/exclusaogrupos.spec.ts --headed',    
    exclusaosubgrupos: 'npx playwright test tests/exclusao/exclusaosubgrupos.spec.ts --headed',        
    exclusaomarcas: 'npx playwright test tests/exclusao/exclusaomarcas.spec.ts --headed',    
    desempenhologin: 'npx playwright test tests/desempenho/desempenhologin.spec.ts --headed',    
    cadastropessoas: 'npx playwright test tests/desempenho/cadastropessoas.spec.ts --headed',    
    cadastroprodutos: 'npx playwright test tests/desempenho/cadastroprodutos.spec.ts --headed',    
    cadastrofuncionarios: 'npx playwright test tests/desempenho/cadastrofuncionarios.spec.ts --headed',    
    cadastrousuarios: 'npx playwright test tests/desempenho/cadastrousuarios.spec.ts --headed',    
    cadastroespecies: 'npx playwright test tests/desempenho/cadastroespecies.spec.ts --headed',    
    desbuscapessoas: 'npx playwright test tests/desempenho/desbuscapessoas.spec.ts --headed',    
    desbuscaprodutos: 'npx playwright test tests/desempenho/desbuscaprodutos.spec.ts --headed',    
    desbuscafuncionarios: 'npx playwright test tests/desempenho/desbuscafuncionarios.spec.ts --headed',    
    desbuscausuarios: 'npx playwright test tests/desempenho/desbuscausuarios.spec.ts --headed',    
    desbuscaespecies: 'npx playwright test tests/desempenho/desbuscaespecies.spec.ts --headed',    
    navegacaomobile: 'npx playwright test tests/responsividade/navegacaomobile.spec.ts --headed',    
    navegacaotablet: 'npx playwright test tests/responsividade/navegacaotablet.spec.ts --headed',    
    pessoa_fatura: 'npx playwright test tests/integracao/pessoa_fatura.spec.ts --headed',    
    pessoa_dav: 'npx playwright test tests/integracao/pessoa_dav.spec.ts --headed',    
    funcionario_fatura: 'npx playwright test tests/integracao/funcionario_fatura.spec.ts --headed',    
    funcionario_dav: 'npx playwright test tests/integracao/funcionario_dav.spec.ts --headed',    
    produto_fatura: 'npx playwright test tests/integracao/produto_fatura.spec.ts --headed',    
    produto_dav: 'npx playwright test tests/integracao/produto_dav.spec.ts --headed',        
    fornecedor_produto: 'npx playwright test tests/integracao/fornecedor_produto.spec.ts --headed',        
    usuario_funcionario: 'npx playwright test tests/integracao/usuario_funcionario.spec.ts --headed',   
    perfil_usuario: 'npx playwright test tests/integracao/perfil_usuario.spec.ts --headed',        
    todos: 'npx playwright test --headed'
  }

    const comando = comandos[cmd]
  if (!comando) {
    return res.status(400).send('Comando inválido!')
  }

  limparCache()

  const [programa, ...args] = comando.split(' ')
  const processo = spawn(programa, args, { cwd: 'C:/SGMWPyTestes', shell: true })

  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Transfer-Encoding': 'chunked'
  })

  processo.stdout.on('data', (data) => {
    res.write(data.toString()) 
  })

  processo.stderr.on('data', (data) => {
    res.write(data.toString()) 
  })

  processo.on('close', (code) => {
    res.write(`\nProcesso finalizado!`)
    res.end()
    limparCache()
  })
})

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000')
})
