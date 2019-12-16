/*middleware para formatação de dados*/

module.exports = function (req, res, next) {
	let data = req.data

	if (!data) return next()

	res.status(200).json({
		status: {
			type: 'success',
			message: 'success',
			code: 200,
			error: false
		},
		data
	})
}