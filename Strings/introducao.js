let str1 = "minha string bacanuda"
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