#ViaCep CLI

## Descrição

Este aplicativo de interface de linha de comando (CLI), foi desenvolvido usando o Gluegun. O objetivo principal deste aplicativo é realizar uma pesquisa de detalhes de localização com base em um determinado CEP usando a API ViaCep.

## Uso

Para utilizar o comando "search", execute o seguinte:

```bash
cep search <cep>
```

Substitua `<cep>` pelo cep desejado para o qual você deseja recuperar os detalhes do local.

## Detalhes do Comando

| Nome   | Alias | Descrição                                                           |
| ------ | ----- | ------------------------------------------------------------------- |
| search | s     | Este comando realiza uma busca por um CEP usando a API ViaCep.      |

## Integração API ViaCep

O aplicativo utiliza a API ViaCep para recuperar detalhes de localização com base no CEP fornecido. Ele lida com as respostas da API, verificando erros e exibindo mensagens apropriadas.