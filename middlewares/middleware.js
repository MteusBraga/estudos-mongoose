exports.middlewareGlobal = (req, res, next) => {
    console.log('passando pelo middleware global')
    next()
}

exports.outroMiddleware = (req, res, next)=>{
    console.log('outro middle ware')
    next()
}