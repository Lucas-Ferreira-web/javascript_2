function media() {
    let soma = 0
    let media = 0
    for(let i = 0; i < arguments.length; i++){
        if(typeof arguments[i] !== "number"){
            throw Error("digite apenas numeros")
        } else {
            soma += arguments[i]
            media = soma /  arguments.length
        }
        
    }
    return media
}

console.log(media(4).toFixed(2))