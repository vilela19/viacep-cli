# ViaCep CLI 🇧🇷

## Descrição

Esta Interface de Linha de Comando (CLI) permite aos usuários acessar detalhes de localizações através da consulta de CEPs ou endereços específicos, utilizando a API ViaCep.

## Uso

cep `<opções>`

## Opções:

### Buscar

`buscar, b <código postal>`

#### Saída
![foto-1](https://github.com/vilela19/viacep-cli/assets/148297412/61a924ea-9914-483b-8975-6c8a949e5ff0)

### Busca local

`busca-local, bl`

#### Saída
![foto-3](https://github.com/vilela19/viacep-cli/assets/148297412/5d24e4cc-42e2-4f7c-bec9-bc6a0ee78174)


## Detalhes dos Comandos
| Nome   | Alias | Descrição                                                           |
| ------ | ----- | ------------------------------------------------------------------- |
| buscar | b     | Este comando realiza uma busca por um CEP usando a API ViaCep.      |
| busca-local | bl     | Este comando realiza uma busca por um CEP utilizando três parâmetros obrigatórios (UF, Cidade e Rua) através da API ViaCep.      |
| help | --h, help     | Este comando exibe informações detalhadas sobre os comandos da cli.     |

## Integração API ViaCep

O aplicativo utiliza a API ViaCep para recuperar detalhes de localização com base no CEP fornecido. Ele lida com as respostas da API, verificando erros e exibindo mensagens apropriadas.
