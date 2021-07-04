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

Pacote de script para validação/autenticação de cpf e cnpj brasileiros.

### Instalação

Para instalar o autenticador basta executar o campo `npm install authenticate-docs`

### Utilizando o autenticador

Para utilizar basta inserir o sequinte comando:

```js
  const { validateCPF } = require('authenticate-docs');
```

Na função pode ser passado o cpf tanto como uma string, como um inteiro.

* Passando string com máscara:
  ```js
    console.log(validateCPF('XXX.XXX.XXX-XX'));
    
    //se for um cpf valido irá retornar TRUE caso contrário retorna FALSE
  ```

* Passando string sem máscara:
  ```js
    console.log(validateCPF('XXXXXXXXXXX'));
    
    //se for um cpf valido irá retornar TRUE caso contrário retorna FALSE
  ```

* Passando inteiro:
  ```js
    console.log(validateCPF(XXXXXXXXXXX));
    
    //se for um cpf valido irá retornar TRUE caso contrário retorna FALSE
  ```
  
### Autor

[Herdeson Mourão](https://github.com/HerdesonMourao)
