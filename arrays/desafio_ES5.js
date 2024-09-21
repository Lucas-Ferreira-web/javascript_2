function sum(){
    const numbers = []
    for(let i = 0; i < arguments.length; i++){
        numbers.push(arguments[i])
    }
    console.log(numbers)
}

sum(1,2,3,4,5)

// sum.call(null, 1,2,3,4,5) // passa varios argumentos
// sum.apply(null, [1,2,3,4,5]) // passa um unico argumento, sendo o mesmo uma Array