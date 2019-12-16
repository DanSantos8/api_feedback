const _ = require('lodash');

const checkErrors = req => {
	let errors = req.validationErrors();
	if (errors){
		errors = _.map(errors, error => error.msg)
		throw new Error(_.join(errors, ', '), 422)
	}
}

module.exports = { checkErrors}