//imc: peso / altura**2

/*
    Muito abaixo do peso 16 a 16,9 kg/m2
    Abaixo do peso 17 a 18,4 kg/m2
    Peso normal 18,5 a 24,9 kg/m2
    Acima do peso 25 a 29,9 kg/m2S
    Obesidade Grau I 30 a 34,9 kg/m2
    Obesidade Grau II 35 a 40 kg/m2
    Obesidade Grau III maior que 40 kg/m2
*/


function calcularImc(peso, altura){
    let imc = peso / (altura**2)
    if(typeof peso !== "number" || typeof altura !== "number" || imc === 0){
        throw Error("Passe os valores corretos!")
    }
    return imc
}

let resImc = calcularImc(54, 1.80).toFixed(2)
console.log(resImc)

function msg(parImc){
    if(parImc >= 16 || parImc <= 16.9 ){
        return "muito abaixo do peso"
    }
}

console.log(msg(resImc))

