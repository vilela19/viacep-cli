/* eslint-disable prettier/prettier */
const axios = require('axios')

module.exports = {
  name: 'search',
  alias: ['s'],
  description:
    'This command performs a search for a zip code using the ViaCep API',
  run: async (toolbox) => {
    const {
      parameters,
      print: { error, table, warning },
    } = toolbox

    if (!parameters.first) {
      error('Enter a zip code to perform a search')
      return
    }

    // variável "cep" somente com dígitos.
    let cep = parameters.first.toString().replace(/\D/g, '')

    if (cep != '') {
      //Expressão regular para validar o CEP.
      let validacep = /^[0-9]{8}$/

      if (!validacep.test(cep)) {
        error('Enter a valid zip code to perform the search')
        return
      }

      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      const data = await response.data

      if ('erro' in data) {
        warning('The zip code entered is valid but non-existent')
        return
      }

      table(
        [
          Object.keys(data).map((e) => e.toUpperCase()),
          Object.values(data).map((e) => (e ? e : '-')),
        ],
        {
          format: 'lean',
          style: { 'padding-left': 0, 'padding-right': 4 },
        }
      )
    } else {
      error('Enter a valid zip code to perform the search')
    }
  },
}
