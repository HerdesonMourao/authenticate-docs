function validateCPF(cpf) {
  //convetendo o valor recebido para string
  cpf = cpf.toString();

  /*
   * removendo máscara do cpf como pontos, traço e underline
   * utilizando o regex fazer essa remoção
   */
  cpf = cpf.replace(/[.-_]/g, "");

  // aqui e verificado se o cpf tem 11 caracteres e verifica se todos os caracteres são iguais
  if (cpf == "" || cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf)) {
    return false;
  } else {
    var amount = 0;

    for (let i = 1; i <= 9; i++) {
      amount += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    var validateFirstDigit = (amount * 10) % 11;

    // se for maior que 10 o digito verificador e 0
    validateFirstDigit = validateFirstDigit >= 10 ? 0 : validateFirstDigit;

    // confirmar se o validateFirstDigit e igual ao 10° caractere do cpf
    if (validateFirstDigit != parseInt(cpf.substring(9, 10))) {
      return false;
    } else {
      amount = 0;

      for (let i = 1; i <= 10; i++) {
        amount += parseInt(cpf.substring(i - 1, i)) * (12 - i);
      }

      var validateSecondDigit = (amount * 10) % 11;

      // se for maior que 10 o digito verificador e 0
      validateSecondDigit = validateSecondDigit >= 10 ? 0 : validateSecondDigit;

      // confirmar se o validateSecondDigit e igual ao 11° caractere do cpf
      const compareElement = validateSecondDigit != parseInt(cpf.substring(10, 11)) ? false : true;

      return compareElement;
    }
  }
}

function validateCNPJ(cnpj) {
  //convetendo o valor recebido para string
  cnpj = cnpj.toString();

  /*
   * removendo máscara do cnpj como pontos, traço, barra e underline
   * utilizando o regex fazer essa remoção
   */
  cnpj = cnpj.replace(/[./\-_]/g, "");

  // aqui e verificado se o cpf tem 14 caracteres e verifica se todos os caracteres são iguais
  if (cnpj == "" || cnpj.toString().length != 14 || /^(\d)\1{13}$/.test(cnpj)) {
    return false;
  } else {
    var amount = 0;
    var valueMultiplication = 2;

    for (let i = 12; i >= 1; i--) {
      amount += parseInt(cnpj.substring(i - 1, i)) * valueMultiplication;

      if (valueMultiplication == 9) {
        valueMultiplication = 2;
      } else {
        valueMultiplication++;
      }
    }

    var validateFirstDigit = 11 - (amount % 11);

    // se for maior que 10 o digito verificador e 0
    validateFirstDigit = validateFirstDigit >= 10 ? 0 : validateFirstDigit;

    // confirmar se o validateFirstDigit e igual ao 13° caractere do cnpj
    if (validateFirstDigit != parseInt(cnpj.substring(12, 13))) {
      return false;
    } else {
      amount = 0;
      valueMultiplication = 2;

      for (let i = 13; i >= 1; i--) {
        amount += parseInt(cnpj.substring(i - 1, i)) * valueMultiplication;

        if (valueMultiplication == 9) {
          valueMultiplication = 2;
        } else {
          valueMultiplication++;
        }
      }

      var validateSecondDigit = 11 - (amount % 11);

      // se for maior que 10 o digito verificador e 0
      validateSecondDigit = validateSecondDigit >= 10 ? 0 : validateSecondDigit;

      // confirmar se o validateSecondDigit e igual ao 14° caractere do cnpj
      const compareElement = validateSecondDigit != parseInt(cnpj.substring(13, 14)) ? false : true;

      return compareElement;
    }
  }
}

module.exports = {
  validateCPF,
  validateCNPJ,
};
