<h1 align="center"> 
  authenticate-docs 
  
  ![GitHub language count](https://img.shields.io/github/languages/count/HerdesonMourao/authenticate-docs)
  ![GitHub repo size](https://img.shields.io/github/repo-size/HerdesonMourao/authenticate-docs)
  ![GitHub issues](https://img.shields.io/github/issues/HerdesonMourao/authenticate-docs)
  ![GitHub closed issues](https://img.shields.io/github/issues-closed/HerdesonMourao/authenticate-docs)
  ![GitHub pull requests](https://img.shields.io/github/issues-pr/HerdesonMourao/authenticate-docs)
  ![GitHub](https://img.shields.io/github/license/HerdesonMourao/authenticate-docs)
  ![GitHub last commit](https://img.shields.io/github/last-commit/HerdesonMourao/authenticate-docs)
</h1>

### Descrição do projeto

Pacote de script para validação/autenticação de CPF e CNPJ brasileiros.

### Instalação

Para instalar o autenticador basta executar em seu projeto o comando `npm install authenticate-docs`

### Utilizando o autenticador

Para utilizar basta inserir o sequinte comando:

- #### CPF

  ```js
  const { validateCPF } = require("authenticate-docs");
  ```

  Na função pode ser passado o CPF tanto como uma string, como um inteiro.

  - Passando string com máscara:

    ```js
    console.log(validateCPF("XXX.XXX.XXX-XX"));

    //se for um CPF valido irá retornar TRUE caso contrário retorna FALSE
    ```

  - Passando string sem máscara:

    ```js
    console.log(validateCPF("XXXXXXXXXXX"));

    //se for um CPF valido irá retornar TRUE caso contrário retorna FALSE
    ```

  - Passando inteiro:

    ```js
    console.log(validateCPF(XXXXXXXXXXX));

    //se for um CPF valido irá retornar TRUE caso contrário retorna FALSE
    ```

- #### CNPJ

  ```js
  const { validateCNPJ } = require("authenticate-docs");
  ```

  Na função pode ser passado o CNPJ tanto como uma string, como um inteiro.

  - Passando string com máscara:

    ```js
    console.log(validateCNPJ("XX.XXX.XXX/XXXX-XX"));

    //se for um CNPJ valido irá retornar TRUE caso contrário retorna FALSE
    ```

  - Passando string sem máscara:

    ```js
    console.log(validateCNPJ("XXXXXXXXXXXXXX"));

    //se for um CNPJ valido irá retornar TRUE caso contrário retorna FALSE
    ```

  - Passando inteiro:

    ```js
    console.log(validateCNPJ(XXXXXXXXXXXXXX));

    //se for um CNPJ valido irá retornar TRUE caso contrário retorna FALSE
    ```

### Autor

[Herdeson Mourão](https://github.com/HerdesonMourao)
