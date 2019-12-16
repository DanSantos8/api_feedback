const  _ = require('lodash')
const axios = require('axios')
const moment = require('moment')
const { checkErrors} = require('../../utils/functions')

module.exports = express =>{
	var router = express.Router()

	router.post('/', async (req, res, next) => {

		try{

			const feedback = parseInt(req.body.feedback, 10);
			const titulo = req.body.titulo;

			const db = req.connection;

			let row = await db('feedback').select('*').where('titulo', titulo).first();

			if(row)
			{
				const { id } = row;
				if (feedback === 1){
					await db('feedback').update({
						sim: db.raw('sim + 1')
					})
					.where('id', id)
				}
				else
				{
					await db('feedback').update({
						nao: db.raw('nao + 1')
					})
					.where('id', id)
				}
			}

			else

			{
				if (feedback === 1)
				{
					await db('feedback').insert([{titulo: `${titulo}`, sim: 1, nao: 0}])
				}
				else
				{
					await db('feedback').insert([{titulo: `${titulo}`, sim: 0, nao: 1}])
				}

			}


			return next()

		} catch (error){
			return next(error)
		}
	});

	return router

}

