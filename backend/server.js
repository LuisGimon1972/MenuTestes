import express from 'express'
import cors from 'cors'
import { exec } from 'child_process'

const app = express()

app.use(cors())
app.use(express.json())

app.post('/executar', (req, res) => {
  const { cmd } = req.body

  const comandos = {
    login: 'npx playwright test tests/setup.spec.ts --headed',
    navegacao: 'npx playwright test tests/navegacao.spec.ts --headed',
    pessoas: 'npx playwright test tests/pessoas.spec.ts --headed',
    fornecedor: 'npx playwright test tests/fornecedor.spec.ts --headed',
    usuarios: 'npx playwright test tests/usuarios.spec.ts --headed',
    perfil: 'npx playwright test tests/perfil.spec.ts --headed',
    funcionarios: 'npx playwright test tests/funcionarios.spec.ts --headed',
    produtos: 'npx playwright test tests/produtos.spec.ts --headed',
    especies: 'npx playwright test tests/especies.spec.ts --headed',
    cotacao: 'npx playwright test tests/cotacao.spec.ts --headed',
    grupos: 'npx playwright test tests/grupo.spec.ts --headed',
    subgrupos: 'npx playwright test tests/subgrupo.spec.ts --headed',     
    marcas: 'npx playwright test tests/marca.spec.ts --headed',     
    validacaopessoas: 'npx playwright test tests/validacaopessoas.spec.ts --headed',
    validacaoprodutos: 'npx playwright test tests/validacaoprodutos.spec.ts --headed',
    validacaofuncionarios: 'npx playwright test tests/validacaofuncionarios.spec.ts --headed',
    validacaoespecies: 'npx playwright test tests/validacaoespecies.spec.ts --headed',
    validacaousuarios: 'npx playwright test tests/validacaousuarios.spec.ts --headed',
    validacaocotacao: 'npx playwright test tests/validacaocotacao.spec.ts --headed',
    validacaoperfil: 'npx playwright test tests/validacaoperfil.spec.ts --headed',
    validacaogrupos: 'npx playwright test tests/validacaogrupos.spec.ts --headed',
    validacaosubgrupos: 'npx playwright test tests/validacaosubgrupos.spec.ts --headed',
    validacaomarcas: 'npx playwright test tests/validacaomarcas.spec.ts --headed',
    buscapessoas: 'npx playwright test tests/buscapessoas.spec.ts --headed',
    buscaprodutos: 'npx playwright test tests/buscaprodutos.spec.ts --headed',
    buscafaturamento: 'npx playwright test tests/buscafaturamento.spec.ts --headed',
    buscausuarios: 'npx playwright test tests/buscausuarios.spec.ts --headed',
    buscaperfil: 'npx playwright test tests/buscaperfil.spec.ts --headed',
    buscaespecies: 'npx playwright test tests/buscaespecies.spec.ts --headed',
    buscacotacao: 'npx playwright test tests/buscacotacao.spec.ts --headed',
    buscagrupos: 'npx playwright test tests/buscagrupos.spec.ts --headed',
    buscasubgrupos: 'npx playwright test tests/buscasubgrupos.spec.ts --headed',
    todos: 'npx playwright test --headed'
  }

  const comando = comandos[cmd]

  if (!comando) {
    return res.status(400).send('Comando inválido')
  }

  // 🔥 AQUI
  exec(comando, {
    cwd: 'C:/SGMWPyTestes',
    shell: true
  }, (err, stdout, stderr) => {
    if (err) {
      console.error(err)
      return res.status(500).send(err.message)
    }

    res.send(stdout || 'Sem retorno')
  })
})

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000')
})