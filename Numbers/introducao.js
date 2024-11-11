let numero = 1234567.890

console.log(numero.toFixed(2)) // numero de casas decimais o numero tem, esse metodo trasforma o numero em string
console.log(typeof numero.toFixed(2))

console.log(numero.toPrecision(3)) // é a quantidade de numeros que eu quero

numero = 12.34567

console.log(numero.toExponential()) // transforma o numero em notação cientifica, e recebe um paramentro para a quantidade de casas decimais no numero
console.log(numero.toExponential(4))