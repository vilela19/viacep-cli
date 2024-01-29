# ViaCep CLI 🇧🇷
> Este repositório contém uma Interface de Linha de Comando (CLI) que permite aos usuários acessar detalhes de localizações através da consulta de CEPs ou endereços específicos, utilizando a API ViaCep.

## Comandos Disponíveis

###  Comando "buscar"
> Este comando realiza uma busca por um CEP usando a API ViaCep.

**Uso:**

`
cep buscar <código postal>
`

_Se nenhum código postal for fornecido como argumento, o usuário será solicitado a inserir o código postal durante a execução do comando._

### Comando "busca-local"
> Este comando realiza uma busca por um CEP utilizando três parâmetros obrigatórios (UF, Cidade e Rua) através da API ViaCep.

**Uso:**

`
cep busca-local
`

_Durante a execução do comando, o usuário será solicitado a fornecer a UF, Cidade e Rua._

### Comando "cep"
> O comando "cep" fornece uma visão geral do aplicativo CLI e fornece informações sobre como usar os comandos disponíveis.

**Uso:**

`
cep 
`

_O comando sem argumentos ou com a opção -h exibe a mensagem de ajuda._

## Integração API ViaCep

> O aplicativo utiliza a API ViaCep para recuperar detalhes de localização com base no CEP fornecido. Ele lida com as respostas da API, verificando erros e exibindo mensagens apropriadas.

## Contribuindo
> Se você deseja contribuir para este projeto, sinta-se à vontade para abrir issues ou enviar pull requests. 
