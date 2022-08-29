const knex = require('../database/dbConnect')

const InsertPosts =  async (req,res) => {
    
    await knex("tb_blog").insert({
    title: req.body.title,
    content: req.body.content
    }).then((data)=> {
        console.log(data)
        res.status(200).json({message: "Post inserido com sucesso"})
    }).catch((err) => {
        console.log(err)
        res.status(400).json({message: "Erro ao inserir Post!"})
    })
}

module.exports = {InsertPosts}
