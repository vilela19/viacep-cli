/* eslint-disable prettier/prettier */
const axios = require('axios')
const { prompt } = require('gluegun/prompt')

module.exports = {
  name: 'busca-local',
  alias: ['bl'],
  description:
    'Este comando realiza uma busca por um CEP utilizando três parâmetros obrigatórios (UF, Cidade e Rua) através da API ViaCep',
  run: async (toolbox) => {
    const {
      print: { error, table },
    } = toolbox

    const uf = await prompt.ask({
      type: 'input',
      name: 'value',
      message: 'Informe a UF',
    })

    const city = await prompt.ask({
      type: 'input',
      name: 'value',
      message: 'Informe o nome da cidade',
    })

    const street = await prompt.ask({
      type: 'input',
      name: 'value',
      message: 'Informe o nome da rua',
    })

    if (!uf.value || !city.value || !street.value) {
      error(
        'Este comando requer três parâmetros obrigatórios (UF, Cidade e Rua)'
      )
    } else {
      if (city.value.length >= 3 && street.value.length >= 3) {
        try {
          const response = await axios.get(
            `https://viacep.com.br/ws/${uf.value}/${city.value}/${street.value}/json/`
          )

          const data = response.data

          //   const tableData = [
          //     Object.keys(data[0]).map((e) => e.toUpperCase()),
          //     ...data.map((e) => Object.values(e)),
          //   ]

          table(
            [
              Object.keys(data[0]).map((e) => e.toUpperCase()),
              ...data.map((e) => Object.values(e)),
            ],
            {
              format: 'lean',
              style: { 'padding-left': 0, 'padding-right': 4 },
            }
          )
        } catch (e) {
          error('Dados não encontrados ou inválidos')
        }
      } else {
        error(
          'Para os campos "Cidade" e "Logradouro", é necessário inserir no mínimo três caracteres para evitar resultados excessivamente amplos'
        )
      }
    }
  },
}
