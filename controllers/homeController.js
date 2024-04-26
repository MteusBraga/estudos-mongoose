// const HomeModel = require('../models/HomeModel')

// HomeModel.create({
//     titulo: 'Titulo de teste 3',
//     descricao: 'Descricao de teste'
// }).then(dados => console.log(dados)).catch(e => console.log(e))

// HomeModel.find().then(dados => console.log(dados)).catch(e => console.log(e))


exports.paginaInicial = (req, res)=>{
    console.log('respondendo o cliente')
    console.log(req.session.usuario)
    
    res.send('')
}

