const express = require('express')

module.exports = server => {
	const indexRouter = require('../api/index/indexService')(express);
	server.app.use('/feedback', indexRouter);
}