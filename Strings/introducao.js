let str1 = "Minha String Bacanuda"
//console.log(str1.replace("i", "o")) // usando expressão regular
console.log(str1.replace("i", "o")) // normal
console.log(str1)

// console.log(str1.indexOf("string")) // retorna a primeira ocorrencia
// console.log(str1.lastIndexOf("i")) // retorna a ultima ocorrencia
// console.log(str1.indexOf("kjhsafjhs")) // se não existir nada ele retorna -1
// console.log(str1.includes("minha")) // usando includes
// console.log(str1.indexOf("minha") >= 0) // usando includes atravez do indexOf

console.log(str1.slice(2, 7)) // 
console.log(str1.substring(2, 7))

console.log(str1.slice(-5, -2)) // aceita valores negativos
console.log(str1.substring(-5, -2)) //não aceita valores negativos

console.log(str1.slice(8, 1)) // não aceita numero incial maior q o numero final
console.log(str1.substring(8, 1)) // aceita numero inicial menor q o numero final

console.log(str1.toUpperCase())
console.log(str1.toLowerCase())
console.log(str1)

let srtAsObj = new String("minha string com objeto")
console.log(srtAsObj)
console.log(srtAsObj.valueOf())
console.log(srtAsObj.toString())

/*str1 = `
     
    teste
               
`*/
console.log(str1)
console.log("--------------------")
console.log(str1.trim()) // remove todos os espaços
console.log("--------------------")
console.log(str1.trimEnd()) // remove espaços no final
console.log("--------------------")
console.log(str1.trimStart()) // remove espaços no começo
console.log("--------------------")
console.log(str1)

str1 = "0123456789"
console.log(str1.padEnd(20)) // coloca um preenchimento na variavel
console.log(str1.padEnd(20, "*")) // coloca um preenchimento na variavel no final
//console.log(str1.padStart(20, "*")) // coloca um preenchimento na variavel no inicio
console.log(str1.padEnd(20, "*").length)
console.log(str1)

let telefone = "91234-2345"
function mascaraNumero(numero){
    let numeroEdit = numero.slice(0, 1)
    console.log(numeroEdit.padEnd(10, "*"))
}

mascaraNumero(telefone)
// console.log(telefone)



/*
replace(),          replaceAll() **
indexOf(),          lastIndexOf(),          includes()*,
slice(),            substring(),            split(),
toLowerCase(),      toUpperCase(),
valueOf(),
trim()*,            trimEnd()*,             trimStart()*,
padStart()*,        padEnd()*,
startsWith()*,      endsWith()*,
charAt(),           charCodeAt()            e length */