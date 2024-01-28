#ViaCep CLI

## Descrição

Este aplicativo de interface de linha de comando (CLI), foi desenvolvido usando o Gluegun. O objetivo principal deste aplicativo é realizar uma pesquisa de detalhes de localização com base em um determinado CEP usando a API ViaCep.

## Uso

cep `<opções>`

## Opções:

buscar, b `<código postal>`

busca-local, bl

> [!IMPORTANTE]
> ao executar o comando busca-local, será perguntado ao usuário os 3 três parâmetros obrigatórios.

## Detalhes dos Comandos
| Nome   | Alias | Descrição                                                           |
| ------ | ----- | ------------------------------------------------------------------- |
| buscar | b     | Este comando realiza uma busca por um CEP usando a API ViaCep.      |
| busca-local | bl     | Este comando realiza uma busca por um CEP utilizando três parâmetros obrigatórios (UF, Cidade e Rua) através da API ViaCepViaCep.      |

## Integração API ViaCep

O aplicativo utiliza a API ViaCep para recuperar detalhes de localização com base no CEP fornecido. Ele lida com as respostas da API, verificando erros e exibindo mensagens apropriadas.