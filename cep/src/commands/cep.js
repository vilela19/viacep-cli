const help_message = `
O aplicativo CLI permite a recuperação de detalhes de localização com base em códigos postais usando a API ViaCep.

Uso:
      cep <opções>

Opções:
      search, s <código postal>
`

module.exports = {
  name: 'cep',
  description: '',
  run: async (toolbox) => {
    const {
      print: { highlight, info },
      parameters: { options, first },
    } = toolbox

    if (options.h || first === 'help' || Object.keys(options).length === 0) {
      highlight('Bem-vindo(a) ao ViaCep CLI')
      info(help_message)
    }
  },
}
