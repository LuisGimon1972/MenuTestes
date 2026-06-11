async function executar(cmd) {
  const log = document.getElementById('log')

  log.innerText += '\n⏳ Executando: ' + cmd + '\n'

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

async function executarTodos() {
  const comandos = [
    'login','navegacao','pessoas','usuarios','perfil',
    'funcionarios','produtos','especies','cotacao',
    'grupos','subgrupos','marcas','validacaopessoas','validacaoprodutos'
  ]

  for (const cmd of comandos) {
    await executar(cmd)
  }
}