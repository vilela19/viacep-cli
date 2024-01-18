const command = {
  name: 'cep',
  description: '',
  run: async (toolbox) => {
    const {
      print: { highlight },
    } = toolbox

    highlight('Welcome to ViaCep CLI')
  },
}

module.exports = command
