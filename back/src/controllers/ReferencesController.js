const connection = require('../database/connection');//Importa a conexão com o banco de dados

module.exports = {
    async index (request, response){
        const reference = await connection ('references').select('*');//Requerimento de todos(*) os dados da tabela

        return response.json(reference);
    },

    async create (request, response){
        

        await connection ('references').insert({
            "problem": request.body.problem
        });
        return response.json("Done");
    },

    async delete (request,response){
        const { id } = request.params;

    await connection ('references').where('id', id).delete();

    return response.send('Excluido com sucesso')
    }
}