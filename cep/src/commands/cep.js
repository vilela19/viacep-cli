const help_message = `
CLI application enables location details retrieval based on zip codes using the ViaCep API.

Usage:
      cep <options>

Options:
      search, s <zip-code>
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
      highlight('Welcome to ViaCep CLI')
      info(help_message)
    }
  },
}
