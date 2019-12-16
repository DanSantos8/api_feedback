const moment = require('moment');

module.exports = function (err, req, res, next) {

	let status = err.status || 500

	return res.status(status).json({
		status: {
			type: err.name,
			message: err.message,
			error: true,
			stack: err.stack
		},
	})
}