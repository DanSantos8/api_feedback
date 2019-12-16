module.exports = knex => (req, res, next) => {

	try{
		req.connection = knex

		return next()

	} catch (err){

		return next(err)
	}
}