function fn(cb){
    console.log("executar ação de callback")
    console.log(typeof cb)
    cb()
}