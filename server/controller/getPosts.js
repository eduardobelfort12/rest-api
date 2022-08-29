const knex = require('../database/dbConnect')


const GetPosts = async (req, res) => {
    await knex.select('*').from('tb_blog').where('id', req.params.id)
    .then((data) => {
        console.log(data)
        res.status(200).json(data)
    })
    .catch((err) => { 
        console.log(err)
        res.status(401).json({Mensagem: "Erro ao buscar Post!"})
    })
}

module.exports = {GetPosts}