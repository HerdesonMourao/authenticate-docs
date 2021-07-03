function validateCPF(cpf){
    var validateFirstDigit;
    var validateSecondDigit;
    var compareElement;
    var amount = 0;

    /*
    * removendo máscara do cpf como pontos, traço e underline
    * utilizando o regex fazer essa remoção  
    */   
    cpf = cpf.replace(/\./g, '');
    cpf = cpf.replace(/\-/g, '');
    cpf = cpf.replace(/\_/g, '');

    // aqui e verificado se o cpf tem 11 caracteres e verifica se todos os caracteres são iguais
    if(cpf == '' || cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf)){
        return false;
    } else{
        for(let i = 1; i <= 9; i++){
            amount += parseInt(cpf.substring(i - 1, i)) * (11 - i);
        }

        validateFirstDigit = (amount * 10) % 11;

        // se for maior que 10 o digito verificador e 0
        validateFirstDigit = validateFirstDigit >= 10 ? 0 : validateFirstDigit;

        // confirmar se o validateFirstDigit e igual ao 10° caractere do cpf
        if(validateFirstDigit != parseInt(cpf.substring(9, 10))){
            return false;
        } else{
            amount = 0;
            
            for(let i = 1; i <= 10; i++){
                amount += parseInt(cpf.substring(i - 1, i)) * (12 - i);
            }

            validateSecondDigit = (amount * 10) % 11;

            // se for maior que 10 o digito verificador e 0
            validateSecondDigit = validateSecondDigit >= 10 ? 0 : validateSecondDigit;

            // confirmar se o validateFirstDigit e igual ao 11° caractere do cpf
            compareElement = validateSecondDigit != parseInt(cpf.substring(10, 11)) ? false : true;

            return compareElement;          
        }        
    }
}

module.exports = {
    validateCPF
}