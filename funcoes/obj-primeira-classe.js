function fn(cb){
    console.log("executar ação de callback")
    console.log(typeof cb)
    cb()
}

function callback() {
    console.log("função passada por parametro")
}

fn(callback)

const obj = {
    callback
}

obj.callback()