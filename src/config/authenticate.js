/*Middleware para validação de token*/

module.exports = async (req, res, next) => {

	const token = req.body.token || req.query.token || req.headers['x-access-token'];

	if (token == '123'){
		//req.token = '123456';
		next()
	} else {
		next(new Error('Senha inválida', 401))
	}

}
