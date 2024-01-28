/* eslint-disable prettier/prettier */
const axios = require('axios')
const { prompt } = require('gluegun/prompt')

module.exports = {
  name: 'search',
  alias: ['s'],
  description: 'Este comando realiza uma busca por um CEP usando a API ViaCep',
  run: async (toolbox) => {
    const {
      parameters,
      print: { error, table, warning },
    } = toolbox

    let cep = parameters.first

    if (!cep) {
      const result = await prompt.ask({
        type: 'input',
        name: 'cep',
        message: 'Qual é o código postal?',
      })
      if (result && result.cep) {
        cep = result.cep
      } else {
        error('Digite um CEP para realizar uma pesquisa')
        return
      }
    }

    // variável "cep" somente com dígitos.
    cep = cep.toString().replace(/\D/g, '')

    if (cep != '') {
      //Expressão regular para validar o CEP.
      let validacep = /^[0-9]{8}$/

      if (!validacep.test(cep)) {
        error('Digite um CEP válido para realizar a pesquisa')
        return
      }

      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      const data = response.data

      if ('erro' in data) {
        warning('O CEP inserido é válido, mas inexistente')
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
      error('Digite um CEP válido para realizar a pesquisa')
    }
  },
}
