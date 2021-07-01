function validateCPF(cpf){
    var validateFirstDigit;
    var validateSecondDigit;
    var addDigits = 0;

    /*
    * removendo máscara do cpf como pontos, traço e underline
    * utilizamos regex para remover os sinais(. - _)  
    */
    cpf = cpf.replace(/\./g, '');
    cpf = cpf.replace(/\-/g, '');
    cpf = cpf.replace(/\_/g, '');

    //verificando tamanho da informação enviada
    if(cpf == '' || cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf)){
        return false;
    }
}

function validacaoCPF(numero_doc){
    // proteção #1 -> verificando se todos os números são iguais, utilizando REGEX
    // REGEX de validação /^(\d)\1{10}$/

    if(numero_doc == '' || numero_doc.toString().length != 11 || /^(\d)\1{10}$/.test(numero_doc)){
        return false;
    } else{
        // proteção #2 -> validação do primeiro digito
        
        for(let i = 1; i <= 9; i++){
            soma += parseInt(numero_doc.substring(i - 1, i)) * (11 - i);
        }

        validacao_digito_1 = (soma * 10) % 11;

        // proteção #3 -> caso resultado seja 10 ou 11, informamos o valor 0
        if((validacao_digito_1 == 10) || (validacao_digito_1 == 11)){
            validacao_digito_1 = 0
        }

        // verificando se a validação do digito 1 e true ou false
        if(validacao_digito_1 != parseInt(numero_doc.substring(9, 10))){
            return false;
        } else{
            // proteção #4 -> validação do segundo digito
            
            soma = 0
            
            for(let i = 1; i <= 10; i++){
                soma += parseInt(numero_doc.substring(i - 1, i)) * (12 - i);
            }

            validacao_digito_2 = (soma * 10) % 11;

            // proteção #5 -> verificando se o resultado e igual a 10 ou 11, caso seja informamos o valor 0
            if((validacao_digito_2 == 10) || (validacao_digito_2 == 11)){
                validacao_digito_2 = 0
            }

            //verificando se a validação do digito 2 e true ou false
            if(validacao_digito_2 != parseInt(numero_doc.substring(10, 11))){
                return false;
            } else {
                return true;
            }
        }
    }
}